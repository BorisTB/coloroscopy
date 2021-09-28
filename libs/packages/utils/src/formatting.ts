import { MaybeValue, ValuePx } from '@coloroscopy/types'
import { isNonEmptyString } from './validation'

export function trimSafely(value: MaybeValue): typeof value {
  if (isNonEmptyString(value)) {
    return value.trim()
  }

  return value
}

export function getNumberFromString(value: string): number {
  return parseFloat(value)
}

export function getPxValue(value: MaybeValue): number {
  const trimmedValue = trimSafely(value)

  if (isNonEmptyString(trimmedValue)) {
    return getNumberFromString(trimmedValue) || 0
  }

  return trimmedValue || 0
}

export function toPx(value: MaybeValue): ValuePx {
  const pxValue = getPxValue(value)

  return pxValue ? `${pxValue}px` : 0
}
