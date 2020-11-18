<?php
declare(strict_types = 1);

namespace Slavlee\T3slavlee\ViewHelpers\Render\Record;

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Database\ConnectionPool;

/**
 * ViewHelper to render RECORDS
 * @author Kevin Chileong Lee
 * @version 1.0
 */

class PropertyViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper
{
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
		$this->registerArgument('property', 'string', 'Name of the database column in tt_content.');
	}
	
	/**
	 * Render View Helper
	 * @return string
	 */
	public function render()
	{		
		return $this->getPropertyForTTContent($this->arguments['property'], $this->arguments['uid']);
	}
	
	/**
	 * Return $property value of tt_content entry with ID: $uid
	 * @param string $property
	 * @param integer $uid
	 * @return string
	 */
	protected function getPropertyForTTContent($property, $uid)
	{
		$queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getQueryBuilderForTable('tt_content');
		$statement = $queryBuilder	
						->select($property)
						->from('tt_content')
						->where(
      						$queryBuilder->expr()->eq('uid', $queryBuilder->createNamedParameter($uid, \PDO::PARAM_INT))
   						)
   						->execute();
		return $statement->fetchColumn(0);
	}
}

