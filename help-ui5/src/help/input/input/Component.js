sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.walkthrough.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			UIComponent.prototype.init.apply(this, arguments);
			var oModel = new JSONModel('mock/data.json');
			this.setModel(oModel);
			var oModel = new JSONModel('mock/list.json');
			this.setModel(oModel, "items");
			
		}
	});

});