let $buttons = document.querySelectorAll("button");
let ui = document.querySelector(".userEntry");
let finalCalc = document.querySelector(".finalCalc");
let opPressed = false;

let valOne = [];
let valTwo = [];
var operator= [];
let finalAnswer = 0;

[...$buttons].map(x =>{
    x.addEventListener("click", function (e){
        switch (this.innerHTML){
        case "AC":
            clearDisplay();
            break;
        case "DEL":
            removeNumber();
            break;
        case"+/-":
            makeNegative();
            break;
        case"=":
            makeCalculation();
            break;
        case "+":
            operator.splice(0, 1, this.innerHTML)
            console.log(operator);
            storeValue();
            break;
        case "*":
            operator.splice(0,1, this.innerHTML)
            console.log(operator);
            storeValue();
            break;
        case "/":
            operator.splice(0,1, this.innerHTML)
            console.log(operator);
            storeValue();
            break;
        case "-":
            operator.splice(0,1,this.innerHTML);
            console.log(operator);
            storeValue();
            break;
        default:
            if (valOne.length>11) {
                alert("nilai melebihi batas 8 digit!");
        }
            else{
            valOne.push(this.innerText);
            ui.textContent=valOne.join("");
            console.log(valOne);
        }
            break;
        case".":
            if (valOne.includes(".")) {
                alert("kamu melebihi digit desimal!");
            }else{
                valOne.push(this.innerTeks);
                ui.textContent = valOne.join("");
            }
            break;
        }
    })
})
function removeNumber(e){
    valOne.pop();
    ui.textContent=valOne.join("")
}
function storeValue(){
    if(valOne.length == 0 && valTwo.length==0){
        return false;
    }else if (valTwo.length > 0){
        finalCalc.textContent = valTwo +""+ operator;
    }else if (valTwo.length==0){
        valTwo.push(valOne.join(""))
        valOne = []
        ui.textContent = "";
        finalCalc.textContent ="";
        finalCalc.textContent = valTwo +""+ operator
    }
    finalCalc.textContent = valTwo +""+ operator
}
function clearDisplay(){
    ui.textContent = "";
    finalCalc.textContent = ""
    valOne = []
    valTwo = []
    operator = []
}
function makeNegative(){
    if (valOne.length < 1) {
        return false;
    }else if (valOne[0] == "-"){
        valOne.shift()
    }else{
        valOne.unshift("-")
    }
    ui.textContent = valOne.join("");
}
function makeCalculation(){
    if(valTwo.length > 0 && operator.length!==0){
        finalAnswer = eval(valTwo + operator + valOne.join(""));
        finalCalc.textContent = "";
        finalCalc.textContent = eval(finalAnswer).toFixed(2);
        ui.textContent = "";
        valTwo = eval(finalAnswer);
        valOne = [];
    }else if (operator.length == 0){
        alert("kalkulasi anda salah!");
    }
    else{
        finalAnswer = finalAnswer = eval(valTwo + operator + valOne.join(""))
        console.log("finalAnswer");
        console.log(finalAnswer);
        finalCalc.textContent = "";
        ui.textContent = "";
        finalCalc.textContent = eval(finalAnswer).toFixed(2);
        //operator = [];
        valTwo = eval(finalAnswer);
        valOne = [];
    }
}
