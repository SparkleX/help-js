sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, Fragment, JSONModel) {
	"use strict";

	return Controller.extend("sap.b1.module.udt.controller.Detail", {
		onInit: function() {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachMatched(function(oEvent) {
				this.onLoad(oEvent.getParameter("arguments").id);
			}, this);
        },
		onLoad : function(id) {
			//alert(id);
        	var oModel = new JSONModel();
			oModel.loadData("data.json",null,false);	
			this.getOwnerComponent().setModel(oModel);
			//this.setModel(oModel);			
		},
		onTestClick: function () {
			alert("this is detail view");
		}
	});

});