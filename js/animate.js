$(document).ready(function(){	
    $("#shut_btn").rotate({
        bind:
        {
			mouseover : function() {
				$(this).rotate({animateTo:120})
			},
			mouseout : function() {
				$(this).rotate({animateTo:0})
			}
		}
    });
    $("#res_btn").rotate({
        bind:
        {
			mouseover : function() {
				$(this).rotate({animateTo:180})
			},
			mouseout : function() {
				$(this).rotate({animateTo:0})
			}
        }
	});
	$("#sub_btn").rotate({
		bind:
		{
			mouseover : function() {
				$(this).rotate({animateTo:120})
			},
			mouseout : function() {
				$(this).rotate({animateTo:0})
			}
		}
	});
});

/*$("#sub_btn").rotate({
		bind:
		{
			click: function(){
				var rot = function(){
					$(this).rotate({animateTo:360;})
				}
				while($("#passfield").value != "")
					rot();
			},
			$("#passfield").keypress(){
				if (event.which == 13){
					var rot = function(){
						$(this).rotate({animateTo:360;})
					}
					while($("#passfield").value != "")
						rot();
				}	
			}
			
		}
	}
*/
