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

class TabsController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{
	/**************************************************************************
	 * ACTION - START
	 **************************************************************************/
	/**
	 * Renders Frontend Plugin
	 * @return void
	 */
	public function showAction()
	{
		$this->view->assign('items', $this->getItems());
		$this->view->assign('ttContentUid', $this->configurationManager->getContentObject()->data['uid']);
	}
	/**************************************************************************
	 * ACTION - END
	 **************************************************************************/
	/**************************************************************************
	 * HELPERS - START
	 **************************************************************************/
	/**
	 * Returns an array of tt_content uids based on comma separated string
	 * @return array
	 */
	public function getItems()
	{
		return GeneralUtility::trimExplode(',', $this->settings['items'], true);
	}
	/**************************************************************************
	 * HELPERS - END
	 **************************************************************************/
}