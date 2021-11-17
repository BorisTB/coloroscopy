import { Brightness, RgbaObject, Value255 } from '@coloroscopy/types'

export function getRgbBrightness({
  r,
  g,
  b
}: RgbaObject<Value255>): Brightness {
  return (r * 299 + g * 587 + b * 114) / 1000
}
