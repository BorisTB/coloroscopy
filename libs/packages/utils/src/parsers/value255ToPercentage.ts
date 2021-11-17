import { Percentage, Value255 } from '@coloroscopy/types'

export function value255ToPercentage(value: Value255): Percentage {
  return (value / 255) * 100
}
