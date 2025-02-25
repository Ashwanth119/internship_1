import React, { useState} from 'react'
import HookMouse from './HookMouse';

function MouseDisplay() {
    const [display,setDisplay] = useState(true);

    return (
    <div>
        <button onClick={()=>setDisplay(prev=>!prev)}>Toggle Display</button>
        {display && <HookMouse/>}
    </div>
    )
}

export default MouseDisplay