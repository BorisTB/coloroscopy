import { NAMED_COLORS_VALUES } from '@coloroscopy/constants'
import { CssColorName } from '@coloroscopy/types'

export const cssColorNames: ReadonlySet<CssColorName> = new Set(
  Object.keys(NAMED_COLORS_VALUES)
) as ReadonlySet<CssColorName>
