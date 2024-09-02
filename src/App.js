import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import WebProvider from "./components/store/WebProvider";

function App() {
 const [fromShown, setfromshown]=useState(false);
 
  
  return (
    <WebProvider>
    {fromShown && <Form onClose={()=>{setfromshown(false)}}/>}
    <div className="app">
      <h1>Bookmark Website</h1>
      <button onClick={()=>{setfromshown(true)}}>Add New</button>
      </div>
      <Table />
    </WebProvider>
  );
}

export default App;
