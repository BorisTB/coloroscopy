import { HexValue, RgbaObject } from '@coloroscopy/types'
import {
  hexFullMatcher,
  hexShortMatcher,
  isNonEmptyString,
  isRgbaMatch
} from '@coloroscopy/validation'
import { hexValueToValue255 } from './hexValueToValue255'
import { hexValueToAlphaValue } from './hexValueToAlphaValue'

export function hexToRgbaObject(value: string): RgbaObject | null {
  const match = hexFullMatcher.match(value) ?? hexShortMatcher.match(value)

  if (!isRgbaMatch<HexValue>(match)) {
    return null
  }

  return {
    r: hexValueToValue255(match.r),
    g: hexValueToValue255(match.g),
    b: hexValueToValue255(match.b),
    a: isNonEmptyString(match?.a) ? hexValueToAlphaValue(match.a) : 1
  }
}
