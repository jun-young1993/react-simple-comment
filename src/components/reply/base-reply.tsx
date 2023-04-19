import FocusBackgroundColorChangeButton from "../button/focus-background-change-button";
import IconDislike from "../icons/IconDislike";
import IconLike from "../icons/IconLike";
import BasicComment from "../lib/basic-comment";
import { replyInterface } from "../interfaces";
import React from "react";
function timeForToday(value:Date) {
        const today = new Date();
        const timeValue = new Date(value);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return 'a minute ago';
        if (betweenTime < 60) {
            return `${betweenTime} minute ago`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour} hour ago`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay} year ago`;
        }

        return `${Math.floor(betweenTimeDay / 365)} year ago`;
 }
function BaseReply({id,text,name,date,likeCount, dislikeCount, onLike, onDislike, onReplySend, isReply}:replyInterface) : JSX.Element
{	const [clickedReply, setClickedReply] = React.useState(false)
	const dateStr:string = date ? timeForToday(date) : ''
	return (<>
		<div style={{marginBottom:5}}><span style={{fontSize:"small"}}>{name}</span> <span style={{color:"gray", fontSize:"small"}}>{dateStr}</span></div>
		<div style={{fontSize:"large",marginBottom:5}}>{text || ''}</div>
		<div>
			{onLike && <><span><FocusBackgroundColorChangeButton onClick={()=>onLike(id)}><IconLike /></FocusBackgroundColorChangeButton>{likeCount || ''} </span>&nbsp;</>}
			{onDislike && <><span><FocusBackgroundColorChangeButton onClick={()=>onDislike(id)}><IconDislike /></FocusBackgroundColorChangeButton>{dislikeCount || ''}</span>&nbsp;&nbsp;&nbsp;</>}
			{isReply && <FocusBackgroundColorChangeButton
				onClick={() => setClickedReply(!clickedReply)}
			>
				reply
			</FocusBackgroundColorChangeButton>}
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
BaseReply.defaultProps = {
	isReply : true
}
export default BaseReply