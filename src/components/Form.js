import React from "react";
import Modal from "./UI/Modal";

const Form = (props) => {
  return (
    <Modal>
      <form>
        <label htmlFor="name">Website Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="url">Website URL:</label>
        <input type="url" id="url" name="url" />

        <button onClick={props.onClick} type="submit">
          Add
        </button>
        <button onClick={props.onClick}>Close</button>
      </form>
    </Modal>
  );
};

export default Form;
