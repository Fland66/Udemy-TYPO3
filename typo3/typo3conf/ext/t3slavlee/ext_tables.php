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

    }
);
