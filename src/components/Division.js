export default function Division(props){


    return(
        <dt className="touche__box-item" 
         onClick={() => props.onDevision(props)}>
         <span className="sign">/
         </span>
        </dt>
    )
}