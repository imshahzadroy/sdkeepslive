import React from "react";
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';

const Note = (props) => {
    const deleteEvent = () => {
        props.deleteItem(props.id);
    };
    return(
        <>
        <div className="note">
            <h1>{props.title}</h1>
            <br />
            <p>{props.title}</p>
            <Button onClick={deleteEvent} className="btn"><RemoveIcon className="deleteIcon"/></Button>
        </div>
        </>

    );
};


export default Note;