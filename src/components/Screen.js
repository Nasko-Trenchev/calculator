import {useEffect, useState } from "react";
import Addition from "./Addition";
import Button from "./Button";
import Clear from "./Clear";
import Division from "./Division";
import Equal from "./Equal";
import Multiplication from "./Mutliplication";
import Substraction from "./Substraction";
import reducer from "../utils/Reducer";


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
        if(currentSymbol == "" && (firstNumber!= "-" && firstNumber!="")){
        setSymbol("/")
        setFirstNumberCompleted(false);
        }
  
    }
    const multiplicationHandler = ()=>{
        if(currentSymbol == "" && (firstNumber!= "-" && firstNumber!="")){
            setSymbol("*")
            setFirstNumberCompleted(false);
        }
       
    }
    const substractionHandler = (props) =>{

        if(firstNumber === ""){
            setFirstNumber(previousNumber => previousNumber + props.name);
        }
        else if (currentSymbol == "" && firstNumber!= "-")
        {
            setSymbol("-")
            setFirstNumberCompleted(false);
        }
         
    }
    const onAdd = ()=>{
        if(currentSymbol == "" && (firstNumber!= "-" && firstNumber!="")){
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
        <Button name="7" dtClass = "touche__box-item clearme" onButtonClick={buttonHandler}/>
        <Button name="8" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Button name="9" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Division onDevision ={devisionHandler}/>
        <Button name="4" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Button name="5" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Button name="6" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Multiplication onMultiplication = {multiplicationHandler}/>
        <Button name="1" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Button name="2" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Button name="3" dtClass = "touche__box-item" onButtonClick={buttonHandler}/>
        <Equal onEqual={getResult}/>
        <Button name="0" dtClass = "touche__box-item zero-item" onButtonClick={buttonHandler}/>
        <Button name="." dtClass = "touche__box-item un-item" onButtonClick={buttonHandler}/>
        </dl>
        </div>
    )
}