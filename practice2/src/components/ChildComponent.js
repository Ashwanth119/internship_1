
function ChildComponent(props){
    return(
        <button onClick={()=>props.Handler('child')}>Greet Parent</button>
    )
}

export default ChildComponent;