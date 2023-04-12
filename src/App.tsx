import React from 'react';

import {BasicComment, BaseReply, replyInterface} from 'react-simple-comment'



function App() {

  const [data] = React.useState([{
    id : 1,
    name : 'jun',
    text : 'test',
    date : new Date(),
    likeCount : 0,
    dislikeCount : 2
  }, {
    id : 2,
    name : 'jun',
    text : 'test',
    date : new Date(),
    likeCount : 10 
  }] as replyInterface[])
  return (
    <div>
        <span>댓글 {data.length}개</span>
        <BasicComment 
          placeholder="댓글을 입력해주세요..."
          onSend={(text: string | undefined)=>{
            console.log('current text',text)
          }}
        />
        <div>
           {data.map((data) => 
            <BaseReply  
              onLike={(commentId)=>{
                console.log('onLike',commentId)
              }}
              onDislike={(commentId)=>{
                console.log('onDisLike',commentId)
              }}
              onReplySend={(commentId,text)=>{
                console.log('onReplySend',commentId,text)
              }}
              {...data}
            />
            )
          }

        </div>
    </div>

  );
}

export default App;
