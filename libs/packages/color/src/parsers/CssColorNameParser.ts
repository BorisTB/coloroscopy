import { ColorParser } from '../ColorParser'
import { RgbaObject, Value255 } from '@coloroscopy/types'
import { isCssColorName } from '@coloroscopy/validation'
import { getColorNameHex, hexToRgbaObject } from '@coloroscopy/utils'

export class CssColorNameParser extends ColorParser {
  public parse(value: unknown): RgbaObject<Value255> | undefined | null {
    if (isCssColorName(value)) {
      const hex = getColorNameHex(value)

      return hexToRgbaObject(hex)
    }

    return null
  }
}
