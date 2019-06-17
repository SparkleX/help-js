sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/Input",
	"sap/ui/model/type/Boolean"
], function (Control, Input, TypeBoolean) {
	"use strict";
	return Input.extend("app.core.control.Input", {
		metadata : {
			properties : {
				b1bind:  {type : "string", defaultValue : null}
			}
		},
		init : function () {
			Input.prototype.init.call(this);
			var editable = this.getProperty("editable");
			if(editable==null){
				this.bindProperty("editable", {
					path: "form>/editable",
					type: new TypeBoolean()
				});
			}
		},
		setEditable : function(sValue){
			this.setProperty("editable", sValue, true);
		}
	});
});