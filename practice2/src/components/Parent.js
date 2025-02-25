import MessageContext from './MessageContext';
import Child from './Child';
function Parent(){
    const userName='Ashwanth';
    return <MessageContext.Provider value={userName}> <Child/> </MessageContext.Provider>
}

export default Parent;

// // Context API
// import MessageContext from './MessageContext';
// import Child from './Child';
// function Parent(){
//     const userName='Ashwanth';
//     return <MessageContext.Provider value={userName}> <Child/> </MessageContext.Provider>
// }


// export default Parent;