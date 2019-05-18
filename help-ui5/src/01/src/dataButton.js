Vue.component('data-button',
{
	props:	
	{
		click: Function
	//	text: {type: String, required: true}
	},
	template : '<button style="width:100%;" v-on:click="onClickProc"><slot>BUTTON</slot></button>',
	methods : {
		onClickProc: function()
		{
			this.click(this);
				//this.$parent.$parent[this.click].call(this);
		}
	}
});
