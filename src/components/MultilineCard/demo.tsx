import { generateName } from '~/utils/names'
import { generateEthereumAddress } from '~/utils/ethereum'
import { Layout } from '~/components/Layout'
import { Resizer } from '~/components/Resizer'
import { Blockie } from '~/components/SVGBlockie'
import { MultilineCard } from '~/components/MultilineCard'
import { EditIcon } from '~/components/Icons'

export const DemoPage = () => {

	const address = generateEthereumAddress()
	const addressBigInt = BigInt(address)

	return (
		<Layout>
			<p style = { { color: '#aaa', marginBottom: '0.5em' } }>Known address</p>
			<Resizer>
				<MultilineCard
					label = { { 
						displayText: generateName(),
						action: { label: 'Edit', icon: () => <EditIcon />, onClick: () => alert('Editing...') }
					} }
					note = { {
						displayText: address,
						action: 'clipboard-copy',
					} }
					icon = { { icon: () => <Blockie address = { addressBigInt } />, action: 'clipboard-copy', copyValue: address } }
				/>
			</Resizer>

			<p style = { { color: '#aaa', marginBottom: '0.5em', marginTop: '2rem' } }>Unknown address</p>
			<Resizer>
				<MultilineCard 
					label = { { displayText: address, action: 'clipboard-copy', copyValue: address } }
					note = { { displayText: '(Not in addressbook)', action: { label: 'Edit', icon: () => <EditIcon />, onClick: () => { alert('Adding...') } } } } 
					icon = { { icon: () => <Blockie address = { addressBigInt } />, action: 'clipboard-copy', copyValue: address } } 
				/>
			</Resizer>

			<p style = { { color: '#aaa', marginBottom: '0.5em', marginTop: '2rem' } }>No action</p>
			<Resizer>
				<MultilineCard 
					label = { { displayText: 'known address' } }
					note = { { displayText: address } } 
					icon = { { icon: () => <Blockie address = { addressBigInt } /> } } 
				/>
			</Resizer>

			<p style = { { color: '#aaa', marginBottom: '0.5em', marginTop: '2rem' } }>In Button</p>
			<Resizer>
				<button style = {{ font: 'inherit', padding: '5px 6px', border: 0, cursor: 'pointer' }}>
					<MultilineCard 
						label = { { displayText: 'known address' } }
						note = { { displayText: address } } 
						icon = { { icon: () => <Blockie address = { addressBigInt } /> } } 
					/>
				</button>
			</Resizer>
		</Layout>
	)
}
