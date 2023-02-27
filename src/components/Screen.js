import {useState } from "react";
import Addition from "./Addition";
import Number from "./Number";
import Clear from "./Clear";
import Division from "./Division";
import Equal from "./Equal";
import Multiplication from "./Mutliplication";
import Substraction from "./Substraction";
import reducer from "../utils/reducer";


export default function Screen(){

   const [firstNumber, setFirstNumber] = useState("");
   const [secondNumber, setSecondNumber] = useState("");
   const [currentSymbol, setSymbol] = useState("");
   const [firstNumberCompleted, setFirstNumberCompleted] = useState(true);

    const buttonHandler = (props) =>{
        
        if(firstNumberCompleted)
        {
            setFirstNumber(previousNumber => previousNumber + props.name) 
        }
        else {
            setSecondNumber(previousNumber => previousNumber + props.name)     
        }
    }

    const clearResult = () =>{
        setSymbol("");
        setFirstNumber("")
        setSecondNumber("");
        setFirstNumberCompleted(true);
    }

    const devisionHandler = () =>{
        if(currentSymbol === "" && (firstNumber!== "-" && firstNumber!=="")){
        setSymbol("/")
        setFirstNumberCompleted(false);
        }
  
    }
    const multiplicationHandler = ()=>{
        if(currentSymbol === "" && (firstNumber!== "-" && firstNumber!=="")){
            setSymbol("*")
            setFirstNumberCompleted(false);
        }
       
    }
    const substractionHandler = (props) =>{

        if(firstNumber === ""){
            setFirstNumber(previousNumber => previousNumber + props.name);
        }
        else if (currentSymbol === "" && firstNumber!== "-")
        {
            setSymbol("-")
            setFirstNumberCompleted(false);
        }
         
    }
    const onAdd = ()=>{
        if(currentSymbol === "" && (firstNumber!== "-" && firstNumber!=="")){
            setSymbol("+")
            setFirstNumberCompleted(false);
        }
    }

    const getResult = () =>{
     const result = reducer(Number(firstNumber), Number(secondNumber), currentSymbol)
     setFirstNumber(result.toString());
     setSecondNumber("");
     setSymbol("")
    }
    
    return (
        <div className="container calculator">
        <div className="screen-item screen"> <span>{`${firstNumber} ${currentSymbol} ${secondNumber}`.trim()}</span></div>
        <dl className="touche__box">
        <Substraction name="-" onSubstraction={substractionHandler}/>
        <Addition onAddition={onAdd}/>
        <Clear onClear={clearResult}/>
        <Number name="7" dtClass = "touche__box-item clearme" onButtonClick={buttonHandler}/>
        <Number name="8" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Number name="9" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Division onDevision ={devisionHandler}/>
        <Number name="4" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Number name="5" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Number name="6" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Multiplication onMultiplication = {multiplicationHandler}/>
        <Number name="1" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Number name="2" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Number name="3" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Equal onEqual={getResult}/>
        <Number name="0" dtClass = "touche__box-item zero-item" onButtonClick={buttonHandler}/>
        <Number name="." dtClass = "touche__box-item un-item" onButtonClick={buttonHandler}/>
        </dl>
        </div>
    )
}