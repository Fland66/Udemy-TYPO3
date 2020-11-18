<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Slavlee.T3slavlee',
            'Grid',
            'Grid'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Slavlee.T3slavlee',
            'Accordion',
            'Accordion'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Slavlee.T3slavlee',
            'Tabs',
            'Tabs'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('t3slavlee', 'Configuration/TypoScript', 'TYPO3 Responsive Template');

        /*****************************************************
         * FLEXFORMS - START
         ****************************************************/
        $pluginSignature = strtolower(\TYPO3\CMS\Core\Utility\GeneralUtility::underscoredToUpperCamelCase('t3slavlee') . '_grid');        
        $GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist'][$pluginSignature] = 'pi_flexform';
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
        	$pluginSignature,
        	'FILE:EXT:t3slavlee/Configuration/FlexForms/Grid.xml' 
		);    
        
        $pluginSignature = strtolower(\TYPO3\CMS\Core\Utility\GeneralUtility::underscoredToUpperCamelCase('t3slavlee') . '_accordion');
        $GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist'][$pluginSignature] = 'pi_flexform';
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
        	$pluginSignature,
        	'FILE:EXT:t3slavlee/Configuration/FlexForms/Accordion.xml'
        );
        
        $pluginSignature = strtolower(\TYPO3\CMS\Core\Utility\GeneralUtility::underscoredToUpperCamelCase('t3slavlee') . '_tabs');
        $GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist'][$pluginSignature] = 'pi_flexform';
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
        	$pluginSignature,
        	'FILE:EXT:t3slavlee/Configuration/FlexForms/Tabs.xml'
        );
        /*****************************************************
         * FLEXFORMS - END
         ****************************************************/
        
    }
);
