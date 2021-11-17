import { AlphaValue, AlphaValueString } from '@coloroscopy/types'
import { isNumber, isValuePercentage } from '@coloroscopy/validation'
import { percentageToDecimal } from './percentageToDecimal'
import { stringToNumber } from './stringToNumber'

export function alphaValueToDecimal(
  value: AlphaValue | AlphaValueString
): AlphaValue {
  if (isValuePercentage(value)) {
    return percentageToDecimal(value)
  }

  if (isNumber(value)) {
    return Math.max(0, Math.min(1, value))
  }

  return stringToNumber(value)
}
