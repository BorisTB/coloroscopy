import { CssColorName } from './CssNamedColor'
import { HexColor } from './Hex'
import { RgbaColor, RgbColor } from './Rgba'
import { TransparentColorName } from './TransparentColorName'

/**
 * @description Valid color value, might be processed ColorInput
 */
export type Color =
  | CssColorName
  | HexColor
  | RgbColor
  | RgbaColor
  | TransparentColorName
