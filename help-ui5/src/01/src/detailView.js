Vue.component('detail-view',
{
	props:	
	{
		title:String
	},
	template : '<div>Left<br><slot></slot></div>',
	methods : {
		onClick : function() 
		{
			alert(this.title);
		}
	}
});
