import { ComponentChildren } from "preact";

export const Layout = ({ children }: { children: ComponentChildren }) => {
  return (
    <div class = 'demo'>
      <BackButton />
      { children }
    </div>
  )
}

const BackButton = () => {
  if (!window.location.hash) return null
  return <a class='btn btn--outline' style={{ position: 'absolute', top: 10, left: 10 }} href='#'>&larr; Back</a>
}
