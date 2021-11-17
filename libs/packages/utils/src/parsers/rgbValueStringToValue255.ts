import { RgbValueString, Value255 } from '@coloroscopy/types'
import { parseRgbValueString, rgbValueToValue255 } from '@coloroscopy/utils'

export function rgbValueStringToValue255(value: RgbValueString): Value255 {
  const parsedValue = parseRgbValueString(value)

  return rgbValueToValue255(parsedValue)
}
