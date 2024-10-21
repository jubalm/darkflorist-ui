import { ComponentChildren } from "preact";

export const Layout = ({ children }: { children: ComponentChildren }) => {
  return (
    <div class = 'demo'>{ children}</div>
  )
}
