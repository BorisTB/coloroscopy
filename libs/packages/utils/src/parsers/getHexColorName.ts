import { CssColorName, Hex, HexColor } from '@coloroscopy/types'
import { hexColorsNames } from '../helpers'
import { normalizeHex } from '@coloroscopy/utils'

export function getHexColorName(hex: Hex | HexColor): CssColorName | undefined {
  return hexColorsNames.get(normalizeHex(hex))
}
