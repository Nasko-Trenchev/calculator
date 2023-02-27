
function reducer(firstNumber, secondNumber, argument){

 switch(argument){
    case "+": return (firstNumber + secondNumber)
    case "*": return (firstNumber * secondNumber)
    case "/": return (firstNumber / secondNumber)
    case "-": return (firstNumber - secondNumber)
    default: return null;
 }
}

module.exports = reducer;

