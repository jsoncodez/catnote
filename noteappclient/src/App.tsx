
import React from 'react';
import {useState} from "react";
import logo from './logo.svg';
import './App.css';


function App() {
  const [notes, setNotes] = useState([
    {
      id:1,
      title: "note title 1",
      content: "content 1"
    },
    {
      id:1,
      title: "note title 2",
      content: "content 2"
    },
    {
      id:1,
      title: "note title 3",
      content: "content 3"
    },
    {
      id:1,
      title: "note title 4",
      content: "content 4"
    },
    {
      id:1,
      title: "note title 5",
      content: "content 5"
    },
  ])
  return (
    
    <div className="App">
      <div className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h2>CatNote</h2>

      </div>


      <div className = "App-container">
        <form className="note-form">
          <input
            placeholder='title'
            required
          ></input>
          
          <textarea
            placeholder="Content"
            rows={10}
            required></textarea>
            <button type="submit">Add Note</button>
        </form>
        <div className="notes-grid">
          {notes.map((note)=> (
             <div className="note-item">
             <div className="notes-header">
               <button>x</button>
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
