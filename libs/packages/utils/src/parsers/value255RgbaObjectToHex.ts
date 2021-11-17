import { Hex, RgbaObject, Value255 } from '@coloroscopy/types'
import { value255ToHexValue } from '@coloroscopy/utils'

export function value255RgbaObjectToHex({
  r,
  g,
  b
}: RgbaObject<Value255>): Hex {
  return value255ToHexValue(r) + value255ToHexValue(g) + value255ToHexValue(b)
}
