import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className="backdrop"></div>,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <div className="overlay">{props.children}</div>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
