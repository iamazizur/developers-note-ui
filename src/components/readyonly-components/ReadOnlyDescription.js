import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ReadOnlyDescription.css'

function ReadOnlyDescription({ description }) {
    if (description === undefined || description === null)
        return;

    return (
        <>
            <div className='wrapper-readyonly-desc'>

                <ReactQuill
                    value={description}
                    readOnly={true}
                    modules={{ toolbar: false }}
                />
            </div>
        </>
    )
}

export default ReadOnlyDescription