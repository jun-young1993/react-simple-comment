import BaseButton from "components/button/base-button";
import FocusBackgroundColorChangeButton from "components/button/focus-background-change-button";
import IconDislike from "components/icons/IconDislike";
import IconLike from "components/icons/IconLike";
import BasicComment from "components/lib/basic-comment";
import { replyInterface } from "interfaces";
import React from "react";
function timeForToday(value:Date) {
        const today = new Date();
        const timeValue = new Date(value);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금전';
        if (betweenTime < 60) {
            return `${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay}일전`;
        }

        return `${Math.floor(betweenTimeDay / 365)}년전`;
 }
function BaseReply({id,text,name,date,likeCount, dislikeCount, onLike, onDislike, onReplySend}:replyInterface) : JSX.Element
{	const [clickedReply, setClickedReply] = React.useState(false)
	const dateStr:string = date ? timeForToday(date) : ''
	return (<>
		<div style={{marginBottom:5}}><span style={{fontSize:"small"}}>{name}</span> <span style={{color:"gray", fontSize:"small"}}>{dateStr}</span></div>
		<div style={{fontSize:"large",marginBottom:5}}>{text || ''}</div>
		<div>
			{onLike && <><span><FocusBackgroundColorChangeButton onClick={()=>onLike(id)}><IconLike /></FocusBackgroundColorChangeButton>{likeCount || ''} </span>&nbsp;</>}
			{onDislike && <><span><FocusBackgroundColorChangeButton onClick={()=>onDislike(id)}><IconDislike /></FocusBackgroundColorChangeButton>{dislikeCount || ''}</span>&nbsp;&nbsp;&nbsp;</>}
			<FocusBackgroundColorChangeButton
				onClick={() => setClickedReply(!clickedReply)}
			>
				답글
			</FocusBackgroundColorChangeButton>
		</div>
		<div>
			{clickedReply ?  <BasicComment 
						keepButton
						onCancel={()=>setClickedReply(false)}
						onSend={(text)=>{
							onReplySend && onReplySend(id,text)
						}}
					/> : <></>}
		</div>
	</>)
}

export default BaseReply