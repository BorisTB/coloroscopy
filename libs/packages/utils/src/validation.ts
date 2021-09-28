import {
  Color,
  CssColorName,
  HexColor,
  TransparentColorName
} from '@coloroscopy/types'
import { cssColors } from './cssNamedColors'
import { RgbColor } from '../../types/src/Rgba'

const hexRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/

export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value !== ''
}

export function isTransparentColor(
  value: unknown
): value is TransparentColorName {
  return value === 'transparent'
}

export function isCssColorName(value: unknown): value is CssColorName {
  return isNonEmptyString(value) && isNonEmptyString(cssColors[value])
}

export function isHexColor(value: unknown): value is HexColor {
  return (
    isNonEmptyString(value) &&
    value.startsWith('#') &&
    (value.length === 4 || value.length === 7) &&
    hexRegex.test(value)
  )
}

export function isRgbColor(value: unknown): value is RgbColor {
  return isNonEmptyString(value) && value.startsWith('rgb(')
}

export function isValidColor(value: unknown): value is Color {
  return isHexColor(value) || isCssColorName(value)
}
