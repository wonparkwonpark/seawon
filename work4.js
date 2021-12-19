var pos = 0;

var loaddone = false;
var font, bold;
var img;

function preload() {
  font = loadFont('assets/avenirnextltpro-light.ttf'); 
  bold = loadFont('assets/AvenirNextLTPro-Bold.otf');
  img = loadImage('assets/4_72.jpg');
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

  works1 = createButton("aaaaaaaaaa");
  works1.position(width/20, width/16*10/2 - width/80 - width/20);
  works1.style('background-color', 'transparent');
  works1.style('background-repeat', 'no-repeat');
  works1.style('border', 'none');
  works1.style('outline', 'none');
  works1.style("color", "#00000000");  
  works1.mousePressed(toWork1);
  text("lotte world", width/20, width/16*10/2 - width/80 - width/20);
  
  works2 = createButton("aaaaaaaaaa");
  works2.position(width/20, width/16*10/2 - width/80 - width/40);
  works2.style('background-color', 'transparent');
  works2.style('background-repeat', 'no-repeat');
  works2.style('border', 'none');
  works2.style('outline', 'none');
  works2.style("color", "#00000000");  
  works2.mousePressed(toWork2);
  text("10 : 4 3 2 1", width/20, width/16*10/2 - width/80 - width/40);
  
  works3 = createButton("aaaaaaaaaa");
  works3.position(width/20, width/16*10/2 - width/80);
  works3.style('background-color', 'transparent');
  works3.style('background-repeat', 'no-repeat');
  works3.style('border', 'none');
  works3.style('outline', 'none');
  works3.style("color", "#00000000");  
  works3.mousePressed(toWork3);  
  text("0 94376 91475 7", width/20, width/16*10/2 - width/80);
  
  textFont(bold);
  works4 = createButton("aaaaaaaaaa");
  works4.position(width/20, width/16*10/2 + width/80);
  works4.style('background-color', 'transparent');
  works4.style('background-repeat', 'no-repeat');
  works4.style('border', 'none');
  works4.style('outline', 'none');
  works4.style("color", "#00000000");  
  works4.mousePressed(toWork4);  
  text("parallax", width/20, width/16*10/2 + width/80);
  
  textFont(font);
  works5 = createButton("aaaaaaaaaa");
  works5.position(width/20, width/16*10/2 + width/80 + width/40);
  works5.style('background-color', 'transparent');
  works5.style('background-repeat', 'no-repeat');
  works5.style('border', 'none');
  works5.style('outline', 'none');
  works5.style("color", "#00000000");  
  works5.mousePressed(toWork5);  
  text("useless table", width/20, width/16*10/2  + width/80 + width/40);
  
  works6 = createButton("aaaaaaaaaa");
  works6.position(width/20, width/16*10/2 + width/80 + width/20);
  works6.style('background-color', 'transparent');
  works6.style('background-repeat', 'no-repeat');
  works6.style('border', 'none');
  works6.style('outline', 'none');
  works6.style("color", "#00000000");  
  works6.mousePressed(toWork6);  
  text("i wish you all the best", width/20, width/16*10/2  + width/80 + width/20);



  imageMode(CENTER);
  image(img, width*0.6, width/15+pos+img.height/img.width*width*0.9*0.75*0.5, width*0.9*0.75, img.height/img.width*width*0.9*0.75);


}

function toHome() {
  console.log("home");
  window.location.href = "index.html";
}

function toWork1() {
  console.log("works1");
  window.location.href = "work1.html";
}
function toWork2() {
  console.log("works2");
  window.location.href = "work2.html";
}
function toWork3() {
  console.log("works3");
  window.location.href = "work3.html";
}
function toWork4() {
  console.log("works4");
}
function toWork5() {
  console.log("works5");
  window.location.href = "work5.html";
}
function toWork6() {
  console.log("works6");
  window.location.href = "work6.html";
}

function mouseWheel(event) {
    print(pos);
    if(pos<=0&&pos>=-img.height/img.width*width*0.9*0.75-width/15+height) {
      pos += event.delta;
    }
    if(pos>0) {
      pos = 0;
    }
    if(pos<-img.height/img.width*width*0.9*0.75-width/15+height) {
      pos = -img.height/img.width*width*0.9*0.75-width/15+height;
    }
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}
