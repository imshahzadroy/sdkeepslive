import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";


const App = () => {
    const [addItem, setAddItem] = useState([]);
    const addNote = (note) => {
        // alert("Props Passed");
        setAddItem((prevData) => {
            return [...prevData, note];
        });
    };

    const onDelete = (id)=> {
        setAddItem((olddata) => 
            olddata.filter((currData, indx) => {
                return indx !== id;
            })
        );
    };
    return(
        <>
        <Header/>
        <CreateNote passNote = {addNote}/>
        {
            addItem.map((oldData, index) => {
                return (<Note
                key={index}
                id={index}
                title={oldData.title}
                content={oldData.content}
                deleteItem={onDelete}
                />
                );
            })
        }
        <Footer/>
        </>

    );
};


export default App;