sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";
	return UIComponent.extend("sap.b1.module.udt.Component", {
		metadata : {
			manifest: "json"
		},

		init : function () {
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
			// call the init function of the parent
			//UIComponent.prototype.init.apply(this, arguments);

			// set data model
			/*var oData = {
				"DocDate":"20181112",
				"CardCode":"C001",
				"Status":"N",
				"DocTotal":158.26,
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			var oList = [
				{
					"DocEntry":1,
					"DocDate":"20181112",
					"CardCode":"C001",
					"Status":"N",
					"DocTotal":158.26
				},
				{
					"DocEntry":2,
					"DocDate":"20181112",
					"CardCode":"C001",
					"Status":"N",
					"DocTotal":158.26
				}			
			];
			var oModelList = new JSONModel(oList);	
			this.setModel(oModelList, "list");		*/
			var oModelList = new JSONModel();
			oModelList.loadData("list.json",null,false);	

		
			this.setModel(oModelList, "list");				
		}
	});

}, /*export*/ true);