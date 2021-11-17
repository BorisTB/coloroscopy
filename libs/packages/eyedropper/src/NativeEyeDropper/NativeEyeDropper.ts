import { EyeDropper } from '../EyeDropper'
import { ColorType } from '@coloroscopy/types'
import { EyeDropperInterface } from '../EyeDropperInterface'

interface ColorSelectionOptions {}

interface EyeDropperApi {
  new ()
  open(options?: ColorSelectionOptions): Promise<ColorType>
}

declare global {
  interface Window {
    EyeDropper: EyeDropperApi
  }
}

export class NativeEyeDropper implements EyeDropperInterface {
  static isSupported = () => 'EyeDropper' in window

  private eyeDropper: EyeDropperApi

  constructor() {
    if (!NativeEyeDropper.isSupported()) {
      throw new Error('EyeDropper API is not supported on this platform')
    }

    this.eyeDropper = new window.EyeDropper()
  }

  open = () => {
    return this.eyeDropper.open()
  }
}
