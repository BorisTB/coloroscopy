import { TransparentColorName } from '@coloroscopy/types'
import { isTransparentColorName } from './isTransparentColorName'

/**
 * TODO: finish
 * @param value
 */
export function isTransparentColor(
  value: unknown
): value is TransparentColorName {
  return isTransparentColorName(value)
}
