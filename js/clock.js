var state = true;

function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        var v = state == false ? hours + " " + minutes : hours + ":" + minutes;
        state = !(state);
        setTimeout("updateTime()",1000);
        document.getElementById('time').innerHTML=v;
}
updateTime();
