import { ColorParser } from '../ColorParser'
import { HexColor } from '@coloroscopy/types'
import { isCssColorName } from '@coloroscopy/validation'
import { getColorNameHex } from '@coloroscopy/utils'

export class CssColorNameParser extends ColorParser {
  public parse(value: unknown): HexColor | null {
    if (isCssColorName(value)) {
      return getColorNameHex(value)
    }

    return null
  }
}
