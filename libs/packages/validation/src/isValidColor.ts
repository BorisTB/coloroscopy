import { Color } from '@coloroscopy/types'
import { isHexColor } from './isHexColor'
import { isCssColorName } from './isCssColorName'

export function isValidColor(value: unknown): value is Color {
  return isHexColor(value) || isCssColorName(value)
}
