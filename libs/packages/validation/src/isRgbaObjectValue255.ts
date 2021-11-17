import { RgbaObject, Value255 } from '@coloroscopy/types'
import { isNonEmptyObject } from './isNonEmptyObject'
import { isValue255 } from './isValue255'

export function isRgbaObjectValue255(
  value: unknown
): value is RgbaObject<Value255> {
  return (
    isNonEmptyObject(value) &&
    isValue255(value.r) &&
    isValue255(value.g) &&
    isValue255(value.b)
  )
}
