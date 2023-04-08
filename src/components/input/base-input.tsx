import React from 'react';
import {inputInterface} from "interfaces"

function BaseInput({onInput}: inputInterface){
    const [hasFocus, setFocus] = React.useState(false);

    return <div
        contentEditable
        style={{
            outline: "none",
            borderBottom: hasFocus ? "3px solid red" : "1px solid gray",
            // borderImage: hasFocus ? "linear-gradient(to right, #d9a7c7, #fffcdc)" : undefined,
            // borderImageSlice: 1,
            // transitionDuration:"0.5s"
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