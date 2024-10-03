import './app.css'
import { AddressCard } from './components/AddressCard'
import { Resizer } from './components/Resizer'
import { Blockie } from './components/SVGBlockie'
import { generateEthereumAddress } from './utils/ethereum'


export function App() {
  const address = generateEthereumAddress()
  const addressBigInt = BigInt(address)

  const addressProps:Parameters<typeof AddressCard>[0] = { 
    address: addressBigInt,
    icon: () => <Blockie address={addressBigInt} />
   }

  return (
    <div>
      <p style={{ color: '#aaa', marginBottom: '0.5em' }}>Address inline with text</p>
      <Resizer>
        <p>Example address inline with text <AddressCard {...addressProps} onClick={alert} /> within a paragraph.</p>
      </Resizer>

      <p style={{ color: '#aaa', marginBottom: '0.5em', marginTop: '2em' }}>Example with constrained widths</p>
      <Resizer>
        <p>
          <AddressCard {...addressProps} onClick={alert} style={{ maxWidth: '20ch' }} />{ " " }
          is sending to {" "}
          <AddressCard {...addressProps} onClick={alert} style={{ maxWidth: '10ch' }} />{ " " }
          via{" "}
          <AddressCard {...addressProps} onClick={alert} style={{ maxWidth: '5ch' }} />
        </p>
      </Resizer>
    </div>
  )
}
