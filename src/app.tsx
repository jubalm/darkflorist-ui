import './app.css'
import { AddressCard } from './components/AddressCard'
import { Resizer } from './components/Resizer'
import { generateEthereumAddress } from './utils/ethereum'


export function App() {
  const address = generateEthereumAddress()
  const addressBigInt = BigInt(address)

  return (
    <div>
      <p style={{ color: '#aaa', marginBottom: '0.5em' }}>Address inline with text</p>
      <Resizer>
        <p>Example address inline with text <AddressCard address={addressBigInt}><AddressCard.Action onClick={() => alert('Copied!')}>Copy</AddressCard.Action></AddressCard> within a paragraph.</p>
      </Resizer>

      <p style={{ color: '#aaa', marginBottom: '0.5em', marginTop: '2em' }}>Address can have multiple actions</p>
      <Resizer>
        <p>
          <AddressCard address={addressBigInt}>
            <AddressCard.Action onClick={() => alert('Copied!')}>Copy</AddressCard.Action>
            <AddressCard.Action onClick={() => alert('Edit Window')}>Edit</AddressCard.Action>
          </AddressCard>
        </p>
      </Resizer>

      <p style={{ color: '#aaa', marginBottom: '0.5em', marginTop: '2em' }}>Address width can be constrained with <pre>max-width</pre></p>
      <Resizer>
        <p>
          <AddressCard address={addressBigInt} style={{ '--image-size': '1em', maxWidth: '200px' }}>
            <AddressCard.Action onClick={() => alert('Copied!')}>Copy</AddressCard.Action>
          </AddressCard>
        </p>
      </Resizer>

      <p style={{ color: '#aaa', marginBottom: '0.5em', marginTop: '2em' }}>Multiple addresses in a single line</p>
      <Resizer>
        <p>
          <AddressCard address={addressBigInt} style={{ '--image-size': '1em' }}>
            <AddressCard.Action onClick={() => alert('Copied!')}>Copy</AddressCard.Action>
            <AddressCard.Action onClick={() => alert('Edit Window')}>Edit</AddressCard.Action>
          </AddressCard>{" "}
          is sending to {" "}
          <AddressCard address={addressBigInt} style={{ '--image-size': '1em', maxWidth: '100px' }}>
            <AddressCard.Action onClick={() => alert('Copied!')}>Copy</AddressCard.Action>
          </AddressCard>
          via {" "}
          <AddressCard address={addressBigInt} style={{ '--image-size': '1em', maxWidth: '100px' }}>
            <AddressCard.Action onClick={() => alert('Copied!')}>Copy</AddressCard.Action>
          </AddressCard>
        </p>
      </Resizer>
    </div>
  )
}
