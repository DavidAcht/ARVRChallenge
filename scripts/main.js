var clicked = false;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

document.onclick = function(){
if (clicked === false){
	document.getElementById("timerH1").style.display = "block";
	document.getElementById("waitH1").style.display = "none";
var audio = new Audio('assets/music.mp3');
audio.play();
var fiveMinutes = 60 * 2.63,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
    clicked = true;
}


}
// var camera = document.getElementById("camera");
// var direction = new THREE.Vector3().copy(camera.getWorldDirection());

// function draw(){
// tick : function move()
// {
//     var rig = document.getElementById("rig");
//     var stepFactor = 0.1;
//     rig.parent.position.add(this.direction.multiplyScalar(stepFactor));
// }
// }


