import { MaybeValue } from '@coloroscopy/types'
import { isNonEmptyString } from '@coloroscopy/utils'
import { stringToNumber } from './stringToNumber'
import { normalizeValue } from './normalizeValue'

export function valueToPxValue(value: MaybeValue): number {
  const trimmedValue = normalizeValue(value)

  if (isNonEmptyString(trimmedValue)) {
    return stringToNumber(trimmedValue)
  }

  return trimmedValue || 0
}
