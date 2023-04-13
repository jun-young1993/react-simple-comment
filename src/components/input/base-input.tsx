import React from 'react';
import {inputInterface} from "../interfaces"
import styled from 'styled-components';
const CustomDiv = styled.div`
  &:empty:before {
    content: attr(placeholder);
    color: grey;
    display: inline-block;
  };
`
function BaseInput({onInput,placeholder,onEmpty,onFocus}: inputInterface){
    const [hasFocus, setFocus] = React.useState(false)
    const [text, setText] = React.useState('')
    const [isEmpty, setEmpty] = React.useState(true)
    React.useEffect(()=>{
        console.log('use Effect text',text)
        
        if(text === '' && !isEmpty) setEmpty(true)
        if(text !== '' && isEmpty) setEmpty(false)
        
        onInput && onInput(text)
    },[text,onInput,isEmpty])
    React.useEffect(()=>{
        onEmpty && onEmpty(isEmpty)
    },[onEmpty,isEmpty])
    React.useEffect(()=>{
        onFocus && onFocus(hasFocus)
    },[hasFocus,onFocus])
    return (


        <CustomDiv
            contentEditable
            placeholder={placeholder}
            style={{
                outline: "none",
                borderBottom: hasFocus ? "3px solid black" : "1px solid gray",
                // borderImageSlice: 1,
                transitionDuration:"0.5s",
                marginBottom: "10px"
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onInput={e => setText(e.currentTarget.textContent || '')}
        >
        </CustomDiv>
        
    )
}

export default BaseInput