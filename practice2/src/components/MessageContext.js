import { createContext, useContext } from "react";

const MessageContext=createContext();
export const useUser=()=> useContext(MessageContext);

export default MessageContext;


// // Context API
// import { createContext } from "react";

// const MessageContext=createContext();

// export default MessageContext;