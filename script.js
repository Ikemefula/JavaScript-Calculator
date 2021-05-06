// we need to select all of our numbers and operands and clear buttons 
// to do that we need to put some classes in our HTML. In order to keep from getting mixed up with the css classes, we will use data attributes. The presenter seperated css classes from the JS data classes so that we can see which parts of our code is handled with Javascript and which ones are handled with css. Example below:
  // data-operation
  // data-number
  // data-delete
  // data-equals
  // data-previous-operand

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
  }
  clear() {
// clear out diff variables 
  }
  delete() {
// remove a single nuimber 
  }
  appendNumber() {
// what happens whne smoe adds a number. when user clcks a number  
  }
  
  chooseOperation() {
// needs to take the operation that the user selected
  }

  compute() {
// needs to take our value from inside my cal and compute a single value for what needs to be displayed on calc
  }

  updateDisplay() {
// will update our values insire of our output window
  }

}
  
  


// establsh constant variables for all the data-attributes with number buttons using Queries
const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')