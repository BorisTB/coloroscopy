import { RgbColor } from '@coloroscopy/types'
import { isNonEmptyString } from './isNonEmptyString'

/**
 * TODO: finish
 * @param value
 */
export function isRgbColor(value: unknown): value is RgbColor {
  return isNonEmptyString(value) && value.startsWith('rgb(')
}
