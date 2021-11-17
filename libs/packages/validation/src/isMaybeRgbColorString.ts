import { RgbaColor, RgbColor } from '@coloroscopy/types'
import { isNonEmptyString } from './isNonEmptyString'

export function isMaybeRgbColorString(
  value: unknown
): value is RgbColor | RgbaColor {
  return isNonEmptyString(value) && value.startsWith('rgb')
}
