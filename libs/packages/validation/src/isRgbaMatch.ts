import { isNonEmptyObject } from './isNonEmptyObject'
import { isNonEmptyString } from './isNonEmptyString'

export function isRgbaMatch<
  Value extends string = string,
  AlphaValue extends string = Value
>(
  value: unknown
): value is {
  r: Value
  g: Value
  b: Value
  a?: AlphaValue
} {
  return (
    isNonEmptyObject(value) &&
    isNonEmptyString(value.r) &&
    isNonEmptyString(value.g) &&
    isNonEmptyString(value.b)
  )
}
