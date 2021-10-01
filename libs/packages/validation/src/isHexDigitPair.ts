import { HexDigitPair } from '@coloroscopy/types'
import { isNonEmptyString } from './isNonEmptyString'
import { isHexValue } from './isHexValue'

export function isHexDigitPair(value: unknown): value is HexDigitPair {
  return isNonEmptyString(value) && value.length === 2 && isHexValue(value)
}
