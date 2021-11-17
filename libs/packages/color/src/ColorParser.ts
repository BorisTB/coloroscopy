import { RgbaObject, Value255 } from '@coloroscopy/types'

export abstract class ColorParser {
  public abstract parse(value: unknown): RgbaObject<Value255> | undefined | null
}
