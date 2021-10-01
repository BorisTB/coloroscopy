import { AlphaValue, HexValue } from '@coloroscopy/types'
import { hexValueToDecimal } from './hexValueToDecimal'

/**
 * TODO: finish
 * @param value
 */
export function hexValueToAlphaValue(value: HexValue): AlphaValue {
  return hexValueToDecimal(value)
}
