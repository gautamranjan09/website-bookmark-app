import React from "react";
import Modal from "./UI/Modal";
import { useContext } from "react";
import WebContext from "./store/web-context";
import "./From.css";
import axios from "axios";

const Form = (props) => {
  const webCtx = useContext(WebContext);

  const handleFromSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: props.item ? props.item.id : Math.random(), // Use existing id for editing
      webName: event.target.name.value,
      url: event.target.url.value,
    };

    if (props.item) {
      // If editing, update the item
      webCtx.removeItem(newItem.id);
      webCtx.addItem(newItem);
      console.log(newItem);

      axios.put(
        `https://crudcrud.com/api/02a4c6f8525045e283b29d859cf1142e/data/${props.item._id}`,
        newItem
      );
    } else {
      // If adding, create a new item
      axios
        .post(
          "https://crudcrud.com/api/02a4c6f8525045e283b29d859cf1142e/data",
          newItem
        )
        .then((result) => {
          webCtx.addItem(result.data);
        });
    }

    props.onClose();
  };

  return (
    <Modal>
      <form onSubmit={handleFromSubmit}>
        <label htmlFor="name">Website Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={props.item ? props.item.webName : ""}
        />
        <label htmlFor="url">Website URL:</label>
        <input
          type="url"
          id="url"
          name="url"
          defaultValue={props.item ? props.item.url : ""}
        />

        <button type="submit">{props.item ? "Save" : "Add"}</button>
        <button type="button" onClick={props.onClose}>
          Close
        </button>
      </form>
    </Modal>
  );
};

export default Form;
