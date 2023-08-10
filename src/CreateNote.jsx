import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
});

    const inputEvent = (event) => {
     const {name, value} = event.target;
     setNote((prev) => {
        return{
            ...prev,
            [name]: value,
        };
     });
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title:"",
            content:""
        });

    };

    const expandIt = () => {
        setExpand(true);
    };

    const contractIt = () => {
        setExpand(false);
    };
    return(
        <>
        <div className="main-note"  onDoubleClick={contractIt}> 
            <form >
                {expand?
                <input type="text" placeholder="Title" onChange={inputEvent} name="title" value={note.title} autoComplete="off"/> :null}
                <textarea onClick={expandIt} placeholder="Write a note" autoComplete="false" onChange={inputEvent} name="content" value={note.content}></textarea>
              {expand?  <Button onClick={addEvent} className="add-btn"><AddIcon className="plus-sign"/></Button> :null}
            </form>
        </div>
        </>

    );
};


export default CreateNote;