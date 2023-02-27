export default function Addition(props){

    return (
        <dt onClick={()=> props.onAddition()} className="touche__box-item"><span className="sign">+</span></dt>
    )
}