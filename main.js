// TODO: selecting different operators (bug), decimal function

// Handle any button clicks
var numberBtns = document.getElementsByClassName("number-button");

// Result
var resultTxt = document.getElementById("result");

// Set the value of the result
function setResult(value) {
    

    if(resultTxt.innerText === "0") {
        resultTxt.innerText = value;
    } else {
        resultTxt.innerText += value; // concatenate
    }
    
}

// Set the onclick listeners (numbers)
for(var i = 0; i < numberBtns.length; i++) {
    
    // Set the onclick
    numberBtns[i].onclick = function() {
        
        setResult(this.innerText);
        
        // console.log("Number " + this.innerText + " was clicked.");
    }

}

// Number placeholder
var numberPlaceholder = 0.0;

// Operators
var operatorBtns = document.getElementsByClassName("operator-button");

var currentOperator = "";

// Set operator listeners
for(var i = 0; i < operatorBtns.length; i++) {
    
    operatorBtns[i].onclick = function() {
        currentOperator = this.innerText;
        numberPlaceholder = resultTxt.innerText;
        resultTxt.innerText = "0";

        console.log("OPERATOR");
        console.log(resultTxt.innerText);
        console.log(numberPlaceholder);
        console.log(currentOperator);
        console.log("OPERATOR");

    }

}

// set onclick clear
var clearBtn = document.getElementById("clear-button");

clearBtn.onclick = function() {
    resultTxt.innerText = "0";
    currentOperator = "";
    firstNumber = 0;
    secondNumber = 0;
}

// set on click equals
var equalsBtn = document.getElementById("equals-button");

equalsBtn.onclick = function() {
    if(numberPlaceholder) {
        if(currentOperator == "+") {
            resultTxt.innerText = parseInt(numberPlaceholder) + parseInt(resultTxt.innerText);
            numberPlaceholder = 0;
            currentOperator = "";
        }
        else if(currentOperator == "-") {
            console.log("MINUS");
            console.log(numberPlaceholder);
            console.log(resultTxt.innerText);
            console.log("MINUS");
            resultTxt.innerText = parseInt(numberPlaceholder) - parseInt(resultTxt.innerText);
            numberPlaceholder = 0;
            currentOperator = "";
        }
        else if(currentOperator == "*") {
            resultTxt.innerText = parseInt(numberPlaceholder) * parseInt(resultTxt.innerText);
            numberPlaceholder = 0;
            currentOperator = "";
        }
        else if(currentOperator == "/") {
            resultTxt.innerText = parseInt(numberPlaceholder) / parseInt(resultTxt.innerText);
            numberPlaceholder = 0;
            currentOperator = "";
        }
    }
    console.log("EQUALS");
    console.log(resultTxt.innerText);
    console.log(numberPlaceholder);
    console.log(currentOperator);
    console.log("EQUALS");
}