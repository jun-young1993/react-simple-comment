

export interface inputInterface {
    onInput ?: (currentText:string) => void
    placeholder ?: string
    onEmpty ?: (isEmpty:boolean) => void
    onFocus ?: (hasFocus:boolean) => void
}

export interface buttonInterface {
    onFocus ?: (hasFocus:boolean) => void
    children ?: React.ReactNode
    style ?: React.CSSProperties
}