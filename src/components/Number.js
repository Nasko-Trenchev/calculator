export default function Number(props){

    return(
        <dt className={props.dtClass}> 
            <span className={props.className} 
            onClick={() => props.onButtonClick(props)}>{props.name}
            </span>
        </dt>
  
    )
}