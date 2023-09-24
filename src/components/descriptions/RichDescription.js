import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function RichDescription({onDescriptionChanged}) {

    const [text, setText] = React.useState('<p>Your Description goes here..</p><p><br></p><p><br></p><p><br></p>');


    const handleChange = (value) => {
        setText(prev => value);

        if( onDescriptionChanged !== undefined && onDescriptionChanged !== null){
            onDescriptionChanged(value);

        }
    };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
            ['code']
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