import React from 'react'
import './Title.css'
export default function Title() {
    const [value, setValue] = React.useState('')

    const onChangeHandler = (event) => {

        setValue(prev => {
            let curr = event.target.value;
            return curr;
        })
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
