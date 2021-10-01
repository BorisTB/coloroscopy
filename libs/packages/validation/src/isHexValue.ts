import { HexValue } from '@coloroscopy/types'
import { hexValueMatcher } from './matchers'
import { isNonEmptyString } from './isNonEmptyString'

export function isHexValue(value: unknown): value is HexValue {
  return isNonEmptyString(value) && hexValueMatcher.test(value)
}
