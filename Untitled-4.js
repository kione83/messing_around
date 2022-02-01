/* iterate through an array of values */
var maxElo = 0;
var eloArray = [1750, 1699, 1751, 1830, 1455, 1777, 1790];
for (var i = 0; i < eloArray.length; i++) {
    if (eloArray[i] > maxElo) {
        maxElo = eloArray[i];
    
    }
    console.log(maxElo);
    }

/* iterate through an array of images */
var images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg"];
for (var i = 0; i < images.length; i++) {
    document.getElementById("images").innerHTML += "<img src=" + images[i] + ">";
}
/* click function to move to next image */
var images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg"];
var i = 0;
function nextImage() {
    document.getElementById("images").innerHTML = "<img src=" + images[i] + ">";
    i++;
    if (i >= images.length) {
        i = 0;
    }
}
/* click function to move to previous image */
var images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg"];
var i = 0;
function previousImage() {
    document.getElementById("images").innerHTML = "<img src=" + images[i] + ">";
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
}
/* create a grid of div elements */
var grid = document.getElementById("grid");
for (var i = 0; i < 16; i++) {
    grid.innerHTML += "<div class='grid-item'></div>";
}

/* move a div across the screen */
var grid = document.getElementById("grid");
var gridItems = document.getElementsByClassName("grid-item");
var i = 0;
function move() {
    gridItems[i].style.left = "100px";
    i++;
    if (i >= gridItems.length) {
        i = 0;
    }
}

/* move a circle across the screen every second */
var circle = document.getElementById("circle");
var i = 0;
function moveCircle() {
    circle.style.left = i + "px";
    i++;
    if (i >= 500) {
        i--;
    }
}
setInterval(moveCircle, 1000);
