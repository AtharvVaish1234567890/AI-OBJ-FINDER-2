
objects = [];
stat = "";


function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
  object_name = document.getElementById("object_name").value;
}

function modelLoaded() 
{
  console.log("Model Loaded!")
  stat = true;
}

function draw() 
{
  image(video, 0, 0, 300, 300);
}
