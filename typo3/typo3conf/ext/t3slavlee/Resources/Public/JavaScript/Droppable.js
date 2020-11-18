/**
 * @project Udemy Kurs
 * @package Lerne ein Responsive TYPO3 Template zu programmieren
 * @author Kevin Chileong Lee
 * @copyright (c) 2020. Kevin Chileong Lee. All Rights reserved
 */

define(['jquery', 'jquery-ui/droppable'], function($){
	'use strict';
	
	var Droppable = {
		accept: ".t3slavleejs-page-ce-dropzone-available",
		contentIdentifier: "t3slavleejs-page-ce",
		dropPossibleHoverClass: "t3-page-ce-dropzone-possible"
	};

	/**
	 * Adds CSS classes when hovering over a dropzone
	 * @param jQuery $draggableElement
	 * @param jQuery $droppableElement
	 * @private
	 */
	Droppable.onDropHoverOver = function(draggableElement, droppableElement) {		
		if (draggableElement.hasClass(Droppable.contentIdentifier))
		{
			droppableElement.addClass(Droppable.dropPossibleHoverClass);
		}
	}
	
	/**
	 * Removes CSS classes when hovering over a dropzone
	 * @param jQuery $draggableElement
	 * @param jQuery $droppableElement
	 * @private
	 */
	Droppable.onDropHoverOut = function(draggableElement, droppableElement) {		
		if (draggableElement.hasClass(Droppable.contentIdentifier))
		{
			droppableElement.removeClass(Droppable.dropPossibleHoverClass);
		}
	}
	
	/**
	 * this method does the whole logic, when a draggable is dropped onto the dropzone
	 * sending out the request and afterwards move the HTML elemnt in the right place.
	 * 
	 * @param jQuery draggableElement
	 * @param  jQuery droppableElement
	 * @param Event event
	 * @private
	 */
	Droppable.onDrop = function(draggableElement, droppableElement, event)
	{
		var contentToMove = $(draggableElement).attr("data-uid");
		var sourceCol = $(draggableElement).parent().attr("data-colpos");
		var parentUid = $(draggableElement).parents(".t3js-page-ce:first").attr("data-uid");
		
		var targetCol = $(droppableElement).parent().attr("data-colpos");
		var elementBefore = $(droppableElement).prev(Droppable.contentIdentifier);
		
		if ($(elementBefore).length > 0)
		{
			elementBefore = $(elementBefore).attr("data-uid");
		}else
		{
			elementBefore = 0;	
		}
		
		var dropZoneContainer = $(droppableElement).closest(".t3slavlee-dropzone-container");
		var ajaxUrlName = null;
		
		if ($(dropZoneContainer).length > 0)
		{
			// check if its a grid
			if($(dropZoneContainer).hasClass("row"))
			{
				// yes it is
				ajaxUrlName = "t3slavlee_grid_move";
			}else if($(dropZoneContainer).hasClass("panel-group"))
			{
				// no, its an accordion
				ajaxUrlName = "t3slavlee_accordion_move";
			}
		}
		
		Droppable.saveMovingAction({
			contentToMove: contentToMove,
			sourceCol: sourceCol,
			parentUid: parentUid,
			targetCol: targetCol,
			elementBefore: elementBefore
		}, ajaxUrlName);
	}
	
	/**
 	 * this method oes the actual AJAX request for the move action.
	 *
	 * @param Object parameters
	 * @param string ajaxUrlName
	 * @private
	 */
	Droppable.saveMovingAction = function(parameters, ajaxUrlName)
	{
		$.getJSON(TYPO3.settings.ajaxUrls[ajaxUrlName], parameters).always(function(data, textStatus, jqXHR){
			if (textStatus == "success")
			{
				self.location.reload(true);
			}
		});
	}
	
	$(Droppable.accept).droppable({
		accept: "." + Droppable.contentIdentifier,
		over: function(e, ui){
			Droppable.onDropHoverOver($(ui.draggable), $(this));
		},
		out: function(e, ui){
			Droppable.onDropHoverOut($(ui.draggable), $(this));
		},
		drop: function(e, ui) {
			Droppable.onDrop($(ui.draggable), $(this), e);
		}
	});
});