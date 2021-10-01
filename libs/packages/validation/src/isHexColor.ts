import { HexColorValid } from '@coloroscopy/types'
import { anyHexMatcher } from './matchers'
import { isNonEmptyString } from './isNonEmptyString'

export function isHexColor(value: unknown): value is HexColorValid {
  return (
    isNonEmptyString(value) &&
    value.startsWith('#') &&
    (value.length === 4 || value.length === 7 || value.length === 9) &&
    anyHexMatcher.test(value)
  )
}
