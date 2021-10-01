import { HexValue, RgbaObject } from '@coloroscopy/types'
import {
  hexFullMatcher,
  hexShortMatcher,
  isNonEmptyString
} from '@coloroscopy/validation'
import { hexValueToRgbValue } from './hexValueToRgbValue'
import { hexValueToAlphaValue } from './hexValueToAlphaValue'

export function hexToRgbaObject(value: string): RgbaObject {
  const match = hexFullMatcher.match(value) ?? hexShortMatcher.match(value)

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
}
