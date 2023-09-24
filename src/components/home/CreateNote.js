import React from "react";
import Title from "../Title";
import RichDescription from "../descriptions/RichDescription";
import CodeComponent from "../subnotes/CodeComponent";

import NoteDTO from "../../models/NoteDTO.js";
import UserDTO from "../../models/UserDTO.js";



const user = new UserDTO(1)
const initialNoteDto = new NoteDTO();
initialNoteDto.user = user;

export default function CreateNote(params) {

    const [noteDTO, setNoteDTO] = React.useState(initialNoteDto)

    const initialCodeValue = `
    public class Main{
        public static void main(String[] args){
            System.out.println("Hello World!");
        }
    }
    `

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
        
        console.log(noteDTO);
        console.log(JSON.stringify(noteDTO));
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

                    <div className="mt-2">
                        <CodeComponent
                            initialCodeValue={initialCodeValue}
                        />
                    </div>

                </div>

                <div className="d-grid gap-2 mt-2">
                    <button className="btn btn-dark" type="button">Add Section</button>
                </div>

                <button type="button" className="btn btn-primary" onClick={onSave} >Save</button>

            </div>

        </>
    )
}