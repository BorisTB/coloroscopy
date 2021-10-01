import { Color } from '@coloroscopy/types'

export interface EyeDropperInterface {
  open(): Promise<Color>
}
