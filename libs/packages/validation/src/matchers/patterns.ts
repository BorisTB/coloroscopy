/**
 * @description Match hex digit
 * @example
 *   'a'
 *   '4'
 *   'D'
 */
export const hexDigit = '[a-fA-F0-9]' as const

/**
 * @description Match hex value
 * @example
 *   'f'
 *   'C9'
 *   '4a'
 */
export const hexValuePattern = `^${hexDigit}{1,2}$` as const

/**
 * @description Match any hex pattern
 * @example
 *   '#fff'
 *   '#F90CA4'
 *   '#c942a5ff'
 */
export const anyHexPatern =
  `^#(?:${hexDigit}{8}|${hexDigit}{6}|${hexDigit}{3})$` as const

/**
 * @description Match short hex pattern
 * @example
 *   '#fff'
 *   '#C40'
 */
export const shortHexPattern =
  `^#(?<r>${hexDigit})(?<g>${hexDigit})(?<b>${hexDigit})$` as const

/**
 * @description Match long hex pattern and hex with alpha
 * @example
 *   '#F90CA4'
 *   '#c942a5ff'
 */
export const fullHexPattern =
  `^#(?<r>${hexDigit}{2})(?<g>${hexDigit}{2})(?<b>${hexDigit}{2})(?<a>${hexDigit}{2})?$` as const

/**
 * @description Space
 * @example
 *   ' '
 *   '     '
 */
export const space = '(?:\\s+)' as const

/**
 * @description Optional space
 * @example
 *   ''
 *   ' '
 *   '     '
 */
export const optionalSpace = `${space}?` as const

/**
 * @description Separator between values
 * @example
 *   23 230 , 120
 *   23,230     120
 */
export const separator = '[\\s|,]'

/**
 * @description Pattern for matching valid rgb(a) color values
 * @see https://regex101.com/r/WPS9LR/4
 */
export const rgbPattern =
  `^rgba?\\(${optionalSpace}(?<r>\\d+(?<unit>%?))${optionalSpace}(?<separator>[\\s|,])${optionalSpace}(?<g>\\d+\\k<unit>)${optionalSpace}\\k<separator>${optionalSpace}(?<b>\\d+\\k<unit>)${optionalSpace}(?:(?<=(?:,.+))(?:,${optionalSpace}(?<a>(?:(?:\\d+)?(?:\\.?\\d+))|(?:\\d+%)))?${optionalSpace})?\\)$` as const
