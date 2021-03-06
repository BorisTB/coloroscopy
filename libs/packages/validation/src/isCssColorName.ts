import { CssColorName } from '@coloroscopy/types'
import { isNonEmptyString } from './isNonEmptyString'
import { cssColorNames } from './helpers/cssColorNames'

export function isCssColorName(value: unknown): value is CssColorName {
  return isNonEmptyString(value) && cssColorNames.has(value as CssColorName)
}
