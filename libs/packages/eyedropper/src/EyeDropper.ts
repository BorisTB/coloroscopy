import { EyeDropperInterface } from './EyeDropperInterface'
import { NativeEyeDropper } from './NativeEyeDropper'
import { CanvasEyeDropper } from './CanvasEyeDropper/CanvasEyeDropper'
import { ColorType } from '@coloroscopy/types'

export class EyeDropper {
  private eyeDropper: EyeDropperInterface

  constructor() {
    if (NativeEyeDropper.isSupported()) {
      this.eyeDropper = new NativeEyeDropper()
      return
    }

    this.eyeDropper = new CanvasEyeDropper()
  }

  async open(): Promise<ColorType> {
    return this.eyeDropper.open()
  }
}
