import { TransparentColorName } from '@coloroscopy/types'
import { NAME_TRANSPARENT } from '@coloroscopy/constants'

export function isTransparentColorName(
  value: unknown
): value is TransparentColorName {
  return value === NAME_TRANSPARENT
}
