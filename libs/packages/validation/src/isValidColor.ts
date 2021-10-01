import { Color } from '@coloroscopy/types'
import { isHexColor } from './isHexColor'
import { isCssColorName } from './isCssColorName'
import { isRgbColor } from './isRgbColor'
import { isNamedTransparentColor } from './isNamedTransparentColor'

export function isValidColor(value: unknown): value is Color {
  return (
    isNamedTransparentColor(value) ||
    isCssColorName(value) ||
    isHexColor(value) ||
    isRgbColor(value)
  )
}
