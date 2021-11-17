import { HexDigitPair, Value255 } from '@coloroscopy/types'

export function value255ToHexValue(value: Value255): HexDigitPair {
  return value.toString(16) as HexDigitPair
}
