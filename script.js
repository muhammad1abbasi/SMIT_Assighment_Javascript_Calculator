var firstNumber = "";
var operator = "";
var secondNumber = "";


function pressNumber(num) {
    if (operator == ""){
        firstNumber = firstNumber + num;
        document.getElementById("display").value = firstNumber;
    }else {
        secondNumber = secondNumber +num;
        document.getElementById("display").value = firstNumber  + operator  + secondNumber;
    }
    
}


function setOperator(op) {
    if (firstNumber != "") {
        operator = op;
        document.getElementById("display").value = firstNumber  + operator ;
    }
}


function calculate() {
    if (firstNumber != "" && secondNumber != "" && operator != ""){

        var result = 0;

        if (operator == "+") {
            result = (firstNumber - 0) + (secondNumber - 0) ;
        }

        if (operator == "-") {
            result = firstNumber - secondNumber
        }

        if (operator == '*') {
            result = firstNumber * secondNumber
        }

        if (operator == "/") {
            if(secondNumber == "0") {
                result = "Error"
            }else {
                result = firstNumber / secondNumber;
            }
        }


        document.getElementById("display").value = result;


        firstNumber = result;
        secondNumber = "";
        operator = "";
    }
}


function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "" ;
    document.getElementById("display").value = "";
}