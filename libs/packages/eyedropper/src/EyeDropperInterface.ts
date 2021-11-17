import { ColorType } from '@coloroscopy/types'

export interface EyeDropperInterface {
  open(): Promise<ColorType>
}
