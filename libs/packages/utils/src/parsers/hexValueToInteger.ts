import { HexValue } from '@coloroscopy/types'
import { normalizeHexValue } from './normalizeHexValue'

export function hexValueToInteger(value: HexValue): number {
  const normalizedHexValue = normalizeHexValue(value)

  return parseInt(normalizedHexValue, 16)
}
