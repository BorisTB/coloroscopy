import { RgbaColor, RgbColor } from '@coloroscopy/types'
import { isNonEmptyString } from './isNonEmptyString'
import { rgbMatcher } from './matchers'

/**
 * @param value
 */
export function isRgbColorString(
  value: unknown
): value is RgbColor | RgbaColor {
  return (
    isNonEmptyString(value) && value.startsWith('rgb') && rgbMatcher.test(value)
  )
}
