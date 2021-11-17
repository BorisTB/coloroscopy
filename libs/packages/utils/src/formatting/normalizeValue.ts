import { MaybeValue } from '@coloroscopy/types'
import { isNonEmptyString } from '@coloroscopy/validation'

export function normalizeValue<Value extends MaybeValue = MaybeValue>(
  value: Value
): Value {
  if (isNonEmptyString(value)) {
    return value.trim().toLowerCase() as Value
  }

  return value
}
