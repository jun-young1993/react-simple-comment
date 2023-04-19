# react-simple-comment

## Example View

![Untitled](https://file.notion.so/f/s/1e37348e-9b90-4712-aea8-806923764fec/Untitled.png?id=37625d3e-9974-4c35-9341-28034b071459&table=block&spaceId=45e5d7de-c052-4677-be01-f6ae18382d8a&expirationTimestamp=1681459310252&signature=-8Rs7QgQ7w_HmeVuswbJOsuS8jrZfoYA4CSE38Mmk8I&downloadName=Untitled.png)

## ****Installation****

---

**NPM**

```bash
$ npm i react-simple-comment
```

## Usage

```jsx

import {BasicComment,BaseReply, replyInterface} from 'react-simple-comment'

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
          onSend={(text)=>{
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
```

## Props
```js

export interface inputInterface {
    onInput ?: (currentText:string) => void
    placeholder ?: string
    onEmpty ?: (isEmpty:boolean) => void
    onFocus ?: (hasFocus:boolean) => void
    onKeyUp ?: (e : React.KeyboardEvent<HTMLDivElement>) => void
}

export interface buttonInterface {
    onFocus ?: (hasFocus:boolean) => void
    onClick ?: () => void
    children ?: React.ReactNode
    style ?: React.CSSProperties
}
export type commentId = number | string
export interface BaseComment {
	placeholder ?: string
	onSend ?: (text?:string) => void
	onCancel ?: () => void
    onEnter ?: (text?:string) => void
    onEscape ?: () => void
	keepButton : boolean
}
export interface replyInterface {
    id ?: commentId
    name ?: string
    text ?: string
    date ?: Date
    likeCount ?: number
    dislikeCount ?: number
    isReply :boolean
    onLike ?: (commentId ?: commentId) => void
    onDislike ?: (commentId ?: commentId) => void
    onReplySend ?: (commentId?:commentId , text?:string) => void
}

```
---

…

## 동기

nextjs로 notion블로그화 진행중 댓글기능이 필요한데 간단한 댓글 라이브러리가 없었고 하나 만들어두면 다음 진행 프로젝트에도 재사용이 가능할 것 같다고 생각해서 시작한다

## 기능

### v1.0.1

- 댓글입력 기능
- 전송 기능

## **to be added**

1. 댓글정렬 기능
2. 댓글검색 기능

## 개발환경

- nodejs 19.0.3
-