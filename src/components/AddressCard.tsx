import { CSSProperties } from 'preact/compat'
import { ComponentChildren, JSX } from 'preact'
import { Blockie } from './SVGBlockie'
import { toEthereumAddress } from '../utils/ethereum'

export const AddressCard = ({ address, style, children }: { address: bigint, style?: CSSProperties, children: ComponentChildren }) => {
  const addressString = toEthereumAddress(address)
  return (
    <span class='address-card' role='figure' style={style}>
      <span><Blockie address={address} /></span>
      <data class='truncate text-legible' value={addressString}>{addressString}</data>
      <span>
        <data class='truncate text-legible' value={addressString}>{addressString}</data>
        {children}
      </span>
    </span>
  )
}

AddressCard.Action = ({ onClick, children }: JSX.IntrinsicElements['button']) => <button type='button' onClick={onClick}>{children}</button>
