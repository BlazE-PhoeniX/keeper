import React from "react";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

const localStorage = window.localStorage;
const savedNotes = localStorage.getItem("keeper") || "[]";

function App() {
  const [notes, setNotes] = React.useState(JSON.parse(savedNotes));
  localStorage.setItem("keeper", JSON.stringify(notes));

  const addNote = note => {
    setNotes(prev => [...prev, note]);
  };

  const removeNote = id => {
    setNotes(prev => prev.filter((note, i) => i !== id));
  };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, i) => (
        <Note
          removeNote={removeNote}
          key={i}
          id={i}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
