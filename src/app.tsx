import './app.css'
import { InlineCard, InlineCardSelectValue } from './components/InlineCard'
import { Resizer } from './components/Resizer'
import { Blockie } from './components/SVGBlockie'
import { generateEthereumAddress } from './utils/ethereum'


export function App() {
  const address = generateEthereumAddress()
  const addressBigInt = BigInt(address)

  const addressProps:Parameters<typeof InlineCard>[0] = { 
    label: address,
    icon: () => <Blockie address={addressBigInt} />,
    onSelect: console.log
  }


  const handleAddressClick = (returnValue: InlineCardSelectValue) => {
    if (returnValue.action === 'copy') {
      alert(`Copied ${returnValue.value} to clipboard.`)
      return
    }

    confirm('Are you sure you want to update?')
  }


  return (
    <div>

      <p style={{ color: '#aaa', marginBottom: '0.5em' }}>Address inline with text</p>
      <Resizer>
        <p>Example address inline with text <InlineCard {...addressProps} onSelect={handleAddressClick} /> within a paragraph.</p>
      </Resizer>

      <p style={{ color: '#aaa', marginBottom: '0.5em', marginTop: '2em' }}>Example with constrained widths</p>
      <Resizer>
        <p>
          <InlineCard label='lll' icon={addressProps.icon} onSelect={handleAddressClick} />{ " " }
          <InlineCard label='ETH' icon={addressProps.icon} onSelect={handleAddressClick} />{ " " }
          <InlineCard label='USDT' icon={addressProps.icon} onSelect={handleAddressClick} />{ " " }
        </p>
      </Resizer>

      <p style={{ color: '#aaa', marginBottom: '0.5em', marginTop: '2em' }}>Vertical spacing when wrapped</p>
      <Resizer style={{ maxWidth: '50ch' }}>
        <p>
          <InlineCard {...addressProps} onSelect={handleAddressClick} />
          <InlineCard {...addressProps} onSelect={handleAddressClick} />
          <InlineCard {...addressProps} onSelect={handleAddressClick} />
        </p>
      </Resizer>

      <p style={{ color: 'orange', fontWeight: 'bold', marginTop: '2em' }}>Extra</p>
      <p style={{ color: '#aaa', marginBottom: '0.5em' }}><span style={{ color: 'orange' }}>+</span> Copy and Edit buttons are tab accessible.</p>
    </div>
  )
}
