sap.ui.require([
	"sap/m/Shell",
	"sap/m/App",
	"sap/m/Page",
	"sap/ui/core/ComponentContainer"
], function(
	Shell, App, Page, ComponentContainer) {
	"use strict";

	sap.ui.getCore().attachInit(function() {
		new Shell ({
			app : new App ({
				pages : [
					new Page({
						title : "Object List Item",
						enableScrolling : true,
						content : [
							new ComponentContainer({
								name : "sap.m.sample.ObjectListItem",
								settings : {
									id : "sap.m.sample.ObjectListItem"
								}
							})
						]
					})
				]
			})
		}).placeAt("content");
	});
});