<?php
declare(strict_types = 1);

namespace Slavlee\T3slavlee\ViewHelpers\Render\Preview;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Core\Database\Query\Restriction\DeletedRestriction;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Core\Type\Bitmask\Permission;
use TYPO3\CMS\Core\Utility\StringUtility;
use TYPO3\CMS\Backend\View\PageLayoutViewDrawFooterHookInterface;

/**
 * ViewHelper to render RECORDS
 * @author Kevin Chileong Lee
 * @version 1.0
 */

class RecordViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper
{
	/**
	 * $objectManager
	 * @var \TYPO3\CMS\Extbase\Object\ObjectManager
	 */
	protected $objectManager;
	
	/**
	 * $escapeOutput
	 * @var boolean
	 */
	protected $escapeOutput = false;
	
	/**
	 * {@inheritDoc}
	 * @see \TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper::initializeArguments()
	 */
	public function initializeArguments()
	{
		$this->registerArgument('uid', 'integer', 'UID of the content element.');
		$this->registerArgument('pageLayoutView', \TYPO3\CMS\Backend\View\PageLayoutView::class, 'Page Layout View to render elements for the backend.');
	}
	
	/**
	 * Inject $objectManager
	 * @param \TYPO3\CMS\Extbase\Object\ObjectManager $objectManager
	 * @return void
	 */
	public function injectObjectManager(\TYPO3\CMS\Extbase\Object\ObjectManager $objectManager)
	{
		$this->objectManager = $objectManager;
	}
	
	/**
	 * Render View Helper
	 * @return string
	 */
	public function render()
	{
		$row = $this->getContentRow($this->arguments['uid']);
		
		if (!$row)
		{
			return '';
		}
		
		$elementAsHTML = $this->renderTTContent($row);
		
		return $elementAsHTML;
	}
	
	/**
	 * Get tt_content row for uid
	 * @param integer $uid
	 * @return array
	 */
	protected function getContentRow($uid)
	{
		/**
		 * @var \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder
		 */
		$queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('tt_content');
		$queryBuilder->getRestrictions()->removeAll();
		$queryBuilder->getRestrictions()->add(GeneralUtility::makeInstance(DeletedRestriction::class));
		
		return $queryBuilder->select('*')->from('tt_content')->where(
			$queryBuilder->expr()->eq('uid', $queryBuilder->createNamedParameter($uid, \PDO::PARAM_INT))
		)->execute()->fetch();
	}
	
	/**
	 * Render tt_content Element for backend
	 * @param array $row
	 * @return string
	 */
	protected function renderTTContent(array $row)
	{
		$html = '';
		
		$html .= $this->drawHeader($row);
		$html .= $this->drawBody($row);
		
		return $html;
	}
	
	/**
	 * Draws the header part of the backend view
	 * @param array $row
	 * @return string
	 */
	protected function drawHeader(array $row)
	{
		$singleElementHTML = '<div class="t3-page-ce-dragitem" id="' . StringUtility::getUniqueId() . '">';
		
		$pageinfo = BackendUtility::readPageAccess($this->arguments['pageLayoutView']->id, '');
		
		$singleElementHTML .= $this->arguments['pageLayoutView']->tt_content_drawHeader(
			$row,
			$this->arguments['pageLayoutView']->tt_contentConfig['showInfo'] ? 15 : 5,
			false,
			true,
			$this->getBackendUser()->doesUserHaveAccess($pageinfo, Permission::CONTENT_EDIT)
		);
		
		return $singleElementHTML;
	}
	
	/**
	 * Draws the body part of the backend view
	 * @param array $row
	 * @return string
	 */
	protected function drawBody(array $row)
	{
		$innerContent = '<div ' . ($row['_ORIG_uid'] ? ' class="ver-element"' : '') . '>'
				. $this->arguments['pageLayoutView']->tt_content_drawItem($row) . '</div>';
		$singleElementHTML .= '<div class="t3-page-ce-body-inner">' . $innerContent . '</div></div>'
						. $this->tt_content_drawFooter($row);
				
		return $singleElementHTML . '</div>';
	}
	
	/**
	 * Draw the footer for a single tt_content element
	 *
	 * @param array $row Record array
	 * @return string HTML of the footer
	 * @throws \UnexpectedValueException
	 */
	protected function tt_content_drawFooter(array $row)
	{
		$content = '';
		// Get processed values:
		$info = [];
		$this->arguments['pageLayoutView']->getProcessedValue('tt_content', 'starttime,endtime,fe_group,space_before_class,space_after_class', $row, $info);
	
		// Content element annotation
		if (!empty($GLOBALS['TCA']['tt_content']['ctrl']['descriptionColumn']) && !empty($row[$GLOBALS['TCA']['tt_content']['ctrl']['descriptionColumn']])) {
			$info[] = htmlspecialchars($row[$GLOBALS['TCA']['tt_content']['ctrl']['descriptionColumn']]);
		}
	
		// Call drawFooter hooks
		foreach ($GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/class.tx_cms_layout.php']['tt_content_drawFooter'] ?? [] as $className) {
			$hookObject = GeneralUtility::makeInstance($className);
			if (!$hookObject instanceof PageLayoutViewDrawFooterHookInterface) {
				throw new \UnexpectedValueException($className . ' must implement interface ' . PageLayoutViewDrawFooterHookInterface::class, 1404378171);
			}
			$hookObject->preProcess($this, $info, $row);
		}
	
		// Display info from records fields:
		if (!empty($info)) {
			$content = '<div class="t3-page-ce-info">
				' . implode('<br>', $info) . '
				</div>';
		}
		// Wrap it
		if (!empty($content)) {
			$content = '<div class="t3-page-ce-footer">' . $content . '</div>';
		}
		return $content;
	}
	
	/**
	 * @return BackendUserAuthentication
	 */
	protected function getBackendUser()
	{
		return $GLOBALS['BE_USER'];
	}
}

