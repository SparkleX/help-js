import * as detailView from './detailView.js';
import * as dataEdit from './dataEdit.js';
import * as dataButton from './dataButton.js';


var vm = new Vue({
	el : '#vue_det',
	data : {
		site : "????",
		url : "www.runoob.com",
		alexa : "10000",
		textVal : "abc``"
	},
	methods : {
		details : function() {
			return this.site + " - ???????,????!";
		},
		onClick : function() {
			alert('hello');
			this.textVal = "123";
		},
		onClickSave : function() {
			alert(this.url);
		}
	}
});
