import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function RichDescription() {

    const [text, setText] = React.useState('<p>Your Description goes here..</p><p><br></p><p><br></p><p><br></p>');

    const handleChange = (value) => {
        setText(prev => value);
    };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
        ]
    }

    return (
        <>
            <ReactQuill
                value={text}
                onChange={handleChange}
                modules={modules}
            />
        </>

    )
}

export default RichDescription