import React from 'react'
import './Heading.css'

export default function Heading({ onValueChange }) {

    const inputValueChangeHandler = (event) => {
        let value = event.target.value;
        if (onValueChange !== undefined && onValueChange !== null)
            onValueChange(value)
    }

    return (
        <>
            <input className='input-heading'
                type='text'
                placeholder='Your heading goes here...'
                onChange={inputValueChangeHandler}
            />
        </>
    )
}
