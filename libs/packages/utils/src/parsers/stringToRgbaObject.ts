import { RgbaObject, Value255 } from '@coloroscopy/types'
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

export function stringToRgbaObject(value: string): RgbaObject<Value255> {
  const rgbaDefaults: RgbaObject<Value255> = {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  }

  if (!isNonEmptyString(value)) {
    return { ...rgbaDefaults }
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

  const result: RgbaObject<Value255> = {
    ...rgbaDefaults,
    ...(hexToRgbaObject(valueToProcess) ??
      rgbToRgbaObject(valueToProcess) ??
      {})
  }

  return result
}
