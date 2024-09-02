import React, { useState } from "react";
import WebContext from "./web-context";

const WebProvider = (props) => {
  const [bookmarkState, setBookmarkState] = useState([]);

  const addItemHandler = (item) => {
    setBookmarkState((prev) => [...prev, item]);
  
  };

  const removeItemHandler = (id) => {
    setBookmarkState(bookmarkState.filter((item) => item.id !== id));
  };

  const showItemHandler = (items) => {
    setBookmarkState([...items]);
  };

  return (
    <WebContext.Provider
      value={{
        items: bookmarkState,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        showItem: showItemHandler,
      }}
    >
      {props.children}
    </WebContext.Provider>
  );
};

export default WebProvider;
