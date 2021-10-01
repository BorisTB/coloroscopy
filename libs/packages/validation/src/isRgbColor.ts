import { RgbColor } from '@coloroscopy/types'
import { isNonEmptyString } from './isNonEmptyString'

export function isRgbColor(value: unknown): value is RgbColor {
  return isNonEmptyString(value) && value.startsWith('rgb(')
}
