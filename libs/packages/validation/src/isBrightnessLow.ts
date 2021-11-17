import { Brightness } from '@coloroscopy/types'

export function isBrightnessLow(brightness: Brightness): boolean {
  return brightness < 128
}
