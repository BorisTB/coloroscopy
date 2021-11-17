import { ColorType } from '@coloroscopy/types'
import { isHexColorString } from './isHexColorString'
import { isCssColorName } from './isCssColorName'
import { isRgbColorString } from './isRgbColorString'
import { isTransparentColorName } from './isTransparentColorName'

export function isValidColor(value: unknown): value is ColorType {
  return (
    isTransparentColorName(value) ||
    isCssColorName(value) ||
    isHexColorString(value) ||
    isRgbColorString(value)
  )
}
