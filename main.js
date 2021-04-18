nose_x = 0;
nose_y = 0;

function preload(){
    glasses = loadImage('https://i.postimg.cc/rs34qQ4Y/g.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(glasses,nose_x,nose_y,100,30)
}
function takeSnapshot(){
    save("myFilter.png");
}
function modelLoaded(){
    console.log("poseNet is loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x - 50;
        nose_y = results[0].pose.nose.y - 40;
        console.log("Nose x position :" + results[0].pose.nose.x);
        console.log("Nose y position :" + results[0].pose.nose.y);
    }
}