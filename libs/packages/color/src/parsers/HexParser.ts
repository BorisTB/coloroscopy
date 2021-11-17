import { ColorParser } from '../ColorParser'
import { RgbaObject, Value255 } from '@coloroscopy/types'
import {
  isMaybeHexColorString,
  isMaybeHexString
} from '@coloroscopy/validation'
import { hexToRgbaObject } from '@coloroscopy/utils'

export class HexParser extends ColorParser {
  public parse(value: unknown): RgbaObject<Value255> | undefined | null {
    if (isMaybeHexColorString(value) || isMaybeHexString(value)) {
      return hexToRgbaObject(value)
    }

    return null
  }
}
