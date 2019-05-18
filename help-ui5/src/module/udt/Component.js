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
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var oData = {
				"DocDate":"20181112",
				"CardCode":"C001",
				"Status":"N",
				"DocTotal":158.26,
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
		}
	});

});