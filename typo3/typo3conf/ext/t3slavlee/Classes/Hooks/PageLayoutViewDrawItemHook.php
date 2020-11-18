<?php
declare(strict_types = 1);
namespace Slavlee\T3slavlee\Hooks;

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Service\FlexFormService;
use TYPO3\CMS\Fluid\View\StandaloneView;
use TYPO3\CMS\Core\Page\PageRenderer;

class PageLayoutViewDrawItemHook implements \TYPO3\CMS\Backend\View\PageLayoutViewDrawItemHookInterface
{
	/**
	 * 
	 * {@inheritDoc}
	 * @see \TYPO3\CMS\Backend\View\PageLayoutViewDrawItemHookInterface::preProcess()
	 */
	public function preProcess(\TYPO3\CMS\Backend\View\PageLayoutView &$parentObject, &$drawItem, &$headerContent, &$itemContent, array &$row)
	{
		switch($row['list_type'])
		{
			case 't3slavlee_grid':
				$this->drawGrid($parentObject, $drawItem, $headerContent, $itemContent, $row);
				break;
			case 't3slavlee_accordion':
			    $this->drawAccordion($parentObject, $drawItem, $headerContent, $itemContent, $row);
			    break;
		}
	}
	
	/**
	 * Draws Slavlee Accordion
	 * @param PageLayoutView $parentObject
	 * @param bool $drawItem
	 * @param string $headerContent
	 * @param string $itemContent
	 * @param array $row
	 */
	protected function drawAccordion(&$parentObject, &$drawItem, &$headerContent, &$itemContent, &$row)
	{
	    // load drag & drop JS plugin
	    $this->addDragAndDroppable();
	    
	    // Draw the grid
	    $flexform = GeneralUtility::makeInstance(FlexFormService::class)->convertFlexFormContentToArray($row['pi_flexform']);
	    
	    if ($flexform)
	    {
	        $fluidTemplateFile = GeneralUtility::getFileAbsFileName('EXT:t3slavlee/Resources/Private/Templates/Preview/Accordion.html');
	        
	        if ($fluidTemplateFile)
	        {
	            /**
	             * @var StandaloneView $view
	             */
	            $view = GeneralUtility::makeInstance(StandaloneView::class);
	            $view->setTemplatePathAndFilename($fluidTemplateFile);
	            $view->setPartialRootPaths(['EXT:t3slavlee/Resources/Private/Partials/']);
	            $view->assign('settings', $flexform['settings']);
	            $view->assign('pageLayoutView', $parentObject);
	            $view->assign('items', $this->getAccordionItems($flexform['settings']));
	            
	            $itemContent = $view->render();
	            
	            if ($itemContent)
	            {
	                $drawItem = false;
	            }
	        }
	    }
	}
	
	/**
	 * Draws Slavlee Columns
	 * @param PageLayoutView $parentObject
	 * @param bool $drawItem
	 * @param string $headerContent
	 * @param string $itemContent
	 * @param array $row
	 */
	protected function drawGrid(&$parentObject, &$drawItem, &$headerContent, &$itemContent, &$row)
	{			
		// load drag & drop JS plugin
		$this->addDragAndDroppable();
		
		// Draw the grid
		$flexform = GeneralUtility::makeInstance(FlexFormService::class)->convertFlexFormContentToArray($row['pi_flexform']);
		
		if ($flexform)
		{
			$cols = [];
			
			for($i = 0; $i < 4; $i++)
			{
				$cols[] = $this->getColElements('col' . (string)($i+1), $flexform['settings']);
			}
			
			$fluidTemplateFile = GeneralUtility::getFileAbsFileName('EXT:t3slavlee/Resources/Private/Templates/Preview/Grid.html');
			
			if ($fluidTemplateFile)
			{
				/**
				 * @var StandaloneView $view
				 */
				$view = GeneralUtility::makeInstance(StandaloneView::class);
				$view->setTemplatePathAndFilename($fluidTemplateFile);
				$view->setPartialRootPaths(['EXT:t3slavlee/Resources/Private/Partials/']);
				$view->assign('settings', $flexform['settings']);
				$view->assign('pageLayoutView', $parentObject);
				
				for($i = 0; $i < 4; $i++)
				{
					$view->assign('col' . (string)($i+1), $cols[$i]);
				}
				
				$itemContent = $view->render();
				
				if ($itemContent)
				{
					$drawItem = false;
				}
			}
		}
	}
	
	/**
	 * Add jQuery drag & droppable Plugin from t3slavlee
	 * @return void
	 */
	protected function addDragAndDroppable()
	{
		/**
		 * @var PageRenderer $pageRenderer
		 */
		$pageRenderer = GeneralUtility::makeInstance(PageRenderer::class);
		
		$pageRenderer->loadRequireJsModule('TYPO3/CMS/T3slavlee/Dragable');
		$pageRenderer->loadRequireJsModule('TYPO3/CMS/T3slavlee/Droppable');
	}
	
	/**
	 * Return array of all tt_content uids that are assigned
	 * @param array $settings
	 * @return array
	 */
	protected function getAccordionItems(array &$settings)
	{
	    return $this->getColElements('items', $settings);
	}
	
	/**
	 * Returns an array of all tt_contzent uids that are defined in the plugin
	 * @param string $colNumber
	 * @param array $settings
	 * @return array
	 */
	protected function getColElements($colNumber, array &$settings)
	{
		if(!array_key_exists($colNumber, $settings))
		{
			return [];
		}
		
		return GeneralUtility::trimExplode(',', $settings[$colNumber], true);
	}
}