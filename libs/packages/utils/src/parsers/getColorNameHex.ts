import { CssColorName, HexColor } from '@coloroscopy/types'
import { NAMED_COLORS_VALUES } from '@coloroscopy/constants'

export function getColorNameHex(colorName: CssColorName): HexColor {
  return NAMED_COLORS_VALUES[colorName]
}
