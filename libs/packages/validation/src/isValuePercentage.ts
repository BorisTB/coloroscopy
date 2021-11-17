import { ValuePercentage } from '@coloroscopy/types'
import { isNonEmptyString } from './isNonEmptyString'
import { isNumber } from './isNumber'

export function isValuePercentage(value: unknown): value is ValuePercentage {
  if (value === 0 || value === '0') {
    return true
  }

  if (isNonEmptyString(value) && value.endsWith('%')) {
    const number = parseFloat(value)

    return isNumber(number)
  }

  return false
}
