import {useState } from "react";
import Addition from "./Addition";
import Button from "./Button";
import Clear from "./Clear";
import Division from "./Division";
import Equal from "./Equal";
import Multiplication from "./Mutliplication";
import Substraction from "./Substraction";
import reducer from "../utils/Reducer";


export default function Screen(){

   const [screen, setScreen] = useState("");
   const [firstNumber, setFirstNumber] = useState("");
   const [secondNumber, setSecondNumber] = useState("");
   const [currentSymbol, setSymbol] = useState("0");
   const [firstNumberCompleted, setFirstNumberCompleted] = useState(true);

    function ButtonHandler(props){
        
        if(firstNumberCompleted)
        {
            setFirstNumber(previousNumber => previousNumber + props.name) 
            setScreen(oldValue => oldValue + props.name)
        }
        else {
            setSecondNumber(previousNumber => previousNumber + props.name)  

            if(props.name == "." || secondNumber[secondNumber.length -1] == "."){
                setScreen(oldValue => oldValue + props.name)
            }
            else{
                setScreen(oldValue => oldValue + " " + props.name)
            }
        }
    }

    function ClearResult(){
        setSymbol("0");
        setScreen("")
        setFirstNumber("")
        setSecondNumber("");
        setFirstNumberCompleted(true);
    }

    function DevisionHandler(){
        if(currentSymbol == "0" && (firstNumber!= "-" && firstNumber!="")){
        setScreen(oldValue => oldValue + " /")
        setSymbol("/")
        setFirstNumberCompleted(false);
        }
  
    }
    function MultiplicationHandler(){
        if(currentSymbol == "0" && (firstNumber!= "-" && firstNumber!="")){
            setScreen(oldValue => oldValue + " *")
            setSymbol("*")
            setFirstNumberCompleted(false);
        }
       
    }
    function SubstractionHandler(props){

        if(firstNumber === ""){
            setScreen(oldValue => oldValue + props.name);
            setFirstNumber(previousNumber => previousNumber + props.name);
        }
        else if (currentSymbol == "0" && firstNumber!= "-")
        {
            setScreen(oldValue => oldValue + " -")
            setSymbol("-")
            setFirstNumberCompleted(false);
        }
         
    }
    function onAdd(){
        if(currentSymbol == "0" && (firstNumber!= "-" && firstNumber!="")){
            setScreen(oldValue => oldValue + " +")
            setSymbol("+")
            setFirstNumberCompleted(false);
        }
    }

    function getResult(){
     let result = reducer(Number(firstNumber), Number(secondNumber), currentSymbol)
     setScreen(oldValue => oldValue = result);
     setFirstNumber(result.toString());
     setSecondNumber("");
     setSymbol("0")
    }
    
    return (
        <div className="container calculator">
        <div className="screen-item screen"> <span> {screen}</span></div>
        <dl className="touche__box">
        <Substraction name="-" onSubstraction={SubstractionHandler}/>
        <Addition onAddition={onAdd}/>
        <Clear onClear={ClearResult}/>
        <Button name="7" dtClass = "touche__box-item clearme" onButtonClick={ButtonHandler}/>
        <Button name="8" dtClass = "touche__box-item" onButtonClick={ButtonHandler}/>
        <Button name="9" dtClass = "touche__box-item" onButtonClick={ButtonHandler}/>
        <Division onDevision ={DevisionHandler}/>
        <Button name="4" dtClass = "touche__box-item" onButtonClick={ButtonHandler}/>
        <Button name="5" dtClass = "touche__box-item" onButtonClick={ButtonHandler}/>
        <Button name="6" dtClass = "touche__box-item" onButtonClick={ButtonHandler}/>
        <Multiplication onMultiplication = {MultiplicationHandler}/>
        <Button name="1" dtClass = "touche__box-item" onButtonClick={ButtonHandler}/>
        <Button name="2" dtClass = "touche__box-item" onButtonClick={ButtonHandler}/>
        <Button name="3" dtClass = "touche__box-item" onButtonClick={ButtonHandler}/>
        <Equal onEqual={getResult}/>
        <Button name="0" dtClass = "touche__box-item zero-item" onButtonClick={ButtonHandler}/>
        <Button name="." dtClass = "touche__box-item un-item" onButtonClick={ButtonHandler}/>
        </dl>
        </div>
    )
}