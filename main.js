
rightWristX = 0;
leftWristX = 0;
rightWristY = 0;
leftWristY = 0;

 peter_pan_song = "";
 harry_potter_song = "";

function preload(){
    harry_potter_song = loadSound("music.mp3");
    peter_pan_song = loadSound("music2.mp3");
}
function play(){
    song.play();
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video, 0, 0, 600, 500);
}
function modelLoaded(){
    console.log('PoseNet Is Initialised');
}
function gotPoses(results){
    if(results.length > 0)
        console.log(results);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX " + rightWristX +" rightWristY = "+ rightWristY);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.rightWrist.y;
    console.log("leftWristX " + leftWristX +" leftWristY = "+ leftWristY);
}


