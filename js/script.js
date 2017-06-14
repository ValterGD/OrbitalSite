var animFrames = ["img/logoAnim/frame0.jpg","img/logoAnim/frame1.jpg","img/logoAnim/frame2.jpg"];

document.getElementById("logo").src = animFrames[0];
document.getElementById("logo").src = animFrames[1];
document.getElementById("logo").src = animFrames[2];

var frame = 0;

function changeFrame(){
    frameSrc = animFrames[frame];

    document.getElementById("logo").src = frameSrc;

    frame++;

    if(frame == 3){frame = 0};
}

setInterval(changeFrame, 1000);