var bill, billValue = 0, peopleNum = 1, people, tipAmountpp, tipPercent, tipPercentValue = 0;
var totalAmountpp;
function getBillValue(){
    bill = document.getElementById("bill").value;
    billValue = parseFloat(bill);
    console.log(billValue);
    
}

function getTipPercent(){
    tipPercentValue = parseFloat(tipPercent);
    console.log(tipPercentValue);
}

function getPeopleNum(){
    people = document.getElementById("people-num").value;
    peopleNum = parseInt(people);
    console.log(peopleNum);

}

function tipUpdate(){
    tipAmountpp = document.getElementById("tip-value");
    totalAmountpp = document.getElementById("total-value");
    tipAmountpp.innerHTML = "$" + (billValue * tipPercentValue /100)/peopleNum ;
    totalAmountpp.innerHTML = "$" + ((billValue * tipPercentValue /100) + billValue)/peopleNum;
    console.log("tipupdate");
}

