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

class MovingAccordionService extends MovingGridService
{	
	/**
	 * Create a moving grid service
	 * @param array $arguments
	 * @return void
	 */
	public function __construct(array $arguments)
	{
		parent::__construct($arguments);
	}

	/**
	 * Insert an element aftet the target element
	 * @param array $elementToMove
	 * @param array $elementBefore
	 * @return void
	 */
	protected function moveElementAfter($elementToMove, $elementBefore)
	{
		$uids = GeneralUtility::trimExplode(',', $this->flexForm['data']['sDEF']['lDEF']['settings.items']['vDEF'], true);
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
			
			$this->flexForm['data']['sDEF']['lDEF']['settings.items']['vDEF'] = implode(',', $uids);
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
		$uids = GeneralUtility::trimExplode(',', $this->flexForm['data']['sDEF']['lDEF']['settings.items']['vDEF'], true);
		$uids = array_merge([$elementToPrepend], $uids);
		$this->flexForm['data']['sDEF']['lDEF']['settings.items']['vDEF'] = implode(',', $uids);
	}
	
	/**
	 * Removes an element regardless of its column
	 * @param integer $elementToRemove
	 * @param integer $colPos
	 * @return void
	 */
	protected function removeElement($elementToRemove, $colPos)
	{
	    $uids = GeneralUtility::trimExplode(',', $this->flexForm['data']['sDEF']['lDEF']['settings.items']['vDEF'], true);
		
		foreach ($uids as $key => $uid)
		{
			if ($uid == $elementToRemove)
			{
				unset($uids[$key]);
				break;
			}
		}
		
		$this->flexForm['data']['sDEF']['lDEF']['settings.items']['vDEF'] = implode(',', $uids); 
	}
}