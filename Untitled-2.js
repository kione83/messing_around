
//generate random 5 digit number between 90000 and 99999
function getNumber() {
for(var i = 0; i < 175; i++){
var randomNumber = Math.floor(Math.random() * (9999 - 9999 + 1)) + 9999;
console.log(randomNumber);}
}
getNumber();