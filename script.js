let box = document.querySelector(".box");
let billValue = prompt("How many Units Did you Consume ???");

// UNDER 0 - 100 STARTS HERE
unitConsumed = billValue;
unitPrice = 42;
formula = unitConsumed * unitPrice;
// UNDER 0 - 100 ENDS HERE

// UNDER 100 - 200 STARTS HERE
twoHundredC = billValue - 100;
twoHundredP = 59;
twoFormula = twoHundredC * twoHundredP;
// UNDER 100 - 200 ENDS HERE

// UNDER 200 - 300 STARTS HERE
threeHundredC = billValue - 200;
threeHundredP = 65;
threeFormula = threeHundredC * threeHundredP;
// UNDER 200 - 300 ENDS HERE

// UNDER 300 - 400 STARTS HERE
fourHundredC = billValue - 300;
fourHundredP = 72;
fourFormula = fourHundredC * fourHundredP;
// UNDER 300 - 400 ENDS HERE

// UNDER 400 to so on STARTS HERE
fiveHundredC = billValue - 400;
fiveHundredP = 80;
fiveFormula = fiveHundredC * fiveHundredP;
// UNDER 400 to so on ENDS HERE


if (unitConsumed >= 0 && unitConsumed <= 100){
    box.innerHTML = formula;
}else if (unitConsumed >= 100 && unitConsumed <= 200){
    box.innerHTML = (100 * 42) + twoFormula;
}else if (unitConsumed >=200 && unitConsumed <= 300){
    box.innerHTML = (100 * 42) + (100 * 59) + threeFormula;
}else if (unitConsumed >= 300 && unitConsumed <= 400){
    box.innerHTML = (100 * 42) + (100 * 59) + (100 * 65) + fourFormula;
}else if (unitConsumed >= 400){
    box.innerHTML = (100 * 42) + (100 * 59) + (100 * 65) + (100 * 72) + fiveFormula;
}else{
    box.innerHTML = "You are inserting Wrong Value !!!";
}
