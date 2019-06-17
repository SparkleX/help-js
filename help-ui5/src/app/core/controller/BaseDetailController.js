sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, Fragment, JSONModel) {
	"use strict";

	return Controller.extend("app.core.controller.Detail", {
		onInit: function() {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachMatched(function(oEvent) {
				this.onLoad(oEvent.getParameter("arguments").id);
			}, this);
        },
		onLoad : function(id) {
        	var oModel = new JSONModel();
			oModel.loadData("mock/data.json",null,false);	
			this.getOwnerComponent().setModel(oModel);
			this.loop(this.getView().getContent());
		},
		onNavBack : function()
		{
			window.history.back();
		},
		loop: function(content)
		{
			for(var k in content)
			{
				var item = content[k];
				console.log(item.getMetadata().getName());
				if(item.getContent!==undefined)
				{
					this.loop(item.getContent());
				}
			}
		}
	});

});