import React from 'react';
import BaseInput from "./components/input/base-input";
import BaseSend from 'components/send/base-send';
import BaseCancel from 'components/cancel/base-cancel';


function App() {
  const [isEmpty, setEmpty] = React.useState(true)
  const [hasFocus, setFocus] = React.useState(false)
  return (
    <div>
        <BaseInput
            placeholder='댓글을 입력하세요..'
            onInput={(text)=>{
                console.log('currentText',text)
            }}
            onEmpty={(isEmpty)=>{
              setEmpty(isEmpty)
            }}
            onFocus={(hasFocus)=>{
              setFocus(hasFocus)
            }}
        />
        <div
          style={{
            textAlign: "right"
          }}
        >
          {(hasFocus || !isEmpty) &&  
            <>
              <BaseCancel />
              <BaseSend
                style={isEmpty
                  ? {}
                  : {
                    backgroundColor: '#065fd4',
                    color: 'white'
                }} 
              />
            </>
          }
        </div>
    </div>
  );
}

export default App;
