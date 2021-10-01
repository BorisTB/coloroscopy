import { EyeDropperInterface } from './EyeDropperInterface'
import { NativeEyeDropper } from './NativeEyeDropper'
import { CanvasEyeDropper } from './CanvasEyeDropper/CanvasEyeDropper'
import { Color } from '@coloroscopy/types'

export class EyeDropper {
  private eyeDropper: EyeDropperInterface

  constructor() {
    if (NativeEyeDropper.isSupported()) {
      this.eyeDropper = new NativeEyeDropper()
      return
    }

    this.eyeDropper = new CanvasEyeDropper()
  }

  async open(): Promise<Color> {
    return this.eyeDropper.open()
  }
}
