<?php
declare(strict_types = 1);
namespace Slavlee\T3slavlee\Service;

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Core\Database\Query\QueryBuilder;
use TYPO3\CMS\Core\Database\Query\Restriction\DeletedRestriction;
use TYPO3\CMS\Adminpanel\Modules\Info\GeneralInformation;

/***
 *
 * This file is part of the "T3 Slavlee" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2020 Kevin Chileong Lee <udemy@slavlee.de>, Slavlee
 *
 ***/

class MovingGridService
{
	/**
	 * $arguments
	 * @var array
	 */
	protected $arguments = [];
	
	/**
	 * $flexForm
	 * @var array
	 */
	protected $flexForm = [];
	
	/**
	 * Create a moving grid service
	 * @param array $arguments
	 * @return void
	 */
	public function __construct(array $arguments)
	{
		$this->arguments = $arguments;
		
		$this->flexForm = $this->fetchFlexForm();
		
		if (!is_array($this->flexForm) || count($this->flexForm) == 0)
		{
			throw new \Exception('No flexform found.');
		}
	}
	
	/**
	 * Move element
	 * @return boolean
	 */
	public function move()
	{
		// remove source element
		$this->removeElement($this->arguments['contentToMove'], $this->arguments['sourceCol']);
		
		if ($this->arguments['elementBefore'] > 0)
		{
			$this->moveElementAfter($this->arguments['contentToMove'], ['id' => $this->arguments['elementBefore'], 'colPos' => $this->arguments['targetCol']]);
		}else
		{
			$this->prependElement($this->arguments['contentToMove'], $this->arguments['targetCol']);
		}
		
		return true;
	}
	
	/**
	 * Save the FlexForm changes in the database
	 * @return mixed
	 */
	public function save()
	{
		/**
		 * @var \TYPO3\CMS\Core\Configuration\FlexForm\FlexFormTools $flexFormTools
		 */
		$flexFormTools = GeneralUtility::makeInstance(\TYPO3\CMS\Core\Configuration\FlexForm\FlexFormTools::class);
		$flexFormString = $flexFormTools->flexArray2Xml($this->flexForm, true);
		
		$queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('tt_content');
		return $queryBuilder->update('tt_content')->where(
			$queryBuilder->expr()->eq('uid', $queryBuilder->createNamedParameter($this->arguments['parentUid'], \PDO::PARAM_INT))
		)->set('pi_flexform', $flexFormString)->execute();
	}

	/**
	 * Insert an element aftet the target element
	 * @param array $elementToMove
	 * @param array $elementBefore
	 * @return void
	 */
	protected function moveElementAfter($elementToMove, $elementBefore)
	{
		$uids = GeneralUtility::trimExplode(',', $this->flexForm['data']['sDEF']['lDEF']['settings.col' . $elementBefore['colPos']]['vDEF'], true);
		$elementBeforeKey = false;
		
		foreach ($uids as $key => $uid)
		{
			if ($uid == $elementBefore['id'])
			{
				$elementBeforeKey = $key;
				break;
			}
		}
		
		if ($elementBeforeKey !== false)
		{
			$before = array_slice($uids, 0, $elementBeforeKey+1);
			$after = array_slice($uids, $elementBeforeKey+1);
			$uids = array_merge($before, [$elementToMove], $after);
			
			$this->flexForm['data']['sDEF']['lDEF']['settings.col' . $colPos]['vDEF'] = implode(',', $uids);
		}				
	}
	
	/**
	 * Append an element to the target colPos
	 * @param integer $elementToMove
	 * @param integer $colPos
	 * @return void
	 */
	protected function prependElement($elementToPrepend, $colPos)
	{
		$uids = GeneralUtility::trimExplode(',', $this->flexForm['data']['sDEF']['lDEF']['settings.col' . $elementBefore['colPos']]['vDEF'], true);
		$uids = array_merge([$elementToPrepend], $uids);
		$this->flexForm['data']['sDEF']['lDEF']['settings.col' . $colPos]['vDEF'] = implode(',', $uids);
	}
	
	/**
	 * Removes an element regardless of its column
	 * @param integer $elementToRemove
	 * @param integer $colPos
	 * @return void
	 */
	protected function removeElement($elementToRemove, $colPos)
	{
		$uids = GeneralUtility::trimExplode(',', $this->flexForm['data']['sDEF']['lDEF']['settings.col' . $colPos]['vDEF'], true);
		
		foreach ($uids as $key => $uid)
		{
			if ($uid == $elementToRemove)
			{
				unset($uids[$key]);
				break;
			}
		}
		
		$this->flexForm['data']['sDEF']['lDEF']['settings.col' . $colPos]['vDEF'] = implode(',', $uids); 
	}
	
	/**
	 * Return the flexform of the parent element
	 * @return array
	 */
	private function fetchFlexForm()
	{
		$queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('tt_content');
		$queryBuilder->getRestrictions()->removeAll();
		$queryBuilder->getRestrictions()->add(GeneralUtility::makeInstance(DeletedRestriction::class));
		$flexFormString = $queryBuilder->select('pi_flexform')->from('tt_content')->where(
			$queryBuilder->expr()->eq('uid', $queryBuilder->createNamedParameter($this->arguments['parentUid'], \PDO::PARAM_INT))
		)->execute()->fetchColumn(0);	
		
		return $flexFormString ? GeneralUtility::xml2array($flexFormString) : [];
	}
}