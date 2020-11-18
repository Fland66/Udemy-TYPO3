<?php
declare(strict_types = 1);

namespace Slavlee\T3slavlee\ViewHelpers\Render;

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
		$conf = $this->buildConfArray($this->arguments['uid']);
		$recordObjectManager = $this->objectManager->get(\TYPO3\CMS\Frontend\ContentObject\RecordsContentObject::class);
		return $recordObjectManager->render($conf);
	}
	
	/**
	 * Create config array for RecordsContentObject
	 * @param integer $uid
	 * @return array
	 */
	protected function buildConfArray($uid)
	{
		return [
			'tables' => 'tt_content',
			'source' => $uid,
			'dontCheckPid' => 1
		];
	}
}

