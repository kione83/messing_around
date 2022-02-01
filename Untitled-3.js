let  wages = (hours, rate) => {
    return hours * rate;
}
let taxes = (wages, taxRate) => {
     var withHolding = wages * (wages * taxRate);
     var netWages = wages - withHolding;
        return netWages, withHolding;
}

hours = parseInt(prompt("Enter your hours worked"));
rate = parseFloat(prompt("Enter your hourly rate"));

document.getElementById("wages").innerHTML = "Your gross wages are: " + wages(hours, rate);
document.getElementById("taxes").innerHTML = "Your net wages are: " + taxes(wages(hours, rate), 0.15);
