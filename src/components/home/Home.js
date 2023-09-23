import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Home(params) {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate('/create')
    }
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={clickHandler}>Create Note</button>
            <h1>hhhhh</h1>
        </>
    );
}