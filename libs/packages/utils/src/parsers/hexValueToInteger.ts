import { HexValue } from '@coloroscopy/types'
import { normalizeHexValue } from '../formatting'

export function hexValueToInteger(value: HexValue): number {
  const normalizedHexValue = normalizeHexValue(value)

  return parseInt(normalizedHexValue, 16)
}
