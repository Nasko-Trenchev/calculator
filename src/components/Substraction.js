export default function Substraction(props){

    return(
        <dt className="touche__box-item"> <span onClick={()=> props.onSubstraction()} className="soustraction">_</span></dt>
    )
}