song = ""
song2 = ""
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";

function setup(){
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log('left wrist x and left wrist y' + leftWristX + ',' + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        console.log('right wrist x and right wrist y' + rightWristX + ',' + rightWristY);
    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}

    function preload(){
        song = loadSound("music.mp3");
        song2 = loadSound("music2.mp3")
    }

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}