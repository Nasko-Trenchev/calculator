export default function Multiplication(props){


    return(
        <dt className="touche__box-item">
            <span 
            onClick={()=>props.onMultiplication()}
             className="sign">x
            </span>
            </dt>
    )
}