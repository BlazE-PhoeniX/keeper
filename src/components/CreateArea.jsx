import React from "react";
import { Fab, Zoom } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function CreateArea({ addNote }) {
  const [isFocused, setIsFocused] = React.useState(false);

  const setFocus = () => {
    setIsFocused(true);
    if (!isFocused) {
      setTimeout(() => {
        document.getElementById("noteTitle").focus();
      }, 1);
    }
  };

  const [note, setNote] = React.useState({ title: "", content: "" });

  const changeNote = event => {
    const { name, value } = event.target;
    setNote(prev => ({ ...prev, [name]: value }));
  };

  const submitHandler = event => {
    event.preventDefault();
    addNote(note);
    setNote({ title: "", content: "" });
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="create-note" id="form">
        {isFocused && (
          <input
            id="noteTitle"
            onChange={changeNote}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          id="noteContent"
          onFocus={setFocus}
          onChange={changeNote}
          name="content"
          placeholder="Take a note..."
          rows={isFocused ? "3" : "1"}
          value={note.content}
        />
        {isFocused && (
          <Zoom in={true}>
            <Fab type="submit">
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
