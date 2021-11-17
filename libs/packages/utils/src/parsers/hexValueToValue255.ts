import { HexValue, RgbValue, Value255 } from '@coloroscopy/types'
import { hexValueToInteger } from './hexValueToInteger'

export function hexValueToValue255(value: HexValue): Value255 {
  return Math.max(0, Math.min(255, hexValueToInteger(value)))
}
