var animFrames = ["img/logoAnim/frame0.jpg","img/logoAnim/frame1.jpg","img/logoAnim/frame2.jpg","img/logo.jpg"];

for(var i = 0; i < animFrames.length; i++){
    document.getElementById("logo").src = animFrames[i];
}

var frame = 0;

function changeFrame(){
    frameSrc = animFrames[frame];

    document.getElementById("logo").src = frameSrc;

    frame++;

    if(frame == 4){frame = 0};
}

setInterval(changeFrame, 1000);