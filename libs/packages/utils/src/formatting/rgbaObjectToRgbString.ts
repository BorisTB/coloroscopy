import { RgbaObject, RgbColor } from '@coloroscopy/types'

export function rgbaObjectToRgbString({ r, g, b }: RgbaObject): RgbColor {
  return `rgb(${r}, ${g}, ${b})`
}
