import { RgbaColor, RgbaObject } from '@coloroscopy/types'
import { isNil } from '@coloroscopy/validation'

export function rgbaObjectToRgbaString({ r, g, b, a }: RgbaObject): RgbaColor {
  return `rgba(${r}, ${g}, ${b}, ${isNil(a) ? 1 : a})`
}
