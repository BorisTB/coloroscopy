import { CssColorName } from '@coloroscopy/types'
import { cssColors } from '@coloroscopy/utils'
import { isNonEmptyString } from './isNonEmptyString'

export function isCssColorName(value: unknown): value is CssColorName {
  return isNonEmptyString(value) && isNonEmptyString(cssColors[value])
}
