function add(x,y) {
    return (x+y)
};

function subtract (x,y) {
    return (x-y)
};

function multiply (x,y) {
    return (x*y)
}; 

function divide (x,y){
    return (x/y)
};


let firstNum = "";
let operator = "";
let secondNum = ""; 

function operate(firstNum, operator, secondNum){ 
 
    switch(operator) {
        case "+":
            return add(firstNum,secondNum);
        case "-":
            return subtract(firstNum,secondNum);
        case "*":
            return multiply(firstNum,secondNum);
        case "/":
            return divide(firstNum,secondNum);
    }
};

console.log(operate(2,"/", 2))