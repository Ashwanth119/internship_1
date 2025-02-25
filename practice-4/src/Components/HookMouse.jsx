import React , { useState, useEffect }from 'react'

function HookMouse() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);


    const handleMousePosition=(e)=>{
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log("Effect Called");
        window.addEventListener('mousemove',handleMousePosition);

        return () =>{
            window.removeEventListener('mousemove',handleMousePosition);
        }
        
    },[]);

    return (
        <>
            Hook X- {x} Y- {y}
        </>
    )
}

export default HookMouse