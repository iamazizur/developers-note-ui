import React from "react";
import CodeComponent from "./CodeComponent";
import Heading from "./Heading";
import RichDescription from "../descriptions/RichDescription";
// import SubnoteDTO from "../../models/SubnoteDTO.js";

const initialCodeValue = `
    public class Main{
        public static void main(String[] args){
            System.out.println("Hello World!");
        }
    }
    `


export default function SubNotes({ onSubNoteUpdate,element }) {
    const [subnoteDto, setSubnoteDto] = React.useState(element)

    const updateSubnote = () => {
        setSubnoteDto(subnoteDto);
        
        if (onSubNoteUpdate !== undefined && onSubNoteUpdate !== null)
            onSubNoteUpdate(subnoteDto)

    }

    const onDescriptionChange = (value) => {
        subnoteDto.description = value;
        updateSubnote();
        return;
    }

    const onCodeChange = (value) => {
        subnoteDto.code = value;
        updateSubnote();
        return;
    }

    const onHeadingChange = (value) => {
        subnoteDto.heading = value;
        updateSubnote();
        return;
    }

    return (
        <>

            <div className="container d-flex flex-column flex-gap-10 mt-4">
                <Heading
                    onValueChange={onHeadingChange}
                />
                <RichDescription
                    onDescriptionChanged={onDescriptionChange}
                />
                <CodeComponent
                    initialCodeValue={initialCodeValue}
                    onCodeChange={onCodeChange}
                />
            </div>


        </>
    );
}