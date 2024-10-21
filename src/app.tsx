import { HashRouter, Route } from '~/HashRouter'
import { Home } from '~/components/Home'
import { DemoPage as SmallAddressDemo } from '~/components/InlineCard/demo'
import { DemoPage as BigAddressDemo } from '~/components/BigAddress/demo'
import './app.css'

export function App() {
	return (
		<HashRouter>
			<Route path = '/'>
				<Home />
			</Route>
			<Route path = 'demo:smalladdress'>
				<SmallAddressDemo />
			</Route>
			<Route path = 'demo:bigaddress'>
				<BigAddressDemo />
			</Route>
		</HashRouter>
	)
}
