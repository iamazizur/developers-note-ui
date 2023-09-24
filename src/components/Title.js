import React from 'react'
import './Title.css'
export default function Title({ onChangeTitle }) {
    const [value, setValue] = React.useState('')



    const onChangeHandler = (event) => {
        let newValue = event.target.value;
        setValue(prev => {

            return newValue;
        })
        if (onChangeTitle !== null || onChangeTitle !== undefined)
            onChangeTitle(newValue);

    }

    return (
        <>
            <input
                type='text'
                placeholder='Give your note a title...'
                onChange={onChangeHandler}
                value={value}
            />
        </>
    )
}
