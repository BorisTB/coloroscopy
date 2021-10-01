import { MaybeValue } from '@coloroscopy/types'
import { isNonEmptyString } from '@coloroscopy/validation'

export function normalizeValue(value: MaybeValue): typeof value {
  if (isNonEmptyString(value)) {
    return value.trim()
  }

  return value
}
