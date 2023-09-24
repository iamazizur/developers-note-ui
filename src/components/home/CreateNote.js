import React from "react";
import Title from "../Title";
import RichDescription from "../descriptions/RichDescription";

import NoteDTO from "../../models/NoteDTO.js";
import UserDTO from "../../models/UserDTO.js";
import NoteDbHandler from "../../db/NoteDbHandler";
import SubNotes from "../subnotes/SubNotes";
import SubnoteDTO from "../../models/SubnoteDTO";



const user = new UserDTO(1)
const initialNoteDto = new NoteDTO();
initialNoteDto.user = user;

export default function CreateNote(params) {

    const [noteDTO, setNoteDTO] = React.useState(initialNoteDto);
    const [subnotes, setSubnotes] = React.useState([]);


    const onChangeTitle = (title) => {
        setNoteDTO(prev => {
            prev.title = title;
            return prev;
        })
    }

    const onChangeDescription = (desc) => {

        setNoteDTO(prev => {
            prev.description = desc;
            return prev;
        })

    }

    const onSave = () => {

        if(subnotes?.length > 0){
           let notes = subnotes.map(subnote => subnote.props.element)
           noteDTO.subnotes = notes;
        }
        console.log(noteDTO);
        console.log(JSON.stringify(noteDTO));
        // console.log(subnotes);

        return;
        console.log('saving to db..');
        let dbHandler = new NoteDbHandler();
        dbHandler.saveNote(noteDTO)
            .then(response => {
                console.log(response);
            }).catch(err => {
                console.error(err)
            });
    }

    const subnoteUpdateHandler = (subnote) => {
    }

    const addSubnoteSection = () => {

        setSubnotes(prev => {

            const element =
                <SubNotes
                    onSubNoteUpdate={subnoteUpdateHandler}
                    key={prev.length + 1}
                    element={new SubnoteDTO()}
                />


            for (let index = 0; index < prev.length; index++) {
                const element = prev[index];
                console.log(element.props.element);
            }

            return [...prev, element];

        })
    }

    return (
        <>

            <div className="card note-wrapper text-start w-75 rounded-2 p-0">

                <div className='card-header bg-dark text-light m-0'>
                    <Title
                        onChangeTitle={onChangeTitle}
                    />
                </div>
                <div className="card-body">
                    <RichDescription
                        onDescriptionChanged={onChangeDescription}
                    />

                    {subnotes}

                    {/* 
                    <div className="mt-2">

                        <SubNotes />

                    </div> */}

                </div>

                <div className="d-grid gap-2 mt-2">
                    <button className="btn btn-dark" type="button" onClick={addSubnoteSection}>Add Section</button>
                </div>

                <button type="button" className="btn btn-primary" onClick={onSave} >Save</button>

            </div>

        </>
    )
}