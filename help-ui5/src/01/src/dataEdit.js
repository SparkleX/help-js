Vue.component('data-edit',
{
	props:	{
		bind: String,
		value: String
	},
//	template : '<input v-bind:value="this.$parent.textVal"></input>',
	template : '<input style="width:100%;" v-bind:value="value" v-on:input="onChange($event)"></input>',
	methods : {
		onChange: function($event)
		{
			//alert(this.bind);
			//alert($event.target.value);
			this.$emit('input', $event.target.value);
		}
	}
});
