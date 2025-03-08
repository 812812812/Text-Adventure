let inputBox, slider;
let textToShow = "Bounce!";
let y, speed, textColor;

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(124);

    inputBox = createInput();
    inputBox.position(20, 50);

    slider = createSlider(1, 20, 5);
    slider.position(20, 80);

    y = height / 2;
    speed = 2;
    textColor = color(0);
}

function draw() {
    background(124)
    fill(textColor);
    textSize(40);
    textAlign(CENTER, CENTER);

    text(textToShow, width / 2, y);
    y += speed * slider.value();

    if (y > height - 20 || y < 20) speed *= -1;
}

function keyPressed() {
    if (keyCode === ENTER){
        textToShow = inputBox.value();
    }
}

function mousePressed() {
    textColor = color(random(255), random(255), random(255));
}