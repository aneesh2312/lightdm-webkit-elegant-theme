var active = null;
var submitted = false;
var i = -1;

$(document).ready(
	function(){
		var userl = document.getElementById('userlist');
		for (j in lightdm.users)
		{
			user = lightdm.users[j];
			var image = user.image;
			if (i == -1){
				change_activeness(user.name);
				i = 0;
			}
			var toappend = '<td style="width:49;"><li><a href="#" onclick="change_activeness(\''+user.name+'\')"><span rel="tooltip" title="'+user.display_name+'"><img src="'+image+'" class="img-circle" alt="'+user.display_name+'" style="height:35; width:35;" onerror="imgNotFound(this)"/></span></a></li></td>&nbsp;&nbsp;&nbsp;';	
			$(userl).append(toappend);
		}
		
		$('#passfield').keypress(function(){
			if (event.which == 13)
				submit();
		});
	}
);

function change_activeness(id){
		if (submitted != true)
		{
			active = id;
			set_active_user_info(id);
			lightdm.start_authentication(active);
			document.getElementById('passfield').value = "";
			document.getElementById('err_notif').innerHTML = "";
		}
	}
	
function check_authentication(){
		if (lightdm.is_authenticated){
			lightdm.login(lightdm.authentication_user, lightdm.default_session);
		}
		else if (i < 3){
			i = i + 1;
			setTimeout("check_authentication()", 1000);
		} 
		else{
			submitted = false;
			document.getElementById('passfield').value="";
			document.getElementById('err_notif').innerHTML = "Invalid Password!";
			lightdm.start_authentication(active);
		}	
	}
	
function submit(){
		var secr = $('#passfield').val();
		if(secr != "")
		{
			lightdm.provide_secret(secr);
			submitted = true;
			i = 0;
			check_submittion();
			document.getElementById('err_notif').innerHTML = "<img src='logos/proc.GIF' style='height:45; width:45;'/>";
		}
	}

function check_submittion(){
		if (submitted == true){
			setTimeout("check_authentication()", 1000);
		}
	}

function set_active_user_info(id){
		for (j in lightdm.users)
		{
			if (lightdm.users[j].name == id)
			{	
				var user = lightdm.users[j];
				var image = user.image;
				var user_info_to_append = '<img src="'+image+'" class="img-circle" alt="'+user.display_name+'" style="height:100; width: 100;" onerror="imgNotFound(this)"/>';
				document.getElementById('user_photo').innerHTML = user_info_to_append;
				document.getElementById('user_name').innerHTML = user.display_name;
			}
		}
	}

function handleact(id){
		eval("lightdm."+id+"()");
	}

function imgNotFound(source){
		source.src = 'logos/def.png';
		source.onerror = "";
		return true;
	}

