import { HexDigitPair, HexValue } from '@coloroscopy/types'
import { isHexDigit } from '@coloroscopy/validation'

export function normalizeHexValue(value: HexValue): HexDigitPair {
  return isHexDigit(value) ? `${value}${value}` : value
}
