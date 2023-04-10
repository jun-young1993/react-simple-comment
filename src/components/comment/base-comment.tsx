import { commentInterface } from "interfaces";

function BaseComment({text}:commentInterface){
	return text || ''
}

export default BaseComment