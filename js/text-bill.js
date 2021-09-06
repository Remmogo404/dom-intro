// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

const billTypeText= document.querySelector(".billTypeText");
const callsTotalElement = document.querySelector(".callTotalOne");
const smsTotalElement = document.querySelector(".smsTotalOne");
const totalCostElement = document.querySelector(".totalOne");
const addToBillBtn  = document.querySelector(".addToBillBtn");

var callsTotal = 0;
var smsTotal = 0;

function textBillTotal(){

    var billTypeEntered = billTypeText.value.trim();

    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    callsTotalElement.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElement.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50){
        
        totalCostElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElement.classList.add("warning");
    }
}

addToBillBtn.addEventListener('click', textBillTotal);






