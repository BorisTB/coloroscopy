import { ColorInput, RgbaObject, Value255 } from '@coloroscopy/types'
import { isString } from '@coloroscopy/validation'
import { stringToRgbaObject } from './stringToRgbaObject'

export function inputToRgbaObject(input: ColorInput): RgbaObject<Value255> {
  const defaultRgba: RgbaObject<Value255> = {
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
