function setup(){
    canvas = createCanvas(640, 480)
    canvas.position(150, 150)
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 230, 150, 220, 200)
    fill("green")
    circle(50, 50, 50)
    circle(590, 50, 50)
    circle(50, 430, 50)
    circle(590, 430, 50)

    fill("navy")
    rect(70, 40, 500, 20)
    rect(70, 420, 500, 20)
    rect(40, 70, 20, 340)
    rect(580, 70, 20, 340)
}


function take_snapshot(){
    save("picture.png");
}
