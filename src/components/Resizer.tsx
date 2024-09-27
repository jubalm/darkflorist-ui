import { ComponentChildren } from "preact"

export const Resizer = ({ children }: { children: ComponentChildren }) => {
  return (
    <div style={{ position: 'relative', width: 'fit-content' }}>
      <div class='resizer'>{children}</div>
      <div style={{ fontSize: '0.8em', position: 'absolute', bottom: '-1.5em', right: 0, color: 'orange' }}>drag to resize &uarr;</div>
    </div>
  )
}
