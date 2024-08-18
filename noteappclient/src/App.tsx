
import React from 'react';
import {useState} from "react";
import logo from './logo.svg';
import catlogo from './smartcatcrop.jpg';
import './App.css';

type Note = {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [notes, setNotes] = useState([
    {
      id:1,
      title: "Example note title 1",
      content: "Example note content 1..."
    },
    {
      id:2,
      title: "Example note title 2",
      content: "Example note content 2..."
    },
    {
      id:3,
      title: "Example note title 3",
      content: "Example note content 3..."
    },

  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const handleNoteClick = (note:Note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };


  const handleSubmit = (event: React.FormEvent)=>{

    event.preventDefault();
    console.log("title: ", title);
    console.log("content: ", content);

    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      content: content, 
    };
    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  const handleUpdateNote = (
    event: React.FormEvent 
  )=>{
    event.preventDefault();

    if(!selectedNote) {
      return;
    }

    const updatedNote: Note = {
      id: selectedNote.id,
      title: title,
      content: content,

    }

    const updatedNotesList = notes.map((note)=>
      note.id === selectedNote.id
        ? updatedNote
        : note
      )
    
    setNotes(updatedNotesList)
    setTitle("")
    setContent("")
    setSelectedNote(null);
  
  };

  const handleCancel=() => {
    setTitle("")
    setContent("")
    setSelectedNote(null);
  }

  const deleteNote = (
    event: React.MouseEvent,
    noteId: Number,

    ) => {
      event.stopPropagation();  //only necessary for nested click events

      const updatedNotes = notes.filter(
        (note)=>note.id != noteId
      )

      setNotes(updatedNotes);
  }

  return (
    
    <div className="App">
      <div className="App-header">

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={catlogo} className="App-logo" alt="smartcatcrop" />
        {/* padding-bottom: 300px; */}

          <h2>CatNotez</h2>
          <p>
            Take a quick cat-nap, I mean a cat-note to organize your thought process as you work. Or simply use it as as a one stop shop for sticky notes.
          </p>

      </div>


      <div className = "App-container">
        <form className="note-form"
          onSubmit={(event)=> 
            selectedNote
              ? handleUpdateNote(event)
              : handleSubmit(event)
          // onSubmit={(event)=>handleSubmit(event)}>
          }>

          <input
            value = {title}
            onChange={(event)=>
            setTitle(event.target.value)
            }
            placeholder='title'
            required
          ></input>
          
          <textarea

            value={content}
            onChange={(event) =>
              setContent(event.target.value)
            }
            placeholder="Content"
            rows={10}
            required></textarea>  

            {selectedNote ? (
              <div className="edit-buttons">

                <button type="submit">Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            ) : (
              <button type="submit">Add Note</button>
            )}
      
        </form>
        <div className="notes-grid">
          {notes.map((note)=> (
            <div 
              className="note-item"
              onClick={() => handleNoteClick(note)}>
            <div className="notes-header">
              <button onClick = {(event) =>
                deleteNote(event,note.id)
              }>x</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
             
           </div>

          ))}
         
        </div>
      </div>

    </div>
  );
}

export default App;
