import { MaybeValue, ValuePx } from '@coloroscopy/types'
import { valueToPxValue } from '../parsers'

export function toPx(value: MaybeValue): ValuePx {
  const pxValue = valueToPxValue(value)

  return pxValue ? `${pxValue}px` : 0
}
