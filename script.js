var bill, billValue = 0, peopleNum = 1, people, tipAmountpp, tipPercent, tipPercentValue = 0;
var totalAmountpp;
var btn = document.getElementById("reset");
function getBillValue(){
    bill = document.getElementById("bill").value;
    billValue = parseFloat(bill);
    console.log(billValue);
    
}

$('.tip-percentage').click(function(e) {
    $('.tip-percentage').removeClass('active');
    $(this).addClass('active');
});

function getTipPercent(){
    tipPercentValue = parseFloat(tipPercent);
    console.log(tipPercentValue);
}

function custom(){
    document.getElementById("custom").type = "number";
    document.getElementById("custom").style = "text-align: right; outline: none;color: hsl(186, 14%, 43%);background-color: hsl(185, 61%, 92%);";
}

function getCustom(){
    tipPercent = document.getElementById("custom").value;
    tipPercentValue = parseInt(tipPercent);
    console.log(tipPercentValue);
}

function getPeopleNum(){
    people = document.getElementById("people-num").value;
    if(parseInt(people) == 0 ){
        document.getElementById("people-num").setCustomValidity("Number of people can't be 0.");
        document.getElementById("people-error").innerHTML = "can't be zero";
        document.getElementById("people-num").style = "border: solid 1px red;";
    }
    else if(parseInt(people) < 0 || !Number.isInteger(parseFloat(people) )){
        document.getElementById("people-num").setCustomValidity("It's not possible");
        document.getElementById("people-error").innerHTML = "It's not possible";
        document.getElementById("people-num").style = "border: solid 1px red;";
    }
    else{
        document.getElementById("people-error").innerHTML = "";
        peopleNum = parseInt(people);
        console.log(peopleNum);
    }


}
tipAmountpp = document.getElementById("tip-value");
totalAmountpp = document.getElementById("total-value");

function tipUpdate(){
    tipAmountpp.innerHTML = "$" + ((billValue * tipPercentValue /100)/peopleNum).toFixed(2) ;
    totalAmountpp.innerHTML = "$" + (((billValue * tipPercentValue /100) + billValue)/peopleNum).toFixed(2);
    console.log("tipupdate");
}

function reset(){
    btn.disable = true;
    $('.tip-percentage').removeClass('active');
    btn.style = "background-color: hsl(172, 67%, 45%);";
    document.getElementById("people-num").value = 0;
    document.getElementById("bill").value = 0;
    document.getElementById("bill").style = "border: none;";
    document.getElementById("custom").type = "button";
    document.getElementById("custom").value = "custom";
    document.getElementById("custom").style = "border: none; outline: none;color: hsl(186, 14%, 43%);background-color: hsl(185, 61%, 92%);";
    tipAmountpp.innerHTML = "$0.00";
    totalAmountpp.innerHTML = "$0.00";

}

