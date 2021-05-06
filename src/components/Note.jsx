import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  const clickHandler = () => {
    props.removeNote(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={clickHandler}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
