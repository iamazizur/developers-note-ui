import React from 'react'
import './Heading.css'

export default function Heading({ onValueChange, intialValue, readOnly = true }) {

    const [inputVal, setInputVal] = React.useState(intialValue)

    const inputValueChangeHandler = (event) => {
        console.log('inputValueChangeHandler called');
        let value = event.target.value;
        setInputVal(value);
        if (onValueChange !== undefined && onValueChange !== null)
            onValueChange(value)
    }

    return (
        <>
            <input className='input-heading'
                type='text'
                placeholder='Your heading goes here...'
                onChange={inputValueChangeHandler}
                value={inputVal}
                disabled={readOnly}
            />
        </>
    )
}
