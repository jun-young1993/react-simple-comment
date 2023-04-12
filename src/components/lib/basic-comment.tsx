import React from "react"
import BaseInput from "components/input/base-input"
import FocusBackgroundColorChangeButton from "components/button/focus-background-change-button"
import BaseButton from "components/button/base-button"
import { BaseComment } from "interfaces"

function BasicComment({placeholder,onSend,onCancel, keepButton}:BaseComment){
	const [isEmpty, setEmpty] = React.useState(true)
	const [hasFocus, setFocus] = React.useState(false)
	const [text, setText] = React.useState('')
	const [uniqId, setUniqId] = React.useState(1)
	const onDefaultCancel = () => {
		setUniqId(uniqId+1)
	}

	console.log(hasFocus,isEmpty,keepButton,uniqId)
	return (
		<>
			<BaseInput
				key={uniqId}
				placeholder={placeholder}
				onInput={(text)=>{
					setText(text)
				}}
				onEmpty={(isEmpty)=>{
					console.log('isEmpty',isEmpty)
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
			{(hasFocus || !isEmpty || keepButton) &&  
			<>
				<FocusBackgroundColorChangeButton
					onClick={onCancel || onDefaultCancel}
				>
					취소
				</FocusBackgroundColorChangeButton>
				<BaseButton
					onClick={()=>onSend && onSend(text)}
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
		</>
	)
}
BasicComment.defaultProps = {
	keepButton : false
}

export default BasicComment