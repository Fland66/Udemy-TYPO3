/**
 * @project Udemy Kurs
 * @package Lerne ein Responsive TYPO3 Template zu programmieren
 * @author Kevin Chileong Lee
 * @copyright (c) 2020. Kevin Chileong Lee. All Rights reserved
 */

define(['jquery', 'jquery-ui/draggable'], function($){
	'use strict';
	
	var Dragable = {
		handle: ".t3js-page-ce-draghandle",
		revert: "invalid",
		active: "active",
		dropZone: ".t3slavleejs-page-ce-dropzone-available",
		dropZoneContainer: ".t3slavlee-dropzone-container",
		dragItem: ".t3-page-ce-dragitem",
		dragItemShadow: "dragitem-shadow"
	};
	
	Dragable.onDragStart = function(element){
		var gridRow = element.parents(Dragable.dropZoneContainer);
		var dropZones = gridRow.find(Dragable.dropZone);
		console.debug(gridRow);
		console.debug(dropZones);
		dropZones.addClass(Dragable.active);
		
		// Add shadow
		var dragItemContainer = element.find(Dragable.dragItem);
		dragItemContainer.addClass(Dragable.dragItemShadow);
	}
	
	Dragable.onDragStop = function(element) {
		var gridRow = element.parents(Dragable.dropZoneContainer);
		var dropZones = gridRow.find(Dragable.dropZone);
		
		dropZones.removeClass(Dragable.active);
		
		// Add shadow
		var dragItemContainer = element.find(Dragable.dragItem);
		dragItemContainer.removeClass(Dragable.dragItemShadow);
	}
	
	$(".t3slavleejs-page-ce").draggable({
		handle: Dragable.handle,
		revert: Dragable.revert,
		start: function(){
			Dragable.onDragStart($(this));
		},
		stop: function(){
			Dragable.onDragStop($(this));
		}
	});
});