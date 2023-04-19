
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