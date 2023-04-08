import React from 'react';
import {inputInterface} from "interfaces"

function BaseInput({onInput}: inputInterface){
    const [hasFocus, setFocus] = React.useState(false);

    return <div
        contentEditable
        style={{
            outline: "none",
            borderBottom: hasFocus ? "3px solid green" : "1px solid gray",
            // borderImageSlice: 1,
            transitionDuration:"0.5s"
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onInput={e =>
            onInput && onInput(e.currentTarget.textContent || '')
        }
    >

    </div>
}

export default BaseInput