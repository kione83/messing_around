/**
 * Scripts written by Steve Marlow
 * SNHU IT 647
 * Web Construction
 * November 4 2021
 */


//insert text into a div using innerHTML
var fill = document.getElementById("homebanner");
homebanner.innerHTML = "SNHU-PALOOZA!";


var footNote = document.getElementById("footnote");
footNote.innerHTML = "This project was designed and completed by Steven S. Marlow as part of a project for Southern New Hampshire Univeristy, Information Technology course 647. All parts of this project are copyright 2021. All Images are copyright of their respective owners and were used solely for the purpose of project requirements. No infringement is intended, implied, or assumed. SNHU-PALOOZA is a fictitious event and will not be occurring any time in the future (as of this writing)";

//function that starts at 50,000 and decrements each time a user purchases a number of tickets
var currentTickets = 50000;
document.getElementById("ticketCounter").innerHTML = "Tickets Remaining: " + currentTickets;


//this fills the div with the number of days until the next event, hopefully...
var daysUntilFirstFriday = daysUntilNextFriday();
document.getElementById("daysUntilFirstFriday").innerHTML = "Days until first friday: " + daysUntilFirstFriday;

var underConstruction = document.getElementById("underConstruction");
document.getElementById("underConstruction").innerHTML = "This page is currently under construction. Please check back later.";

// var gridOnePara = document.getElementById("gridOnePara");
// gridOnePara.innerHTML = "SNHU-PALOOZA brings live concerts to you, the students, every Spring in anticipation of our new graduates. This is our way of saying thank you and congratulations. This event is a way of kicking off your next steps on the highest note possible (no pun intended).";
//function that calculates the number of days until the first friday of the next month
function daysUntilNextFriday() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    var currentDayOfWeek = currentDate.getDay();
    var firstFriday = new Date(currentYear, currentMonth, currentDay + (7 - currentDayOfWeek));
    var daysUntilFirstFriday = firstFriday.getDate() - currentDay;
    return daysUntilFirstFriday;

}




function buyTickets() {
    var maxTickets = 50000;
    var ticketsPurchased;
        for (ticketCount = 50000; ticketCount < maxTickets; i--) {
            ticketCount = maxTickets - ticketsPurchased
            return ticketCount;
        
    }
    document.getElementById("ticketCounter").innerHTML = "Tickets Remaining: " + ticketCount;
}


/*below is a bunch of lorem ipsum text that I grabbed from a few sites online*/

// var description_two = document.getElementById("photo_two");
// photo_two.innerHTML = "But ... whatever. I agreed to do it. There's just one deal point that Jim Robinson - a wonderful man at Morgan Creek, a great company - need to work out is they want me in it. If they do, it's a smash. If they don't, it's a turd that opens on a tugboat.  Well, yeah. But I was gonna tell you, I'm tired of being told like, 'Oh, you can't talk about that. You can't talk about that."

// var description_three = document.getElementById("photo_three");
// photo_three.innerHTML = "I am the Doctor, and you are the Daleks! Did I mention we have comfy chairs? Father Christmas. Santa Claus. Or as I've always known him: Jeff. You hit me with a cricket bat. I'm the Doctor. Well, they call me the Doctor. __I don't know why.__ *I call me the Doctor too.* I still don't know why."

// var description_four = document.getElementById("photo_four");
// photo_four.innerHTML = "They're not aliens, they're Earth…liens! You've swallowed a planet! Saving the world with meals on wheels. Annihilate? No. No violence. I won't stand for it. Not now, not ever, do you understand me?! I'm the Doctor, the Oncoming Storm - and you basically meant beat them in a football match, didn't you?"


function getSteps(num){
    var count = 0;
    var max = 0;
    while(num !== 1){
        if(num % 2 == 0){
            num /= 2;
            count++;
        } else  if( num % 2 !== 0){
            num = (num * 3) + 1;
            if (((num * 3)+ 1) > max){
                max = num;
            }
            count++;
        }
    }
    
    console.log(count);
    console.log("the highest your number climbed was " + max);
    }
    
    //generate a random number between 1 and 50000
    var num = Math.floor(Math.random() * 50000) + 1;
    document.getElementById("confirmMessage").innerHTML = `Thank you for registering for this event. Your confirmation number is: ${num}`; 
    


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


