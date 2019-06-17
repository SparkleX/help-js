sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, Fragment, JSONModel) {
	"use strict";

	return Controller.extend("app.core.controller.BaseDetailController", {
		onInit: function() {
			var component =  this.getOwnerComponent();
			var oRouter = component.getRouter();
			oRouter.getRoute("detail").attachMatched(function(oEvent) {
				this.onLoad(oEvent.getParameter("arguments").id);
			}, this);
			
			var omFormMode = new JSONModel({"editable":false});
			component.setModel(omFormMode, "form");
        },
		onLoad : function(id) {
        	var oModel = new JSONModel();
			oModel.loadData("mock/data.json",null,false);	
			this.getOwnerComponent().setModel(oModel);
		},
		onNavBack : function()
		{
			window.history.back();
		}
	});

});