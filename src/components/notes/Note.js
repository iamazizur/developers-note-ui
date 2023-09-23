import React from 'react'
import './Note.css'
import CodeComponent from '../subnotes/CodeComponent';


export default function Note(params) {
    return (
        <>
            <div className='card note-wrapper text-start w-75 rounded-2 p-0'>
                <div className='card-header bg-dark text-light m-0'>
                    <h1>Spring Boot Foreign Key</h1>
                </div>
                <div className='card-body'>
                    <p>In Spring Boot, you can create a
                        foreign key relationship between two
                        entities using JPA (Java Persistence API)
                        to represent the database schema.
                        A foreign key is a field in one table that is used to establish
                        a link between two tables, where the foreign key column
                        in one table references the primary key column in
                        another table. Here's how you can create a
                        foreign key relationship in Spring Boot:</p>
                    <CodeComponent />

                    <div className='container mt-4'>
                        <h3>1. Define Your Entities: </h3>
                        <small>Let's assume you have two entities: 
                            Author and Book, and you want to create a 
                            foreign key relationship between them. 
                            An Author can have multiple books, 
                            so you'll add a foreign key in the Book entity 
                            referencing the Author entity's primary key.</small>
                        <CodeComponent />
                    </div>




                </div>

                <div className="d-grid gap-2 mt-2">
                    <button className="btn btn-dark" type="button">Add Section</button>
                </div>
            </div>





        </>
    );
}