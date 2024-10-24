import { generateEthereumAddress } from '~/utils/ethereum'
import { Layout } from '~/components/Layout'
import { Resizer } from '~/components/Resizer'
import { Blockie } from '~/components/SVGBlockie'
import { MultilineCard } from '~/components/MultilineCard'

export const DemoPage = () => {

	const address = generateEthereumAddress()
	const addressBigInt = BigInt(address)

	const addressProps: Parameters<typeof MultilineCard>[0] = {
		label: address,
		icon: () => <Blockie address = { addressBigInt } />,
	}

	return (
		<Layout>
			<p style = { { color: '#aaa', marginBottom: '0.5em' } }>Address inline with text</p>
			<Resizer>
				<MultilineCard { ...addressProps } />
			</Resizer>
		</Layout>
	)
}
