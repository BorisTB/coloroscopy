import { ColorInput, RgbaObject } from '@coloroscopy/types'
import { isString } from '@coloroscopy/validation'
import { stringToRgbaObject } from './stringToRgbaObject'

export function inputToRgbaObject(input: ColorInput): RgbaObject {
  const defaultRgba: RgbaObject = {
    r: 0,
    g: 0,
    b: 0,
    a: 0
  }

  if (isString(input)) {
    return stringToRgbaObject(input)
  }

  return defaultRgba
}
