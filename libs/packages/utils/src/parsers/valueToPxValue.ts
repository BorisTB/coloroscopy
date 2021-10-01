import { MaybeValue } from '@coloroscopy/types'
import { stringToNumber } from './stringToNumber'
import { normalizeValue } from './normalizeValue'
import { isNonEmptyString } from '@coloroscopy/validation'

export function valueToPxValue(value: MaybeValue): number {
  const trimmedValue = normalizeValue(value)

  if (isNonEmptyString(trimmedValue)) {
    return stringToNumber(trimmedValue)
  }

  return trimmedValue || 0
}
