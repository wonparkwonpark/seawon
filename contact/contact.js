var pos = 0;

var font, bold;

function preload() {
  font = loadFont('assets/avenirnextltpro-light.ttf'); 
  bold = loadFont('assets/AvenirNextLTPro-Bold.otf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
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

  
  text("phone +82)10-2331-7855", width/20, width/10);
  text("email wonparkwonpark@gmail.com", width/20, width/8);
}


function toHome() {
  console.log("home");
  window.location.href = "index.html";
}
