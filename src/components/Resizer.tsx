import { ComponentChildren, JSX } from "preact"

type ResizerProps = {
  children: ComponentChildren 
  style?: JSX.CSSProperties
}
export const Resizer = ({ children, style }: ResizerProps) => {
  return (
    <div style={{ position: 'relative', width: 'fit-content', ...style }}>
      <div class='resizer'>{children}</div>
      <div>drag to resize &uarr;</div>
    </div>
  )
}
