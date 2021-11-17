import {
  AlphaValue,
  OptionalSpace,
  TransparentAlphaValue,
  Value255,
  ValuePercentage
} from './Values'

/**
 * @description Valid RGB value
 * @example
 *   `color: rgb(${RgbValue}, ${RgbValue}, ${RgbValue})`
 */
export type RgbValue = Value255 | ValuePercentage

export type RgbValueString = `${RgbValue}`

/**
 * @description RGB color (without alpha channel)
 * @example
 *   'rgb(0, 120, 255)'
 */
export type RgbColor =
  `rgb(${RgbValue},${OptionalSpace}${RgbValue},${OptionalSpace}${RgbValue})`

/**
 * @description RGBA color (with alpha channel)
 * @example
 *   'rgba(0, 120, 255, 0.4)'
 */
export type RgbaColor =
  `rgba(${RgbValue},${OptionalSpace}${RgbValue},${OptionalSpace}${RgbValue},${OptionalSpace}${AlphaValue})`

/**
 * @description Transparent RGBA color
 * @example
 *   'rgba(120, 90, 255, 0)'
 */
export type TransparentRgbaColor =
  `rgba(${RgbValue},${OptionalSpace}${RgbValue},${OptionalSpace}${RgbValue},${OptionalSpace}${TransparentAlphaValue})`

/**
 * @description RGBA object
 * @example
 *   const color: RgbaObject = {
 *     r: 120,
 *     g: 90,
 *     b: 255,
 *     a: 1
 *   }
 */
export interface RgbaObject {
  r: RgbValue
  g: RgbValue
  b: RgbValue
  a: AlphaValue
}
