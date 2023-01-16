function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 430);
    canvas.position(700, 170);

    poseNet = ml5.poseNet(video, modelLoaded);  
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialised");
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);
    }
}