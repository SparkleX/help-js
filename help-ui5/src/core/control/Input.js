sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/Input"
], function (Control, Input) {
	"use strict";
	return Input.extend("sap.b1.core.control.Input", {
		metadata : {
			properties : {
				b1bind: 	{type : "string", defaultValue : null}
			}
		},
		init : function () {
			Input.prototype.init.call(this);
		}
	});
});