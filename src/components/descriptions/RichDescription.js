import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function RichDescription() {

    const [text, setText] = React.useState('<p>Your Description goes here..</p>');

    const handleChange = (value) => {

        setText(prev => {
            return value;
        });
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
            <div>RichDescription</div>
            <div>
                <ReactQuill
                    value={text}
                    onChange={handleChange}
                    modules={modules}
                />
            </div>

        </>

    )
}

export default RichDescription