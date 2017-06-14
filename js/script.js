var animFrames = ["img/logoAnim/frame0.jpg","img/logoAnim/frame1.jpg","img/logoAnim/frame2.jpg"];

var frame = 0;
var frameSrc = "";

function changeFrame(){
    frameSrc = animFrames[frame];

    document.getElementById("logo").src = frameSrc;

    frame++;

    if(frame == 3){frame = 0};
}

setInterval(changeFrame, 1000);

//document.getElementById("logo").src = "img/logoAnim/frame0.jpg";