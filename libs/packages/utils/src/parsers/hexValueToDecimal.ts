import { AlphaValue, HexValue } from '@coloroscopy/types'
import { hexValueToInteger } from './hexValueToInteger'
import { value255ToDecimal } from './value255ToDecimal'

/**
 * @param value
 */
export function hexValueToDecimal(value: HexValue): AlphaValue {
  return value255ToDecimal(hexValueToInteger(value))
}
