import React from 'react'
import ReadOnlyHeading from './ReadOnlyHeading'
import ReadOnlyDescription from './ReadOnlyDescription'
import ReadOnlyCode from './ReadOnlyCode'

function ReadOnlySubnotes({ subnoteDTO }) {
    const className = 'container d-flex flex-column flex-gap-10 mt-4 bg-light';
    return (
        <>
            <div className={className}>
                <ReadOnlyHeading
                    heading={subnoteDTO.heading}
                />
                <ReadOnlyDescription description={subnoteDTO.description} />
                <ReadOnlyCode codeValue={subnoteDTO.code} />
            </div>
        </>
    )
}

export default ReadOnlySubnotes