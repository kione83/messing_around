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
