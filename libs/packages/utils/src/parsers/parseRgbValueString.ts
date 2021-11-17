import { RgbValue, RgbValueString } from '@coloroscopy/types'
import { isValue255, isValuePercentage } from '@coloroscopy/validation'

export function parseRgbValueString(value: RgbValueString): RgbValue {
  if (isValuePercentage(value)) {
    return value
  }

  const parsedValue = parseFloat(value)

  if (isValue255(parsedValue)) {
    return parsedValue
  }

  return 0
}
