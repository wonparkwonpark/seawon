var pos = 0;

var loaddone = false;
var font, bold;
var img;

function preload() {
  font = loadFont('assets/avenirnextltpro-light.ttf'); 
  bold = loadFont('assets/AvenirNextLTPro-Bold.otf');
  img = loadImage('assets/cv_72.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function changeBG() {
  pos = 0;
}

function draw() {
  background(0);
  fill(255);
  textAlign(LEFT, TOP);
  textFont(font);
  textSize(width/100);
  home = createButton("aaaaaaaaaa");
  home.position(width/20, width/30);
  home.style('background-color', 'transparent');
  home.style('background-repeat', 'no-repeat');
  home.style('border', 'none');
  home.style('outline', 'none');
  home.style("color", "#00000000");  
  home.mousePressed(toHome);
  text("seawonpark", width/20, width/30); 

  image(img, -width/35, width/20+pos, width*0.9, img.height/img.width*width*0.9);
}

function toHome() {
  console.log("home");
  window.location.href = "index.html";
}

function mouseWheel(event) {
    print(pos);
    if(pos<=0&&pos>=-img.height/img.width*width*0.9-width/15+height) {
      pos += event.delta;
    }
    if(pos>0) {
      pos = 0;
    }
    if(pos<-img.height/img.width*width*0.9-width/15+height) {
      pos = -img.height/img.width*width*0.9-width/15+height;
    }
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}
