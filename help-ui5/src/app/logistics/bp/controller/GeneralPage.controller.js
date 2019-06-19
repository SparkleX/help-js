sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/ListItem"
], function (Controller, MessageToast, Fragment, JSONModel,ListItem) {
	"use strict";

	var GeneralPage =Controller.extend("app.logistics.bp.GeneralPage", {});

	GeneralPage.prototype.onInit=function() {

		/*var oModel = new JSONModel();
		oModel.loadData("mock/bpCurrency.json",null,false);	
		this.getOwnerComponent().setModel(oModel, "bpCurrency");*/
		var eConBp = this.byId("idConBp");
		var listItem = new ListItem({key:"C200",text:"C200"});
		eConBp.addItem(listItem);
		
	}

	GeneralPage.prototype.onChangeFName=function(oEvent) {
		console.log("change");
	}
	return GeneralPage;
});