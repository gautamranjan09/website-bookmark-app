import React from "react";

const WebContext= React.createContext({
    items:[],
    addItem:()=>{},
    removeItem:()=>{},
    showItem:()=>{}
});

export default WebContext;