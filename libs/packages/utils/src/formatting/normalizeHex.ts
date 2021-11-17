import { Hex, HexColor } from '@coloroscopy/types'

export function normalizeHex(value: Hex | HexColor): Hex {
  let hex = value.toLowerCase()

  if (hex.startsWith('#')) {
    hex = hex.substr(1)
  }

  if (
    hex.length === 6 &&
    hex.charAt(0) === hex.charAt(1) &&
    hex.charAt(2) === hex.charAt(3) &&
    hex.charAt(4) === hex.charAt(5)
  ) {
    hex = hex.charAt(0) + hex.charAt(2) + hex.charAt(4)
  }

  return hex
}
