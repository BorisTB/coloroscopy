import { TransparentColorName } from '@coloroscopy/types'
import { isNamedTransparentColor } from './isNamedTransparentColor'

/**
 * TODO: finish
 * @param value
 */
export function isTransparentColor(
  value: unknown
): value is TransparentColorName {
  return isNamedTransparentColor(value)
}
