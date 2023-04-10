import React from 'react';
import BaseInput from "./components/input/base-input";
import BaseSend from 'components/button/base-send';
import BaseCancel from 'components/button/base-cancel';
import BaseButton from 'components/button/base-button';
import BaseComment from 'components/comment/base-comment';


function App() {
  const [isEmpty, setEmpty] = React.useState(true)
  const [hasFocus, setFocus] = React.useState(false)
  const [text, setText] = React.useState('')
  const [data] = React.useState([{
    text : 'test'
  }])
  return (
    <div>
        <BaseInput
            placeholder='댓글을 입력하세요..'
            onInput={(text)=>{
              setText(text)
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
              <BaseCancel  />
              <BaseButton
                onClick={()=>{
                  console.log('current text',text)
                }}
                style={isEmpty
                  ? {
                    backgroundColor: '#F0F0F0'
                  }
                  : {
                    backgroundColor: '#065fd4',
                    color: 'white'
                }} 
              >
                댓글
              </BaseButton>
            </>
          }
        </div>
        <div>
           {/* data.map((commentInfo) => <BaseComment ...commentInfo /> */}
           
          
        </div>
    </div>

  );
}

export default App;
