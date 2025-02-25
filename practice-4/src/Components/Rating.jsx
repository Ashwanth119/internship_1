import React, {useState, useEffect} from 'react'
import './Rating.css'
function Rating() {
    const [maxi,setMaxi] = useState(-1); // to store the selected button index.
    const [starColor,setStarColor] = useState('white'); // to update the star color.

    const click=(id)=>{
        setMaxi(id);
        // console.log('id: ',id);
        switch(id){
            case 0:
                setStarColor('red');
                break;
            case 1:
                setStarColor('orange');
                break;
            case 2:
                setStarColor('purple');
                break;
            case 3:
                setStarColor('yellow');
                break;
            case 4:
                setStarColor('green');
                break;
            default:
                setStarColor('white');
        }
    }

    /*

    const setColor=()=>{
        console.log('maxi: ',maxi);
        switch(maxi){
            case 0:
                setStarColor('red');
                break;
            case 1:
                setStarColor('orange');
                break;
            case 2:
                setStarColor('purple');
                break;
            case 3:
                setStarColor('yellow');
                break;
            case 4:
                setStarColor('green');
                break;
            default:
                setStarColor('white');
        }
    }

    useEffect(()=>{setColor();},[maxi]);

    */

    return (
        <>
            <button onClick={()=>click(0)} ><i id='star' className="fa fa-star" aria-hidden="true" style={{color:0<=maxi?starColor:'white'}}></i></button>
            <button onClick={()=>click(1)} ><i id='star' className="fa fa-star" aria-hidden="true" style={{color:1<=maxi?starColor:'white'}}></i></button>
            <button onClick={()=>click(2)} ><i id='star' className="fa fa-star" aria-hidden="true" style={{color:2<=maxi?starColor:'white'}}></i></button>
            <button onClick={()=>click(3)} ><i id='star' className="fa fa-star" aria-hidden="true" style={{color:3<=maxi?starColor:'white'}}></i></button>
            <button onClick={()=>click(4)} ><i id='star' className="fa fa-star" aria-hidden="true" style={{color:4<=maxi?starColor:'white'}}></i></button>
        </>
    )
}

export default Rating