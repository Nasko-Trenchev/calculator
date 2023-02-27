export default function Clear(props){

    return(
        <button className="clear-item" 
        onClick={()=> props.onClear()}>Clear
        </button>
    )
}