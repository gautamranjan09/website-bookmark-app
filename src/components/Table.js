import React, { useContext, useEffect, useState } from "react";
import WebContext from "./store/web-context";
import Form from "./Form";
import "./Table.css";
import axios from "axios";

const Table = (props) => {
  const webCtx = useContext(WebContext);
  const [editItem, setEditItem] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  

  useEffect(() => {
    axios
      .get("https://crudcrud.com/api/02a4c6f8525045e283b29d859cf1142e/data")
      .then((result) => {
        webCtx.showItem(result.data);
      });
  }, []);

  const handleEditClick = (item) => {
    setEditItem(item);
    setFormVisible(true);
    //console.log(item,webCtx.items);
    
  };

  const closeForm = () => {
    setEditItem(null);
    setFormVisible(false);
  };

  return (
    <>
      <h4>All Bookmarks</h4>
      <ul>
        {webCtx.items.map((item) => (
          <li key={item.id}>
            {item.webName} - {item.url}{" "}
            <button
              onClick={() => {
                webCtx.removeItem(item.id);
                axios.delete(
                  `https://crudcrud.com/api/02a4c6f8525045e283b29d859cf1142e/data/${item._id}`
                );
              }}
            >
              Delete
            </button>{" "}
            <button onClick={() => handleEditClick(item)}>Edit</button>
          </li>
        ))}
      </ul>
      {formVisible && <Form item={editItem} onClose={closeForm}/>}
    </>
  );
};

export default Table;
