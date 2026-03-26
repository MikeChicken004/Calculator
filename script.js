/********************* Displays Numbers to the display screen **************/
let userInput = '';
let num1 = 0;
let userOperator = "";
const display = document.getElementById('display');
function appendToDisplay(item) {
    userInput += item;
    display.innerHTML = userInput;
}

/********************* Displays operations to the display screen  *********/
function operator(input) {
    userOperator = input;
    num1 = parseInt(userInput);
    userInput = '';
    display.innerHTML = userOperator;
}
/********************** addition function: adds num1 to num2  *********************/
function add(num1, num2) {
    return num1 + num2;
}

/********************** subtraction function: subtracts num1 to num2  *********************/
function subtract(num1, num2) {
    return num1 - num2;
}

/********************** multiplication function: multiplies num 1 to num2  *********************/
function multiply(num1, num2) {
    return num1 * num2;
}

/********************** division function: divides num1 from num2  *********************/
function divide(num1, num2) {
    return num1 / num2;
}

/********************** clear function: sets display back to 0  *********************/
function clearDisplay(){ 
    display.innerHTML = 0
    userInput = ''
}

/********************** calculate function: calculates the expression put into calculator  *********************/
function calculate() {
    let num2 = parseInt(userInput);
    switch(userOperator) {
        case '+':
            display.innerHTML = add(num1, num2);
            userInput= ""
            break;
        case '-':
            display.innerHTML = subtract(num1, num2);
            userInput = ""
            break;
        case '*':
            display.innerHTML = multiply(num1, num2); 
            userInput = ""
            break;
        case '/':
            display.innerHTML = divide(num1, num2); 
            userInput = ""
            break;
        default:
            display.innerHTML = "ERROR";
    }
}


