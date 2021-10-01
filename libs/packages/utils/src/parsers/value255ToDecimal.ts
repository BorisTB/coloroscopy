import { Value255 } from '@coloroscopy/types'

export function value255ToDecimal(value: Value255): number {
  return value / 255
}
