var secondPoints = [];
var previousSecond;

var minutePoints = [];
var previousMinute;

var hourPoints = [];
var previousHour;

function setup() {
    createCanvas(1050, 1680);
}

function draw() {
    background(0);
    noStroke();

    // hours
    if (hourPoints.length < hour() - 1) {
        let p = getPoint(80);
        hourPoints.push(p);
    }

    if (hour() != previousHour) {
        let p = getPoint(80);
        hourPoints.push(p);
        previousHour = hour();
    } else if (hour() == 0) {
        hourPoints = [];
    }
    fill(100, 255, 200, 50);
    for (let i = 0; i < hourPoints.length; i++) {
        ellipse(hourPoints[i][0], hourPoints[i][1], 50, 50);
    }


    // minutes
    if (minutePoints.length < minute() - 1) {
        let p = getPoint(120);
        minutePoints.push(p);
    }

    if (minute() != previousMinute) {
        let p = getPoint(120);
        minutePoints.push(p);
        previousMinute = minute();
    } else if (minute() == 0) {
        minutePoints = [];
    }
    fill(120, 0, 255, 80);
    for (let i = 0; i < minutePoints.length; i++) {
        ellipse(minutePoints[i][0], minutePoints[i][1], 50, 50);
    }

    // seconds
    if (secondPoints.length < second() - 1) {
        let p = getPoint(160);
        secondPoints.push(p);
    }
    if (second() != previousSecond) {
        let p = getPoint(160);
        secondPoints.push(p);
        previousSecond = second();
    } else if (second() == 0) {
        secondPoints = [];
    }
    fill(255, 0, 120, 40);
    for (let i = 0; i < secondPoints.length; i++) {
        ellipse(secondPoints[i][0], secondPoints[i][1], 50, 50);
    }
}

function getPoint(radius) {

    var a = random(0, 360);

    let adj = cos(a) * radius;

    opp = sqrt(sq(radius) - sq(adj));

    let x = width / 2.0 + adj;
    
    let y = height / 2.0 + opp * [-1, 1][Math.floor(Math.random() * 2)];

    return [x, y];

}