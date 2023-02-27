export default function Substraction(props){

    return(
        <dt className="touche__box-item"> <span onClick={()=> props.onSubstraction(props)} className="soustraction">{props.name}</span></dt>
    )
}