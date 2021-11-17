import { CssColorName } from '@coloroscopy/types'
import { NAMED_COLORS_VALUES } from '@coloroscopy/constants'
import { isNonEmptyString } from './isNonEmptyString'

export function isCssColorName(value: unknown): value is CssColorName {
  return (
    isNonEmptyString(value) &&
    isNonEmptyString(NAMED_COLORS_VALUES[value as CssColorName])
  )
}
