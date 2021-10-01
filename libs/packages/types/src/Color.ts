import { CssColorName, TransparentColorName } from './CssColors'
import { HexColor } from './Hex'
import { RgbaColor, RgbColor } from './Rgba'

/**
 * @description Valid color value, might be processed ColorInput
 */
export type Color =
  | CssColorName
  | HexColor
  | RgbColor
  | RgbaColor
  | TransparentColorName

/**
 * @description Possible color input for coloroscopy tools
 * @example
 *   function handleSelectedColor(color: ColorInput) {}
 */
export type ColorInput = Color | string
