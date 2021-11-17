import { Hex, HexColor } from '@coloroscopy/types'

export function toHexString(value: Hex): HexColor {
  return `#${value}`
}
