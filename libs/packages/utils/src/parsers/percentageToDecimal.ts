import { ValuePercentage } from '@coloroscopy/types'
import { parsePercentageValue } from '@coloroscopy/utils'

export function percentageToDecimal(value: ValuePercentage): number {
  const percentage = parsePercentageValue(value)

  return (1 / 100) * percentage
}
