import React, {useState, useEffect} from 'react';

function HookCounterOne() {
    const [count, setCount] = useState(0);

    /*
        useEffect accepts 2 arguments
            1. setup
            2. dependencies?
        i.e., useEffect(setup, dependencies?)

        1. if dependencies is null, then after each rendering of a component, the useEffect will be invoked.
        2. if dependencies is an empty array, then it'll be invoked for the first rendering and doesn't invoked after each re-render.
        3. we can specify the states in the dependencies array, for which change in state can invoke the useEffect.

    */

    // // 1. for each render
    // useEffect(()=>{document.title=`Clicked ${count} times`});

    // // 2. run effect only once
    // useEffect(()=>{document.title=`Clicked ${count} times`},[]);

    // 3. conditionally run effect
    useEffect(()=>{document.title=`Clicked ${count} times`},[count]);




  return (
    <>
        <button onClick={()=>setCount(prev=>prev+1)}>Clicked {count} times</button>
    </>
  )
}

export default HookCounterOne;