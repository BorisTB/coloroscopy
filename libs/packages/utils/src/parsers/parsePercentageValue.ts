import { ValuePercentage } from '@coloroscopy/types'
import { isNumber, isValuePercentage } from '@coloroscopy/validation'
import { stringToNumber } from './stringToNumber'

export function parsePercentageValue(value: ValuePercentage): number {
  if (!isValuePercentage(value)) {
    return 0
  }

  return isNumber(value) ? value : stringToNumber(value)
}
