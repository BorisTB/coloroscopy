import { Value255, ValuePercentage } from '@coloroscopy/types'
import { parsePercentageValue } from './parsePercentageValue'

export function percentageToValue255(value: ValuePercentage): Value255 {
  const percentage = parsePercentageValue(value)

  return Math.max(0, Math.min(255, Math.round((255 / 100) * percentage)))
}
