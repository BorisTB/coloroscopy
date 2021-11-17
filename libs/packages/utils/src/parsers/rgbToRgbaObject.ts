import {
  AlphaValueString,
  HexValue,
  RgbaObject,
  RgbValueString,
  Value255
} from '@coloroscopy/types'
import {
  isNonEmptyString,
  isRgbaMatch,
  rgbMatcher
} from '@coloroscopy/validation'
import { hexValueToAlphaValue } from './hexValueToAlphaValue'
import { rgbValueStringToValue255 } from './rgbValueStringToValue255'
import { alphaValueToDecimal } from './alphaValueToDecimal'

/**
 * @param value
 */
export function rgbToRgbaObject(value: string): RgbaObject<Value255> | null {
  const match = rgbMatcher.match(value)

  if (!isRgbaMatch<RgbValueString, AlphaValueString>(match)) {
    return null
  }

  return {
    r: rgbValueStringToValue255(match.r),
    g: rgbValueStringToValue255(match.g),
    b: rgbValueStringToValue255(match.b),
    a: isNonEmptyString(match?.a) ? alphaValueToDecimal(match.a) : 1
  }
}
