//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.

import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    })
    const [isClicked, setIsClicked] = useState(false);

    function ready() {
        setIsClicked(true);
    }
    function handleChange(event){
        const {name, value} = event.target;

        setNewNote (prevInput => {
            return { 
                ...prevInput,
                [name]: value
            };
        });
    }

    function submitNote(event) {
            props.onAdd(newNote);
            setNewNote({
                title:"",
                content:""
            });
            event.preventDefault();
    }

  return (
    <div>
      <form className="create-note">
        <input value={newNote.title} onChange={handleChange} name="title" placeholder="Title" hidden={!isClicked ? true : false}/>
        <textarea value={newNote.content} onChange={handleChange} name="content" placeholder="Take a note..." rows={isClicked ? 3 : 1} onClick={ready}/>
        <Zoom in={isClicked ? true : false}><Fab onClick={submitNote}><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;