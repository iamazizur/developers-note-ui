import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { java } from '@codemirror/lang-java';


function ReadOnlyCode({ codeValue }) {

    if (codeValue === undefined || codeValue === null)
        return;
    const style = {
        pointerEvents : 'none'
    }

    return (
        <>
            <div className="card-body p-0" style={style}>
                <CodeMirror
                    value={codeValue}
                    className="CodeMirror"
                    extensions={[java()]}
                    theme={'dark'}
                    editable={false}
                    readOnly={true}
                />
            </div>

        </>
    )
}

export default ReadOnlyCode