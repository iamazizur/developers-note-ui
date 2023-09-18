import React from 'react'
import NoteTitle from './NoteTitle';
import './Note.css'
import SubNotes from '../subnotes/SubNotes';


export default function Note(params) {
    return (
        <>
            <div className='container-sm note-wrapper p-4 text-start w-50 rounded-2'>
                <NoteTitle />
                <SubNotes/>
            </div>





        </>
    );
}