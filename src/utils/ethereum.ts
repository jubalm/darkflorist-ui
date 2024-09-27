export function generateEthereumAddress() {
  const randomHex = Array.from(crypto.getRandomValues(new Uint8Array(20)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  return `0x${randomHex}`
}

export function toEthereumAddress(address: bigint) {
  return `0x${address.toString(16)}`
}
