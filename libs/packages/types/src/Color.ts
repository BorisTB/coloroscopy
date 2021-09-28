import { CssColorName, TransparentColorName } from './CssColors'
import { HexColor } from './Hex'

export type ColorInput = string | CssColorName | HexColor | TransparentColorName

export type Color = CssColorName | HexColor | TransparentColorName
