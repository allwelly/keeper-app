//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

//- Take array and render seperate Note components for each item.
import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props){
    return <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
<button onClick={() => props.clicked(props.id)}><DeleteIcon /></button>
    </div>
}

export default Note;