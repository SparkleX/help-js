sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";
	return UIComponent.extend("help.Component", {
		metadata : {
			manifest: "json"
		},

		init : function () {
			UIComponent.prototype.init.apply(this, arguments);
			var oModel = new JSONModel();
			oModel.loadData("mock/data.json",null,false);
			this.setModel(oModel);
			
			var oModel = new JSONModel();
			oModel.loadData("mock/vv.json",null,false);
			this.setModel(oModel, "vv");
			
		}
	});

}, /*export*/ true);