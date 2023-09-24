import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function RichDescription({ onDescriptionChanged, initialValue, readOnly = true }) {
    if (initialValue === undefined || initialValue === null)
        initialValue = '<p>Your Description goes here..</p><p><br></p><p><br></p><p><br></p>'
    const [text, setText] = React.useState(initialValue);


    const handleChange = (value) => {
        setText(prev => value);

        if (onDescriptionChanged !== undefined && onDescriptionChanged !== null) {
            onDescriptionChanged(value);

        }
    };


    let toolbar = [
        [{ 'header': '1' }, { 'header': '2' }],
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link'],
        ['code']
    ]
    if (readOnly)
        toolbar = false;

    const modules = {
        toolbar : toolbar
    }







    return (
        <>
            <ReactQuill
                value={text}
                onChange={handleChange}
                modules={modules}
                readOnly={readOnly}
            />


        </>

    )
}

export default RichDescription