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





export default function CodeComponent(params) {





    const onValueChange = (value) => {
        console.log(value);
    }
    let codeValue = x;

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
                        value={codeValue}
                        height="400px"
                        className="CodeMirror"
                        fontSize="50px"
                        extensions={[java()]}
                        onChange={onValueChange}
                        theme={'dark'}
                    />
                </div>
            </div>

        </>
    );
}