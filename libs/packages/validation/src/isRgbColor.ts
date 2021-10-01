import { RgbColor } from '@coloroscopy/types'
import { isNonEmptyString } from './isNonEmptyString'
import { rgbMatcher } from './matchers'

/**
 * @param value
 */
export function isRgbColor(value: unknown): value is RgbColor {
  return (
    isNonEmptyString(value) && value.startsWith('rgb') && rgbMatcher.test(value)
  )
}
