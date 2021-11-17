/**
 * @description Optional space
 * @example
 *   rgb(0, 255, 100)
 *   rgb(0,255,100)
 */
export type OptionalSpace = '' | ' '

/**
 * @description Possible value
 * @example
 *   function handleUserInput(userInput: MaybeValue): {
 *     // detect what kind of value is userInput
 *   }
 */
export type MaybeValue = string | number | null | undefined

/**
 * @description Percentage value
 * @example
 *   100
 */
export type Percentage = 0 | 100 | number

/**
 * @description Values in pixels
 * @example
 *   '100px'
 */
export type ValuePx = 0 | `${number}px`

/**
 * @description Values 0 - 255
 * @example
 *   'rgb(0, 255, 100)'
 */
export type Value255 = 0 | 255 | number

/**
 * @description Values in percentage, 0 - 100%
 * @example
 *   'rgb(0, 100%, 43%)'
 */
export type ValuePercentage = 0 | '0' | `${Percentage}%`

/**
 * @description Value of alpha channel
 * @example
 *   0, 0.1, 1, '20%'
 */
export type AlphaValue = 0 | 1 | number | ValuePercentage

/**
 * @description Stringified value of alpha channel
 */
export type AlphaValueString = `${AlphaValue}`

/**
 * @description Value of alpha channel when color is transparent
 * @example
 *   0, '0%'
 */
export type TransparentAlphaValue = 0 | '0%'

export type Brightness = number
