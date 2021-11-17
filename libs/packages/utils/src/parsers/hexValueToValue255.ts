import { HexValue, RgbValue } from '@coloroscopy/types'
import { hexValueToInteger } from './hexValueToInteger'

export function hexValueToValue255(value: HexValue): RgbValue {
  return Math.max(0, Math.min(255, hexValueToInteger(value)))
}
