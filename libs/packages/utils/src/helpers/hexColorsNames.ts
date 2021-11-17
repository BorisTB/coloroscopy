import { NAMED_COLORS_VALUES } from '@coloroscopy/constants'
import { normalizeHex } from '../formatting'
import { CssColorName, Hex } from '@coloroscopy/types'

export const hexColorsNames: Map<Hex, CssColorName> = new Map(
  Object.entries(NAMED_COLORS_VALUES).reduce(
    (acc, [colorName, colorHex]) => [
      ...acc,
      [normalizeHex(colorHex), colorName as CssColorName]
    ],
    [] as [Hex, CssColorName][]
  )
) as Map<Hex, CssColorName>
