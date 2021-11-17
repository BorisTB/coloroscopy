import { RgbValue, Value255 } from '@coloroscopy/types'
import { isValuePercentage } from '@coloroscopy/validation'
import { percentageToValue255 } from '@coloroscopy/utils'

export function rgbValueToValue255(value: RgbValue): Value255 {
  if (isValuePercentage(value)) {
    return percentageToValue255(value)
  }

  return value
}
