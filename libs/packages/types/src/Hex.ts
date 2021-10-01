import { HexDigit } from './HexDigit'

/**
 * This is the best we can do with current typescript version.
 * Prefer ValidHexColor<T> if you can.
 */
export type HexColor = `#${string}`

/**
 * Hack for typescript guard
 */
export type HexColorValid = HexColor & {
  readonly __validHexColor: unique symbol
}

/**
 * Validation of HEX color string
 *
 * We can't use template literals as it would generate extremely large union type.
 *
 * How it works:
 *  - check if value extends string starting with '#' followed by 6 or 3 random characters
 *  - infer those random characters and start constructing final valid type that we will return
 *  - check each inferred character if it's valid HexDigit, if not, replace it with 0
 *  - return final valid type, if provided string matches with returned type, all's good
 *
 *  Example:
 *   const logColor = <T extends string = string>(color: ValidHexColor<T>) => { console.log(color) }
 *
 *   logColor('#ff0') // ok, compared to type: '#ff0'
 *   logColor('#00AF65') // ok, compared to type: '#00AF65'
 *   logColor('#23X') // error, compared to type: '#230'
 *
 *  Big up to this stackoverflow answer:
 *  https://stackoverflow.com/a/54675049/3739087
 */
export type ToHexDigit<T extends string = string> = T extends HexDigit ? T : 0

export type AsValidHexColor<T extends string = string> =
  T extends `#${infer D1}${infer D2}${infer D3}${infer D4}${infer D5}${infer D6}${infer D7}${infer D8}`
    ? `#${ToHexDigit<D1>}${ToHexDigit<D2>}${ToHexDigit<D3>}${ToHexDigit<D4>}${ToHexDigit<D5>}${ToHexDigit<D6>}${ToHexDigit<D7>}${ToHexDigit<D8>}`
    : T extends `#${infer D1}${infer D2}${infer D3}${infer D4}${infer D5}${infer D6}`
    ? `#${ToHexDigit<D1>}${ToHexDigit<D2>}${ToHexDigit<D3>}${ToHexDigit<D4>}${ToHexDigit<D5>}${ToHexDigit<D6>}`
    : T extends `#${infer D1}${infer D2}${infer D3}`
    ? `#${ToHexDigit<D1>}${ToHexDigit<D2>}${ToHexDigit<D3>}`
    : '#000'

export type ValidHexColor<T extends string> = T extends AsValidHexColor<T>
  ? T
  : AsValidHexColor<T>
