import { HexValue, RgbaObject, RgbValueString } from '@coloroscopy/types'
import {
  isNonEmptyString,
  isRgbaMatch,
  rgbMatcher
} from '@coloroscopy/validation'
import { hexValueToValue255 } from './hexValueToValue255'
import { hexValueToAlphaValue } from './hexValueToAlphaValue'

/**
 * TODO: finish this, replace hexValueToRgbValue with something that converts possible percentage to integer
 * @param value
 */
export function rgbToRgbaObject(value: string): RgbaObject | null {
  const match = rgbMatcher.match(value)

  if (!isRgbaMatch<RgbValueString>(match)) {
    return null
  }

  return {
    r: hexValueToValue255(match.r as HexValue),
    g: hexValueToValue255(match.g as HexValue),
    b: hexValueToValue255(match.b as HexValue),
    a: isNonEmptyString(match?.a)
      ? hexValueToAlphaValue(match.a as HexValue)
      : 1
  }
}
