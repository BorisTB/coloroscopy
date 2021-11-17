import { Percentage } from '@coloroscopy/types'

export function toPercentageString<Value extends Percentage = Percentage>(
  value: Value
): `${Value}%` {
  return `${value}%`
}
