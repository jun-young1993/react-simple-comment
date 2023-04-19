import React from 'react';

import {BasicComment, BaseReply, replyInterface} from './components/index'



function App() {

  const [data] = React.useState([{
    id : 1,
    name : 'name1',
    text : 'test',
    date : new Date(),
    likeCount : 0,
    dislikeCount : 2
  }, {
    id : 2,
    name : 'name2',
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
          onEnter={(text: string | undefined)=>{
            console.log('push Enter',text)
          }}
          onEscape={()=>{
            console.log('push ESC')
          }}
        />
        <div>
           {data.map((data) => 
            <BaseReply  
              onLike={(commentId: replyInterface["id"])=>{
                console.log('onLike',commentId)
              }}
              onDislike={(commentId: replyInterface["id"])=>{
                console.log('onDisLike',commentId)
              }}
              onReplySend={(commentId:replyInterface["id"],text:replyInterface["text"])=>{
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
