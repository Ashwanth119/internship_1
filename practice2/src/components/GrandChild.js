import{ useUser } from "./MessageContext";
function GrandChild(){
    const userName=useUser();
    return <div>Welcome {userName}</div>
}

export default GrandChild;


// // Context API
// import { useContext } from "react";
// import MessageContext from "./MessageContext";
// function GrandChild(){
//     const userName=useContext(MessageContext);
//     return <div>Welcome {userName}</div>
// }


// export default GrandChild;
