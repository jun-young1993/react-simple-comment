import BaseButton from "components/button/base-button";
import { buttonInterface } from "interfaces";
import React from "react";

function BaseCancel({style}:buttonInterface){
	const [hasFocus, setFocus] = React.useState(false);
	return (
		<BaseButton 
			style={{
				backgroundColor: hasFocus ? '#F0F0F0' : '#FFFFFF',
			}}
			onFocus={(focus)=>{
				setFocus(focus)
			}}
		>
			취소	
		</BaseButton>
	)
}
export default BaseCancel