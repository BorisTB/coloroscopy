import { TransparentColorName } from '@coloroscopy/types'

export function isNamedTransparentColor(
  value: unknown
): value is TransparentColorName {
  return value === 'transparent'
}
