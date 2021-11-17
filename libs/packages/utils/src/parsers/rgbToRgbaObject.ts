import { HexValue, RgbaObject } from '@coloroscopy/types'
import { isNonEmptyString, rgbMatcher } from '@coloroscopy/validation'
import { hexValueToRgbValue } from './hexValueToRgbValue'
import { hexValueToAlphaValue } from './hexValueToAlphaValue'

/**
 * TODO: finish this, replace hexValueToRgbValue with something that converts possible percentage to integer
 * @param value
 */
export function rgbToRgbaObject(value: string): RgbaObject | null {
  const match = rgbMatcher.match(value)

  if (match) {
    return {
      r: hexValueToRgbValue(match.r as HexValue),
      g: hexValueToRgbValue(match.g as HexValue),
      b: hexValueToRgbValue(match.b as HexValue),
      a: isNonEmptyString(match?.a)
        ? hexValueToAlphaValue(match.a as HexValue)
        : 1
    }
  }

  return null
}
