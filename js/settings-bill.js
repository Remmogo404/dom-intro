// get a reference to the sms or call radio buttons

const billItemTypeWithSettings = document.querySelector(".billItemWithSettings");
// get refences to all the settings fields

const callCostingSetting = document.querySelector(".callCostingSetting");
const smsCostSetting = document.querySelector(".smsCostingSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
const totalSetting = document.querySelector(".totalSetting");
//get a reference to the add button
const settingsAddBtn = document.querySelector(".settingsAddBtn");
//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var settings = callsTotal + smsTotal
// create a variables that will keep track of all three totals.
const callTotalElement = document.querySelector(".callTotalSettings");
const smsTotalElement = document.querySelector(".smsTotalSettings");
const totalElement = document.querySelector(".TotalSettings");
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

var callTotal = 0;
var smsTotal = 0;
var total = 0;
var callTotalValue = 0;
var smsTotalValue = 0;
var warningLevelValue = 0;
var criticalLevelValue = 0;

updateSettings.addEventListener('click', function(){
     
    callTotalValue = Number(callCostingSetting.value);

    smsTotalValue = Number(smsCostingSetting.value);
    
    warningLevelValue = Number(warningLevelSetting.value);

    criticalLevelValue = Number(criticalLevelSetting.value);

    totalElement.classList.remove("danger");
    totalElement.classList.remove("warning");

    if (total >= criticalLevelValue){
        totalElement.classList.add("danger");
    }else if (total >= criticalLevelValue){
        totalElement.classList.add("warning");
    }
    });

    settingsAddBtn.addEventListener('click', function(){
        
        var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

        if (billItemTypeWithSettings.value === 'call'){
            callsTotal += callTotalValue;
        }else if(billItemTypeWithSettings.value === 'sms'){
            smsTotal += smsTotalValue;
        }

        callTotalElement.innerHTML = callsTotal.toFixed(2);
        smsTotalElement.innerHTML = smsTotal.toFixed(2);
        total = callsTotal +smsTotal;
        totalElement.innerHTML = total.toFixed(2);

        if (total >= criticalLevelValue){
            totalElement.classList.remove("warning");
            totalElement.classList.remove("danger");
        } else if (total >= warningLevelValue){
            totalElement.classList.remove("danger");
            totalElement.classList.remove("warning");
        }
    });