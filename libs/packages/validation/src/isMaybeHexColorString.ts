import { HexColor } from '@coloroscopy/types'
import { isNonEmptyString } from './isNonEmptyString'
import { isMaybeHexString } from './isMaybeHexString'

export function isMaybeHexColorString(value: unknown): value is HexColor {
  return (
    isNonEmptyString(value) &&
    value.startsWith('#') &&
    isMaybeHexString(value.substr(1))
  )
}
