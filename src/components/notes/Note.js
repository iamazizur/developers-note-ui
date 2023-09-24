import React from 'react'
import './Note.css'
import CodeComponent from '../subnotes/CodeComponent';
import NoteDbHandler from '../../db/NoteDbHandler';
import NoteDTO from '../../models/NoteDTO';
import RichDescription from '../descriptions/RichDescription';
import SubNotes from '../subnotes/SubNotes';
import SubnoteDTO from '../../models/SubnoteDTO';




export default function Note({ userDto, note_id }) {



    const [note, setNote] = React.useState(new NoteDTO())

    React.useEffect(() => {
        let db = new NoteDbHandler();
        db.getNotesById(1)
            .then(val => {
                console.log('db called..');
                console.log(val[0]);
                setNote(val[0])
            })
            .catch(console.log)
    }, [])


    let description = <p>Please, wait..</p>
    if (note.description) {
        description = <RichDescription
            initialValue={note.description}
        />
    }



    let subnotes = "Loading..."
    if (note.subnotes) {
        subnotes = note.subnotes.map(subnote => {
            console.log('sub');
            console.log(subnote);
            let dto = new SubnoteDTO();
            dto = {
                ...subnote
            }
            console.log(dto);
            return (
                <SubNotes
                    key={subnote.id}
                    element={dto}
                />
            )

        })

    }


    return (
        <>
            <div className='card note-wrapper text-start w-75 rounded-2 p-0'>
                <div className='card-header bg-dark text-light m-0'>
                    <h1>{note.title ?? "Loading.."}</h1>
                </div>
                <div className='card-body'>

                    {description}

                    {subnotes}




                </div>

                <div className="d-grid gap-2 mt-2">
                    <button className="btn btn-dark" type="button">Add Section</button>
                </div>
            </div>





        </>
    );
}