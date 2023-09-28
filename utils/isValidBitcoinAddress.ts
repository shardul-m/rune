import { validate } from 'bitcoin-address-validation'

export function isValidBitcoinAddress(address: string) {
  return validate(address)
}
