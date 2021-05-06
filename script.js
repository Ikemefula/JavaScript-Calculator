class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }
  // this function will clear out our different variables
  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }
  // this function will remove a single number
  delete() {

  }
  // this function is used when a user clicks on a button. it will add a number to the screen 
  appendNumber(number) {
    if (number === '.' && this.current)
      this.currentOperand = this.currentOperand.toString() + numberButtons.toString()
  }
  // 
  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''

  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
    }


  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
    this.previousOperandTextElement.innerText = this.previousOperand

  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-previous-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})
































// class Calculator {
//   constructor(previousOperandTextElement, currentOperandTextElement) {
//     this.previousOperandTextElement = previousOperandTextElement;
//     this.currentOperandTextElement = currentOperandTextElement;
//     this.clear()
//   }

//   clear() {
//     this.currentOperand = ''
//     this.previousOperand = ''
//     this.operation = undefined
//   }

//   delete() {

//   }

//   appendNumber() {
//       if (number === '.' && this.currentOperand.includes('.')) return
//       this.currentOperand = this.currentOperand.toString() + numberButtons.toString()
//   }

//   chooseOperation(operation) {
//       this.operation = operation
//       this.previousOperand = this.currentOperand
//       this.currentOperand = ''

//   }

//   compute() {}

//   updateDisplay() {
//       this.currentOperandTextElement.innerText = this.currentOperand
//       this.previousOperandTextElement.innerText = this.previousOperand
//   }
// }

// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelectorAll('[data-equals]')
// const deleteButton = document.querySelectorAll('[data-delete]')
// const allClearButton = document.querySelectorAll('[data-all-clear]')
// const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
// const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// numberButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.appendNumber(button.innerText);
//     calculator.updateDisplay();
//   })
// })

// operationButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     calculator.chooseOperation(button.innerText)
//     calculator.updateDisplay();
//   })
// })
