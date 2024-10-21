import { Layout } from '~/components/Layout'
import { Resizer } from '../Resizer'
import { Blockie } from '../SVGBlockie'
import { generateEthereumAddress } from '~/utils/ethereum'
import { InlineCard } from '../InlineCard'

export const DemoPage = () => {

	const address = generateEthereumAddress()
	const addressBigInt = BigInt(address)

	const addressProps: Parameters<typeof InlineCard>[0] = {
		label: address,
		icon: () => <Blockie address = { addressBigInt } />,
	}

	return (
		<Layout>
			<p style = { { color: '#aaa', marginBottom: '0.5em' } }>Address inline with text</p>
			<Resizer>
				test
			</Resizer>
		</Layout>
	)
}
