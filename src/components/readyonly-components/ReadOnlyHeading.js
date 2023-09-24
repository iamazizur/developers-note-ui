import React from 'react'

function ReadOnlyHeading({ heading }) {
    if (heading === undefined || heading === null)
        return;
    return (
        <>
            {heading}
        </>
    )
}

export default ReadOnlyHeading