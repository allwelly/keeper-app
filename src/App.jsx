//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

import React, {useState} from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";


function App() {
  const [noteArray, setNoteArray] = useState([]);

  function addNote(newNote) {
    setNoteArray(prevValue => [...prevValue, newNote]);
    
  }

  function deleteNote(id) {
    setNoteArray(noteArray.filter((value, index) => index !== id))
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {noteArray.map((eachNote, index) =>{
        return <Note 
        key={index}
        id={index} 
        title={eachNote.title} 
        content={eachNote.content} 
        clicked={deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;