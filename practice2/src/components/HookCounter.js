import { useState } from 'react';
function HookCounter(){
    const [count, setCount]=useState(0);
    // function inc(){
    //     setCount(count+1);
    // }
    return (
        <button onClick={()=>setCount(count + 1)}>Count {count}</button>
    )
}

export default HookCounter;