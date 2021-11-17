import { Value255 } from '@coloroscopy/types'
import { isNumber } from './isNumber'

export function isValue255(value: unknown): value is Value255 {
  return isNumber(value) && value >= 0 && value <= 255
}
