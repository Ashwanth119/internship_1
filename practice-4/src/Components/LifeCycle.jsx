import React, {useState, useEffect} from 'react'

function LifeCycle() {
    const [count,setcount] = useState(0);

    useEffect(()=>{
        console.log('Mounting phase && Updating phase');
        return ()=>{
            console.log("Un-mounting phase");
        }
    },[count]);

    return (
        <>
            <button onClick={()=>setcount(prev=>prev+1)}>Clicked {count}</button>
        </>
    )
}

export default LifeCycle