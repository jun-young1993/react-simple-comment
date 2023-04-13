import React from "react";
import {buttonInterface} from "../interfaces"

function BaseButton({onFocus,style,children,onClick}: buttonInterface){
	const [hasFocus, setFocus] = React.useState(false);
	React.useEffect(()=>{
		onFocus && onFocus(hasFocus)
	},[hasFocus, onFocus])
	return (
		<button 
			style={{
				fontSize: "20px",
				border:"none",
				borderRadius: "20px",
				marginRight: "10px",
				cursor:'pointer',
				...style
			}}
			onMouseOver={()=>setFocus(true)}
			onMouseOut={() => setFocus(false)}
			onClick={() => onClick && onClick()}
		>
			{children}
		</button>
	)
}
export default BaseButton