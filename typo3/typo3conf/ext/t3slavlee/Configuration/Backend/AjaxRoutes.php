<?php
return [
	't3slavlee_grid_move' => [
		'path' => '/t3slavlee/grid/move',
		'target' => \Slavlee\T3slavlee\Controller\GridController::class . '::saveMovingAction'
	],
    't3slavlee_accordion_move' => [
        'path' => '/t3slavlee/accordion/move',
        'target' => \Slavlee\T3slavlee\Controller\AccordionController::class . '::saveMovingAction'
    ]
];