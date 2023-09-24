import React from "react";
import Title from "../Title";
import RichDescription from "../descriptions/RichDescription";
import CodeComponent from "../subnotes/CodeComponent";


export default function CreateNote(params) {


    const initialCodeValue = `
    public class Main{
        public static void main(String[] args){
            System.out.println("Hello World!");
        }
    }
    `



    return (
        <>

            <div className="card note-wrapper text-start w-75 rounded-2 p-0">

                <div className='card-header bg-dark text-light m-0'>
                    <Title />
                </div>
                <div className="card-body">
                    <RichDescription />

                    <div className="mt-2">
                        <CodeComponent
                            initialCodeValue={initialCodeValue}
                        />
                    </div>

                </div>

                <button type="button" className="btn btn-primary" >Inside</button>

            </div>

        </>
    )
}