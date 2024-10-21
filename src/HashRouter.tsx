import { isValidElement, toChildArray, VNode } from 'preact'
import { useEffect, useState } from 'preact/hooks'


const HashRouter = ({ children }: { children: HashRoute | HashRoute[] }) => {
    const [currentPath, setCurrentPath] = useState<string | undefined>(undefined)

    const updateHashState = () => setCurrentPath(window.location.hash.slice(1) || '/')

    useEffect(() => {
        updateHashState()
        window.addEventListener('hashchange', updateHashState)
        return () => window.removeEventListener('hashchange', updateHashState)
    }, [])

    const isHashRoute = (child: VNode): child is HashRoute => child.type === Route
    const routeChildren = toChildArray(children).filter(isValidElement).filter(isHashRoute)
    const matchedRoutes = routeChildren.filter(child => child.props.path === currentPath)

    return <>{ matchedRoutes }</>
}

type RouteProps = VNode['props'] & { 
    path: string 
}

interface HashRoute extends VNode {
    props: RouteProps
}

const Route = ({ children }: HashRoute['props']) => <>{ children }</>

export { HashRouter, Route }
