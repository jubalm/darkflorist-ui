import { ComponentChildren } from "preact"

export const Resizer = ({ children }: { children: ComponentChildren }) => {
  return (
    <div style={{ position: 'relative', width: 'fit-content' }}>
      <div class='resizer'>{children}</div>
      <div>drag to resize &uarr;</div>
    </div>
  )
}
