var pos = 0;

var loaddone = false;
var font;
let button;

function preload() {
  font = loadFont('assets/avenirnextltpro-light.ttf');
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
  text("seawonpark", width/20, width/30); 
  text("works", width/20, width/16*10/2 - width/20);
  works = createButton("aaaaaaaaaa");
  works.position(width/20, width/16*10/2 - width/20);
  works.style('background-color', 'transparent');
  works.style('background-repeat', 'no-repeat');
  works.style('border', 'none');
  works.style('outline', 'none');
  works.style("color", "#00000000");  
  works.mousePressed(toWorks);
  text("contact", width/20, width/16*10/2 - width/40);
  works = createButton("aaaaaaaaaa");
  works.position(width/20, width/16*10/2 - width/40);
  works.style('background-color', 'transparent');
  works.style('background-repeat', 'no-repeat');
  works.style('border', 'none');
  works.style('outline', 'none');
  works.style("color", "#00000000");  
  works.mousePressed(toContact);
  text("cv", width/20, width/16*10/2);
  works = createButton("aaaaaaaaaa");
  works.position(width/20, width/16*10/2);
  works.style('background-color', 'transparent');
  works.style('background-repeat', 'no-repeat');
  works.style('border', 'none');
  works.style('outline', 'none');
  works.style("color", "#00000000");  
  works.mousePressed(toCV);
  text("essays", width/20, width/16*10/2 + width/40);
  works = createButton("aaaaaaaaaa");
  works.position(width/20, width/16*10/2 + width/40);
  works.style('background-color', 'transparent');
  works.style('background-repeat', 'no-repeat');
  works.style('border', 'none');
  works.style('outline', 'none');
  works.style("color", "#00000000");  
  works.mousePressed(toEssays);
  text("sketches", width/20, width/16*10/2 + width/20);
  works = createButton("aaaaaaaaaa");
  works.position(width/20, width/16*10/2 + width/20);
  works.style('background-color', 'transparent');
  works.style('background-repeat', 'no-repeat');
  works.style('border', 'none');
  works.style('outline', 'none');
  works.style("color", "#00000000");  
  works.mousePressed(toSketches);
}

function toWorks() {
  console.log("works");
  window.location.href = "work1.html";
}
function toContact() {
  console.log("contact");
  window.location.href = "contact.html";
}
function toCV() {
  console.log("CV");
  window.location.href = "cv.html";
}
function toEssays() {
  console.log("Essay");
  window.location.href = "essay.html";
}
function toSketches() {
  console.log("sketches");
  window.location.href = "sketches.html";
}

//function mouseWheel(event) {
//  if(loaddone==true) {
//    print(pos);
//    if(pos<=0&&pos>-30000) {
//      pos += event.delta;
//    }
//    if(pos>0) {
//      pos = 0;
//    }
//  }
//}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}
