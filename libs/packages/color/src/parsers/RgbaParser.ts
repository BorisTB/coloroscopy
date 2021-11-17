import { ColorParser } from '../ColorParser'
import { RgbaObject, Value255 } from '@coloroscopy/types'
import { isMaybeRgbColorString } from '@coloroscopy/validation'
import { rgbToRgbaObject } from '@coloroscopy/utils'

export class RgbaParser extends ColorParser {
  public parse(value: unknown): RgbaObject<Value255> | undefined | null {
    if (isMaybeRgbColorString(value)) {
      return rgbToRgbaObject(value)
    }

    return null
  }
}
