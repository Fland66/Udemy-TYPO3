<?php
declare(strict_types = 1);

namespace Slavlee\T3slavlee\Controller;

use TYPO3\CMS\Core\Utility\GeneralUtility;

/***
 *
 * This file is part of the "T3 Slavlee" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2019 Kevin Chileong Lee <udemy@slavlee.de>, Slavlee
 *
 ***/

class GridController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{
	/**************************************************************************
	 * ACTION - START
	 **************************************************************************/
	/**
	 * Renders Frontend Plugin
	 * @return void
	 */
	public function indexAction()
	{
		for($i = 0; $i < 4; $i++)
		{
			$colNumber = (string)($i+1);
			$this->view->assign('col' . $colNumber, $this->getColElements($colNumber));
		}
	}
	
	/**
	 * Save the moving of elements inside the grid element
	 * @param \Psr\Http\Message\ServerRequestInterface $request
	 * @return \Psr\Http\Message\ResponseInterface
	 */
	public function saveMovingAction(\Psr\Http\Message\ServerRequestInterface $request) : \Psr\Http\Message\ResponseInterface
	{
		$result = 'error';
		
		/**
		 * Indexes: parentUid, contentToMove, sourceCol, targetCol, elementBefore
		 * @var array $parameters
		 */
		$parameters = $request->getQueryParams();
		
		if (is_array($parameters) 
			&& array_key_exists('parentUid', $parameters)
		  	&& array_key_exists('contentToMove', $parameters)
		 	&& array_key_exists('sourceCol', $parameters)
			&& array_key_exists('targetCol', $parameters)
			&& array_key_exists('elementBefore', $parameters))
		{
			$service = GeneralUtility::makeInstance(\Slavlee\T3slavlee\Service\MovingGridService::class, $parameters);
			
			if ($service->move())
			{
				// save in db
				$service->save();
				
				// create success result
				$result = 'success';
			}
		}
		
		return new \TYPO3\CMS\Core\Http\JsonResponse(['result' => $result, 'parameters' => $parameters]);
	}
	/**************************************************************************
	 * ACTION - END
	 **************************************************************************/
	/**************************************************************************
	 * HELPERS - START
	 **************************************************************************/
	/**
	 * Returns an array of tt_content uids based on comma separated string $colNumber
	 * @param integer $colNumber
	 * @return array
	 */
	public function getColElements($colNumber)
	{
		return GeneralUtility::trimExplode(',', $this->settings['col' . (string) $colNumber], true);
	}
	/**************************************************************************
	 * HELPERS - END
	 **************************************************************************/
}