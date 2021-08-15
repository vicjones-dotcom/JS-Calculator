//Creating a class to store information
class Calculator {
  //Constructor takes all the input and functions of the calculator
  //Takes previous and current operands as we need to know where to display them
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    //Calling function to clear all inputs and set them to the default values
    this.clearAll();
  }
  //Clearing all numbers
  clearAll() {
    this.currentOperand = "";
    this.previousOperand = "";
    //when clicking clear button, no operation will be selected
    this.operation = undefined;
  }
  //Removing a single number
  deleteNumber() {
    //Sets curent operand equal to the current operand
    //toString() method -> converts number into a string
    //.slice() method -> removes the last value of a string(from 0 index to the second to last number)
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  //Function that adds number
  //Passes the number that the user selected
  addNumber(number) {
    //Only allows user to add one period
    if (number === "." && this.currentOperand.includes(".")) return;
    //Converting the current operand and the number into a string in order to concatinate the numbers and not add them
    //
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  selectOperation(operation) {
    //Function to select operation once user clicks on operation buttons
    //Function takes the particular operation

    //Checks whether current operand is empty
    //If empty -> does not execute the following code
    if (this.currentOperand === "") return;
    //If there is a number already, it proceeds to the calculation
    if (this.previousOperand !== "") {
      this.calculate();
    }
    //Sets the operation
    this.operation = operation;
    //Sets the previous operand equal to the current operand as the user finishes to type the current number and puts it into the previous operand
    this.previousOperand = this.currentOperand;
    //Clears the new current operand
    this.currentOperand = "";
  }

  calculate() {
    let result;
    //Declaring variables for the actual number of previous and current operand
    //Converts string into a number
    const previousNum = parseFloat(this.previousOperand);
    const currentNum = parseFloat(this.currentOperand);
    //If the user does not enter a number and clicks on equals, the code should not run

    //If there is no previous or current value - stop the function
    if (isNaN(previousNum) || isNaN(currentNum)) return;
    //Switch case to execute respective operations
    switch (this.operation) {
      case "+":
        result = previousNum + currentNum;
        break;
      case "-":
        result = previousNum - currentNum;
        break;
      case "*":
        result = previousNum * currentNum;
        break;
      case "÷":
        result = previousNum / currentNum;
        break;
      //If none of the above applies, no operation will be executed
      default:
        return;
    }
    //Sets current operand equal to the result of the operation
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    //Converts into a string to split the string on the decimal characters inside of it
    //Split number into the integer (before the decimal place) and the decimal (after the decimal place)
    const stringNumber = number.toString();
    //Takes string, turns it into an array
    //First part of array -> part before the decimal
    //Second part of array -> part after the decimal
    //Gets the first part, the integer values before the decimal
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    //Decimal does not need to be a number -> .split()
    //[1] -> gets the numbers after the decimal place
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    //Checks if integer is not a number, so if the input is nothing or a decimal
    //-> Sets integerDisplay into an empty string
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      //If the user enters a value
      //if we do have a number
      //Passing in a language (English)
      integerDisplay = integerDigits.toLocaleString("en", {
        //No decimal places after this value when it gets converted into a string
        maximumFractionDigits: 0,
      });
    }
    //Puts a period between the integerDisplay and the decimalDigits
    //If the user starts with a period, the period will appear
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    //Sets the value equal to the current operand
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    //Number gets moved up into the previous operation
    if (this.operation != null) {
      //Concatenates the previous number with the operation (i.e 20 +)
      //   this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
      //Changes will be reflected in both previous and current values
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      //Clears the previous operand value if the operation does not exist
      this.previousOperandTextElement.innerText = "";
    }
  }
}
//Selecting elements through DOM
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
//Creating a calculator object
//Passing elements from constructor
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);
//Loop over buttons and add event listeners for each button
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //Takes the calculator and add the number that is clicked
    calculator.addNumber(button.innerText);
    //Display screen will be updated any time we click a button
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //Passes the innerText of the operation
    calculator.selectOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  //Calls the calculate button when user clicks on equals button
  calculator.calculate();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clearAll();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.deleteNumber();
  calculator.updateDisplay();
});
