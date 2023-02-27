const Decimal = require('decimal.js');

function reducer(firstNumber, secondNumber, argument){

 switch(argument){
    case "+": return (Decimal.sum(firstNumber, secondNumber).toString())
    case "*": return (Decimal.mul(firstNumber, secondNumber).toString())
    case "/": return (Decimal.div(firstNumber, secondNumber).toString())
    case "-": return (firstNumber - secondNumber)
    default: return null;
 }
}

module.exports = reducer;

