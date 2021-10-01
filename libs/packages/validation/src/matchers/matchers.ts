import { createMatcher } from './createMatcher'
import {
  anyHexPatern,
  fullHexPattern,
  hexValuePattern,
  shortHexPattern
} from './patterns'

export const hexValueMatcher = createMatcher(hexValuePattern)
export const anyHexMatcher = createMatcher(anyHexPatern)
export const hexShortMatcher = createMatcher(shortHexPattern)
export const hexFullMatcher = createMatcher(fullHexPattern)
