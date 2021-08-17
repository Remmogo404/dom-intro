// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

const smsCostSetting = document.querySelector(".smsCostingSetting");

const addingButton = document.querySelector(".addingButton");

const updateSettings = document.querySelector(".updateSettings");

var billingTotal12 = 0;
var billingTotal24 = 0;

updateSettings.addEventListener('click', radioBillAddingBtn);

updateSettings.addEventListener('click', addingButtonRad);

function addingButtonRad(){
    
    var checkedRadioButton = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioButton){
        var billItemTypeWithSettings = checkedRadioButton.nodeValue;

        const callInput = callCostingSetting.value;
        const smsInput = smsCostingSetting.value;

        console.log(callInput)
        console.log(smsInput)

        if (billItemTypeWithSettings === callInput){
            billingTotal12 += callInput;

            var roundedBillCall12 = billingTotal12.toFixed(2);
            callTotalSettings.innerHTML = roundedBillCall12;
        }
        else if (billItemTypeWithSettings === smsInput){
            billingTotal24 += smsInput;

            var roundedBillCall24 = billingTotal24.toFixed(2);
            smsTotalSettings.innerHTML = roundedBillCall24
        }
    }
    
    var roundedBillCall25 = (billingTotal12 + billingTotal24 ).toFixed(2);
    smsTotalSettings.innerHTML = roundedBillCall25
}