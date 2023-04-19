import BaseButton from "./base-button";
import { buttonInterface } from "../interfaces";
import React from "react";

interface focusBackgroundColorChangeButtonInterface extends buttonInterface{
	defaultColor : string
	focusColor : string
}
function FocusBackgroundColorChangeButton({children,defaultColor,focusColor,onClick}:focusBackgroundColorChangeButtonInterface){
	
	const [hasFocus, setFocus] = React.useState(false);
	return (
		<BaseButton 
			style={{
				backgroundColor: hasFocus ?  focusColor : defaultColor,
			}}
			onFocus={(focus)=>{
				setFocus(focus)
			}}
			onClick={() => {
				onClick && onClick()
			}}
		>
			{children}
		</BaseButton>
	)
}
FocusBackgroundColorChangeButton.defaultProps = {
	defaultColor : '#FFFFFF',
	focusColor : '#F0F0F0',
}
export default FocusBackgroundColorChangeButton