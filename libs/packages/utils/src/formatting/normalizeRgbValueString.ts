import { RgbValue, RgbValueString } from '@coloroscopy/types'
import { isValuePercentage } from '@coloroscopy/validation'
import { normalizeValue } from '@coloroscopy/utils'

export function normalizeRgbValueString(value: RgbValueString): RgbValue {
  const normalizedValue = normalizeValue(value)

  if (isValuePercentage(value)) {
    return value
  }
}
