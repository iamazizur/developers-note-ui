import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { java } from '@codemirror/lang-java';
import './CodeComponent.css'




let x = `
@RequestControler
@RequestMapping(path = "api/v1/notes")
public class NoteController{
    private final NoteRepository noteRepo;

    @Autowired
    public NoteController(NoteRepository noteRepo){
        this.noteRepo = noteRepo;
    }
    @GetMapping("get-all")
    public Iterable<NoteDTO> getAll(){
        
    }`





export default function CodeComponent({ initialCodeValue, onCodeChange }) {



    const onChange = (value) => {

        if (onCodeChange !== undefined && onCodeChange !== null) {
            onCodeChange(value)
        }
    }
    if (initialCodeValue === null || initialCodeValue === undefined) {
        initialCodeValue = x;
    }


    return (
        <>

            <div className="card">
                <div className="card-header bg-dark text-light">
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="mb-0">Code</small>
                        <button className="btn btn-dark">Edit</button>
                    </div>
                </div>
                <div className="card-body p-0">
                    <CodeMirror
                        value={initialCodeValue}
                        // height="400px"
                        className="CodeMirror"
                        fontSize="50px"
                        extensions={[java()]}
                        onChange={onChange}
                        theme={'dark'}
                    />
                </div>
            </div>

        </>
    );
}