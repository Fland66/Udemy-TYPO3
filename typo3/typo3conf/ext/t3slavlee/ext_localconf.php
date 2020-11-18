<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Slavlee.T3slavlee',
            'Grid',
            [
                'Grid' => 'index'
            ],
            // non-cacheable actions
            [
                
            ]
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Slavlee.T3slavlee',
            'Accordion',
            [
                'Accordion' => 'show'
            ],
            // non-cacheable actions
            [
                
            ]
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Slavlee.T3slavlee',
            'Tabs',
            [
                'Tabs' => 'show'
            ],
            // non-cacheable actions
            [
                
            ]
        );

        // wizards
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
            'mod {
                wizards.newContentElement.wizardItems.plugins {
                    elements {
                        grid {
                            iconIdentifier = t3slavlee-plugin-grid
                            title = LLL:EXT:t3slavlee/Resources/Private/Language/locallang_db.xlf:tx_t3slavlee_grid.name
                            description = LLL:EXT:t3slavlee/Resources/Private/Language/locallang_db.xlf:tx_t3slavlee_grid.description
                            tt_content_defValues {
                                CType = list
                                list_type = t3slavlee_grid
                            }
                        }
                        accordion {
                            iconIdentifier = t3slavlee-plugin-accordion
                            title = LLL:EXT:t3slavlee/Resources/Private/Language/locallang_db.xlf:tx_t3slavlee_accordion.name
                            description = LLL:EXT:t3slavlee/Resources/Private/Language/locallang_db.xlf:tx_t3slavlee_accordion.description
                            tt_content_defValues {
                                CType = list
                                list_type = t3slavlee_accordion
                            }
                        }
                        tabs {
                            iconIdentifier = t3slavlee-plugin-tabs
                            title = LLL:EXT:t3slavlee/Resources/Private/Language/locallang_db.xlf:tx_t3slavlee_tabs.name
                            description = LLL:EXT:t3slavlee/Resources/Private/Language/locallang_db.xlf:tx_t3slavlee_tabs.description
                            tt_content_defValues {
                                CType = list
                                list_type = t3slavlee_tabs
                            }
                        }
                    }
                    show = *
                }
           }'
        );
		$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
		
		$iconRegistry->registerIcon(
			't3slavlee-plugin-grid',
			\TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
			['source' => 'EXT:t3slavlee/Resources/Public/Icons/user_plugin_grid.svg']
		);
	
		$iconRegistry->registerIcon(
			't3slavlee-plugin-accordion',
			\TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
			['source' => 'EXT:t3slavlee/Resources/Public/Icons/user_plugin_accordion.svg']
		);
	
		$iconRegistry->registerIcon(
			't3slavlee-plugin-tabs',
			\TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
			['source' => 'EXT:t3slavlee/Resources/Public/Icons/user_plugin_tabs.svg']
		);
	
		/*
		 * TCEFORM
		 */
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3slavlee/Configuration/PageTS/TCEFORM.txt">');
		
		/*
		 * Hooks
		 */
		$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/class.tx_cms_layout.php']['tt_content_drawItem']['t3slavlee'] = \Slavlee\T3slavlee\Hooks\PageLayoutViewDrawItemHook::class;
    }
);
