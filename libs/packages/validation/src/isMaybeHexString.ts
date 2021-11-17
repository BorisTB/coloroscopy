import { Hex } from '@coloroscopy/types'
import { isNonEmptyString } from './isNonEmptyString'

export function isMaybeHexString(value: unknown): value is Hex {
  return (
    isNonEmptyString(value) &&
    (value.length === 3 || value.length === 6 || value.length === 8)
  )
}
