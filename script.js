let box = document.querySelector(".box");
let billValue = prompt("How many Units Did you Consume ???");

// UNDER 100 STARTS HERE
unitConsumed = billValue;
unitPrice = 42;
formula = unitConsumed * unitPrice;
// UNDER 100 ENDS HERE


// UNDER 200 STARTS HERE
twoHundredC = billValue;
twoHundredP = 59;
twoFormula = twoHundredC * twoHundredP;
// UNDER 200 ENDS HERE

if (unitConsumed >= 0 && unitConsumed <= 100){
    box.innerHTML = formula;
}else if (twoHundredC >= 100){
    box.innerHTML = twoFormula;
}else{
    box.innerHTML = "You are inserting Wrong Value !!!";
}