import React from "react";
import CodeComponent from "./CodeComponent";
import Heading from "./Heading";
import RichDescription from "../descriptions/RichDescription";

const initialCodeValue = `
    public class Main{
        public static void main(String[] args){
            System.out.println("Hello World!");
        }
    }
    `
export default function SubNotes(params) {


    const onDescriptionChanged = (value) => {
    }

    return (
        <>

            <div className="container d-flex flex-column flex-gap-10">
                <Heading />
                <RichDescription
                    onDescriptionChanged={onDescriptionChanged}
                />
                <CodeComponent
                    initialCodeValue={initialCodeValue}
                />
            </div>


        </>
    );
}