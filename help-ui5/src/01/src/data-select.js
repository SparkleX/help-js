Vue.component(
				'button-counter',
				{
					data : function() {
						return {
							count : 0
						}
					},
					props:	
					{
						title:String
					},
					template : '<button v-on:click="onClick">You clicked me {{ count }} times.</button>',
					methods : {
						onClick : function() 
						{
							alert(this.title);
						}
					}
				});
