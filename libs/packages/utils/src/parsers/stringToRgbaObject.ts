import { RgbaObject } from '@coloroscopy/types'
import {
  hexToRgbaObject,
  normalizeValue,
  rgbToRgbaObject
} from '@coloroscopy/utils'
import {
  isCssColorName,
  isTransparentColorName,
  isNonEmptyString
} from '@coloroscopy/validation'
import { getColorNameHex } from './getColorNameHex'

export function stringToRgbaObject(value: string): RgbaObject | null {
  const rgbaDefaults: RgbaObject = {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  }

  if (!isNonEmptyString(value)) {
    return null
  }

  const normalizedValue = normalizeValue(value)

  if (isTransparentColorName(normalizedValue)) {
    return {
      ...rgbaDefaults,
      a: 0
    }
  }

  const valueToProcess = isCssColorName(normalizedValue)
    ? getColorNameHex(normalizedValue)
    : normalizedValue

  const result: RgbaObject = {
    ...rgbaDefaults,
    ...(hexToRgbaObject(valueToProcess) ??
      rgbToRgbaObject(valueToProcess) ??
      {})
  }

  return result
}
