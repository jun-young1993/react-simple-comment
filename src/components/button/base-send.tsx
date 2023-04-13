import BaseButton from "./base-button";
import { buttonInterface } from "../interfaces";
import React from "react";

function BaseSend({style}: buttonInterface){
	// const [hasFocus, setFocus] = React.useState(false);
	return (
		<BaseButton
			style={{
				backgroundColor: '#F0F0F0',
				...style
			}}
			// onMouseOver={()=>setFocus(true)}
			// onMouseOut={() => setFocus(false)}
		>
			댓글
		</BaseButton>
	)
}
export default BaseSend