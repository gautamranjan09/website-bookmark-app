import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
 const [fromShown, setfromshown]=useState(false);
 
  
  return (
    <>
    {fromShown && <Form onClick={()=>{setfromshown(false)}}/>}
    <div className="app">
      <h1>Bookmark Website</h1>
      <button onClick={()=>{setfromshown(true)}}>Add New</button>
      </div>
      <Table/>
    </>
  );
}

export default App;
