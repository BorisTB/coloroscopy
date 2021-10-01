import { TransparentColorName } from '@coloroscopy/types'

export function isTransparentColor(
  value: unknown
): value is TransparentColorName {
  return value === 'transparent'
}
