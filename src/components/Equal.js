export default function Equal(props){


    return(
        <dt className="equal-item">
            <span 
            onClick={()=> props.onEqual()} 
            className="sign-equal">=
            </span>
            </dt>
    )
}