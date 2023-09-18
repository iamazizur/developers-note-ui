import React from "react";
import CodeComponent from "./CodeComponent";


export default function SubNotes(params) {
    return (
        <>

            <div className="card">
                <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Code</p>
                        <button className="btn btn-primary">Edit</button>
                    </div>
                </div>
                <div className="card-body p-0">
                    <CodeComponent />
                </div>
            </div>

        </>
    );
}