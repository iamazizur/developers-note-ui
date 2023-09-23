import React from "react";
import Title from "../Title";
import RichDescription from "../descriptions/RichDescription";


export default function CreateNote(params) {
    return (
        <>
            <div className="card note-wrapper text-start w-75 rounded-2 p-0">

                <div className='card-header bg-dark text-light m-0'>
                    <Title />
                </div>
                <div className="card-body">
                    <RichDescription />
                </div>
                <button type="button" className="btn btn-primary" >Inside</button>
                <h1>Inside Create Note</h1>
                flsflsmfsd
            </div>

        </>
    )
}