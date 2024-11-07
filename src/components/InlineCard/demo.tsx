import { generateEthereumAddress } from '~/utils/ethereum'
import { Layout } from '~/components/Layout'
import { Resizer } from '~/components/Resizer'
import { Blockie } from '~/components/SVGBlockie'
import { InlineCard } from '~/components/InlineCard'

export const DemoPage = () => {

	const address = generateEthereumAddress()
	const addressBigInt = BigInt(address)

	const addressProps: Parameters<typeof InlineCard>[0] = {
		label: address,
		icon: () => <Blockie address = { addressBigInt } />,
	}

	return (
		<Layout>
			<p style = { { color: '#aaa', marginBottom: '0.5em', marginTop: '2em' } }>Default View</p>
			<Resizer style = { { maxWidth: '50ch' } }>
				<p>
					<InlineCard { ...addressProps } onEditClicked = { () => confirm('Save changes?') } />
				</p>
			</Resizer>

			<p style = { { color: '#aaa', marginBottom: '0.5em', marginTop: '2em' } }>Address with warning</p>
			<Resizer style = { { maxWidth: '50ch' } }>
				<p>
					<InlineCard { ...addressProps } warningMessage = 'This is an untrusted address!' />
				</p>
			</Resizer>

			<p style = { { color: '#aaa', marginBottom: '0.5em', marginTop: '2em' } }>Don't spell-out buttons</p>
			<Resizer>
				<p>
					<InlineCard label = 'lll' icon = { addressProps.icon } copyValue = '0x111' onEditClicked = { () => confirm('Save?') } noExandButtons style = { { '--min-text-width': '3ch' } } />{ ' ' }
					<InlineCard label = 'USDT' icon = { addressProps.icon } copyValue = '0x111' onEditClicked = { () => confirm('Save?') } noExandButtons style = { { '--min-text-width': '3ch' } } />{ ' ' }
				</p>
			</Resizer>

			<p style = { { color: '#aaa', marginBottom: '0.5em', marginTop: '2em' } }>Address inline with text</p>
			<Resizer>
				<p>Example address inline with text <InlineCard { ...addressProps } /> within a paragraph.</p>
			</Resizer>

			<p style = { { color: '#aaa', marginBottom: '0.5em', marginTop: '2em' } }>Example with constrained widths</p>
			<Resizer>
				<p>
					<InlineCard label = 'ETH' icon = { addressProps.icon } copyValue = '0x000' />{ ' ' }
					<InlineCard label = 'USDT' icon = { addressProps.icon } copyValue = '0x123' onEditClicked = { () => confirm('Save?') } />{ ' ' }
				</p>
			</Resizer>

			<p style = { { color: '#aaa', marginBottom: '0.5em', marginTop: '2em' } }>Vertical spacing when wrapped</p>
			<Resizer style = { { maxWidth: '50ch' } }>
				<p>
					<InlineCard { ...addressProps } onEditClicked = { () => confirm('Save?') } />
					<InlineCard { ...addressProps } />
					<InlineCard { ...addressProps } />
				</p>
			</Resizer>
		</Layout>
	)
}
