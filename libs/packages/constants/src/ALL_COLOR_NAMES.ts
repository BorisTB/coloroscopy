import { CssColorName } from '@coloroscopy/types'
import { NAMED_COLORS_VALUES } from './NAMED_COLORS_VALUES'

export const ALL_COLOR_NAMES: CssColorName[] = Object.keys(
  NAMED_COLORS_VALUES
) as CssColorName[]
