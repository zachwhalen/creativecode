let bricks = [];
let logos = [];
let umw;

function preload(){
 umw = loadImage('umwlogo.png');
  
}

function setup() {
  noCursor();
  noStroke();
  createCanvas(1920, 1080);
  wallMap = [
    '111111100111111',
    '111111100111111',
    '111111000111111',
    '111110000011111',
    '111110000001111',
    '111110000001111',
    '111110000001111',
    '111110000001111',
    '111111000001111',
    '111111110011111'
  ];
  


  for (let r = 0; r < 10; r += 1) {
    for (let c = 0; c < 15; c += 1) {
      if (wallMap[r][c] == '1') {
        bricks.push(new Brick(c * 128, r * 108));
      }
    }
  }

  for (let l = 0; l < 1; l += 1) {
    logos.push(new Logo());
  }

}

function draw() {
  colorMode(RGB, 255);
  background(0, 0, 0, 100);
  
  for (let b of bricks) {
    b.draw();
  }

  for (let l of logos) {
    l.draw();
  }
}

function Brick(x, y) {
  this.x = x - 64;
  this.y = y;

  this.draw = function() {

    rectMode(CORNER);
    fill(100, 0, 140,50);
    rect(this.x, this.y, 128, 108);

  }
}

function Logo() {
  this.x = width / 2;
  this.y = height / 2;
  this.w = 75;
  this.h = 75;
  this.speedX = random(-6, 6);
  this.speedY = random(-6, 6);
  this.hue = random(20, 90);
  this.draw = function() {



    // bounce off the walls
    if (this.x < this.w / 2 || this.x > width - this.w / 2) {
      this.speedX = -this.speedX;
      this.hue = random(20, 90);
    }
    if (this.y > height - this.h / 2 || this.y < this.h / 2) {
      this.speedY = -this.speedY;
      this.hue = random(20, 90);
    }

    for (let b = 0; b < bricks.length; b++) {

      if (
        this.x + this.speedX > bricks[b].x - this.w / 2 &&
        this.x + this.speedX < bricks[b].x + 128 + this.w / 2 &&
        this.y + this.speedY > bricks[b].y - this.h / 2 &&
        this.y + this.speedY < bricks[b].y + 108 + this.h / 2
      ) {

        // the next move will be contact, so figure out which
        // edge it crosses to get there.
        // the move vector is this.x,this.y -> this.x + this.speedX, this.y + this.speedY
        if (
          // top edge first:
          intersects(this.x, this.y, this.x + this.speedX, this.y + this.speedY,bricks[b].x - this.w / 2 - 5, bricks[b].y - this.h / 2, bricks[b].x + 128 + this.w / 2 + 5, bricks[b].y - this.h / 2)
        ) {
          //print("TOP EDGE BREACHED");
          this.speedY = -this.speedY;
          this.hue = random(20, 90);
        } else if (
          // right edge:
          intersects(this.x, this.y, this.x + this.speedX, this.y + this.speedY, bricks[b].x + 128 + this.w / 2, bricks[b].y - this.h / 2 - 5, bricks[b].x + 128 + this.w / 2, bricks[b].y + 108 + this.h / 2 + 5)
        ) {

          this.speedX = -this.speedX;
          this.hue = random(20, 90);
        } else if (
          // bottom edge
          intersects(this.x, this.y, this.x + this.speedX, this.y + this.speedY,
            bricks[b].x + 128 + this.w / 2 + 5, bricks[b].y + 108 + this.h / 2, bricks[b].x - this.w / 2 - 5, bricks[b].y + 108 + this.h / 2)
        ) {
          this.speedY = -this.speedY;
          this.hue = random(20, 90);
        } else if (
          // left edge 
          intersects(this.x, this.y, this.x + this.speedX, this.y + this.speedY, bricks[b].x - this.w / 2, bricks[b].y + 108 + 5, bricks[b].x - this.w / 2, bricks[b].y - this.h / 2 - 5)) {

          this.speedX = -this.speedX;
          this.hue = random(20, 90);
        }

      }
    }
    this.x += this.speedX;
    this.y += this.speedY;
    colorMode(HSB, 100);
    fill(this.hue, 100, 70);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
    imageMode(CENTER);
    image(umw,this.x, this.y, this.w,this.h);

  }
}

// Something from Stackoverflow by Dan Fox
// https://stackoverflow.com/questions/9043805/test-if-two-lines-intersect-javascript-function
// returns true iff the line from (a,b)->(c,d) intersects with (p,q)->(r,s)
function intersects(a, b, c, d, p, q, r, s) {
  var det, gamma, lambda;
  det = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
  }
}

function keyPressed(){
 if (keyCode == '32'){
   logos.push(new Logo());
 }
}