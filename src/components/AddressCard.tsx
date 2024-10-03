import { CSSProperties, JSX } from 'preact/compat'
import { useCallback, useRef } from 'preact/hooks'
import { toEthereumAddress } from '../utils/ethereum'

type AddressCardProps = {
  icon: () => JSX.Element
  address: bigint,
  style?: CSSProperties,
  onClick?: (address: string) => void
}

export const AddressCard = ({ icon: Icon, address, onClick, style }: AddressCardProps) => {
  const dataRef = useRef<HTMLDataElement>(null)
  const addressString = toEthereumAddress(address)

  const handleClick = useCallback(() => {
    if (!dataRef.current) return
    console.log(dataRef.current.value)
    onClick?.(dataRef.current.value)
  }, [dataRef])

  return (
    <span class='address-card' role='figure' style={style}>
      <Icon />
      <data ref={dataRef} class='truncate text-legible' value={addressString}>{addressString}</data>
      <button value='copy' onClick={handleClick}>
        <Icon />
        <data class = 'truncate text-legible' value={addressString}>{addressString}</data>
        <span>Copy</span>
      </button>
    </span>
  )
}
