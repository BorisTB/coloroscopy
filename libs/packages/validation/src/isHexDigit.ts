import { HexDigit } from '@coloroscopy/types'
import { isNonEmptyString } from './isNonEmptyString'
import { isHexValue } from './isHexValue'

export function isHexDigit(value: unknown): value is HexDigit {
  return isNonEmptyString(value) && value.length === 1 && isHexValue(value)
}
