import { HexDigitPair, HexValue } from '@coloroscopy/types'
import { isHexDigit } from '@coloroscopy/validation'

/**
 * Normalize single value in hex code.
 *
 * 7 => 77
 * D => DD
 * FF => FF
 * 9C => 9C
 *
 * @param value
 */
export function normalizeHexValue(value: HexValue): HexDigitPair {
  return isHexDigit(value) ? `${value}${value}` : value
}
