import Vue from "@vue/cli";

let vm = new Vue({
	el : '#vue_det',
	data : {
		site : "????",
		url : "www.runoob.com",
		alexa : "10000",
		textVal : "abc"
	},
	methods : {
		details : function() {
			return this.site + " - ???????,????!";
		},
		onClick : function() {
			alert('hello');
			this.textVal = "123";
		}
	}
});
