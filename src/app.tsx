import { SmallAddressDemo } from '~/components/InlineCard/demo'
import { HashRouter, Route } from '~/HashRouter'
import { DemoPage } from '~/components/BigAddress/demo'
import './app.css'

export function App() {
	return (
		<HashRouter>
			<Route path = '/'>
				<SmallAddressDemo />
			</Route>
			<Route path = 'foo'>
				<DemoPage />
			</Route>
		</HashRouter>
	)
}
