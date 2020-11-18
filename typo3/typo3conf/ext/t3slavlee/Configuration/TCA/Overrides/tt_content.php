<?php
defined('TYPO3_MODE') || die();

$tmp_t3slavlee_columns = [

    'bx_enable' => [
        'exclude' => false,
        'label' => 'LLL:EXT:t3slavlee/Resources/Private/Language/locallang_db.xlf:tx_t3slavlee_domain_model_bxslider.bx_enable',
        'config' => [
            'type' => 'check',
            'items' => [
                '1' => [
                    '0' => 'LLL:EXT:lang/locallang_core.xlf:labels.enabled'
                ]
            ],
            'default' => 0,
        ]
    ],
    'bx_image_count' => [
        'exclude' => false,
        'label' => 'LLL:EXT:t3slavlee/Resources/Private/Language/locallang_db.xlf:tx_t3slavlee_domain_model_bxslider.bx_image_count',
        'config' => [
            'type' => 'input',
            'size' => 4,
            'eval' => 'int,required'
        ]
    ],
    'bx_display_time' => [
        'exclude' => false,
        'label' => 'LLL:EXT:t3slavlee/Resources/Private/Language/locallang_db.xlf:tx_t3slavlee_domain_model_bxslider.bx_display_time',
        'config' => [
            'type' => 'input',
            'size' => 4,
            'eval' => 'int'
        ]
    ],

];

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content',$tmp_t3slavlee_columns);

$GLOBALS['TCA']['tt_content']['palettes']['gallerySettings']['showitem'] .= ',--linebreak--,bx_enable;LLL:EXT:t3slavlee/Resources/Private/Language/locallang_db.xlf:tx_t3slavlee_domain_model_bxslider.bx_enable,bx_image_count;LLL:EXT:t3slavlee/Resources/Private/Language/locallang_db.xlf:tx_t3slavlee_domain_model_bxslider.bx_image_count,bx_display_time;LLL:EXT:t3slavlee/Resources/Private/Language/locallang_db.xlf:tx_t3slavlee_domain_model_bxslider.bx_display_time';