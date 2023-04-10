import React from 'react';
import BaseInput from "./components/input/base-input";
import BaseSend from 'components/send/base-send';
import BaseCancel from 'components/cancel/base-cancel';


function App() {
  const [isEmpty, setEmpty] = React.useState(true)
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
        />
        <div
          style={{
            textAlign: "right"
          }}
        >
          <BaseCancel />
          <BaseSend 
            style={
            isEmpty 
            ? {} 
            : {
              backgroundColor : 'blue',
              color: 'white'
            }}
          />
        </div>
    </div>
  );
}

export default App;
