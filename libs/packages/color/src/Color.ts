import {
  AlphaValue,
  Brightness,
  ColorInput,
  CssColorName,
  Hex,
  HexColor,
  Percentage,
  RgbaColor,
  RgbaObject,
  RgbColor,
  Value255
} from '@coloroscopy/types'
import {
  alphaValueToDecimal,
  getHexColorName,
  getRgbBrightness,
  rgbaObjectToRgbaString,
  rgbaObjectToRgbString,
  toHexString,
  toPercentageString,
  value255RgbaObjectToHex,
  value255ToPercentage
} from '@coloroscopy/utils'
import {
  isBrightnessLow,
  isNil,
  isRgbaObjectValue255
} from '@coloroscopy/validation'
import { CssColorNameParser, HexParser, RgbaParser } from './parsers'
import { ColorParser } from './ColorParser'

const defaultParsers = [
  new CssColorNameParser(),
  new HexParser(),
  new RgbaParser()
]

export class Color {
  private static parsers: ColorParser[] = [...defaultParsers]

  public static addParser(parser: ColorParser): void {
    this.parsers.unshift(parser)
  }

  private static parseValue(value: ColorInput): RgbaObject<Value255> | null {
    let currentValue: ColorInput | RgbaObject<Value255> | unknown = value
    let parsers = [...Color.parsers]
    let finishedParsers: ColorParser[] = []

    while (!isRgbaObjectValue255(currentValue) && parsers.length) {
      const parser = parsers.shift()

      if (parser) {
        const parsedValue = parser.parse(currentValue)

        if (!isNil(parsedValue)) {
          parsers = [...parsers, ...finishedParsers]
          currentValue = parsedValue
        }

        finishedParsers.push(parser)
      }
    }

    if (isRgbaObjectValue255(currentValue)) {
      return currentValue
    }

    console.error(`Couldn't find parser for value ${currentValue}`)

    return null
  }

  private rgba: RgbaObject<Value255> = { r: 0, g: 0, b: 0, a: 0 }

  private originalInput: ColorInput

  constructor(color: ColorInput) {
    this.originalInput = color

    const parsedInput = Color.parseValue(color)

    if (!isNil(parsedInput)) {
      this.rgba = parsedInput
    }
  }

  private updateRgba(update: Partial<RgbaObject<Value255>>): void {
    this.rgba = {
      ...this.rgba,
      ...update
    }
  }

  public setAlpha(alpha: AlphaValue): void {
    this.updateRgba({
      a: alphaValueToDecimal(alpha)
    })
  }

  public hasSomeTransparency(): boolean {
    return this.rgba.a < 1
  }

  public isLight(): boolean {
    return !this.isDark()
  }

  public isDark(): boolean {
    return isBrightnessLow(this.getBrithness())
  }

  public getBrithness(): Brightness {
    return getRgbBrightness(this.rgba)
  }

  public hasName(): boolean {
    return !!this.getName()
  }

  public getName(): CssColorName | undefined {
    return getHexColorName(this.toHex())
  }

  public toRgb(): RgbaObject {
    return { ...this.rgba }
  }

  public toRgbString(): RgbColor | RgbaColor {
    if (this.hasSomeTransparency()) {
      return rgbaObjectToRgbaString(this.rgba)
    }

    return rgbaObjectToRgbString(this.rgba)
  }

  public toPercentageRgb(): RgbaObject<Percentage> {
    return {
      r: value255ToPercentage(this.rgba.r),
      g: value255ToPercentage(this.rgba.g),
      b: value255ToPercentage(this.rgba.b),
      a: this.rgba.a
    }
  }

  public toPercentageRgbString(): RgbColor | RgbaColor {
    const percentageRgb = this.toPercentageRgb()
    const formattedRgb = {
      r: toPercentageString(percentageRgb.r),
      g: toPercentageString(percentageRgb.g),
      b: toPercentageString(percentageRgb.b),
      a: percentageRgb.a
    }

    if (this.hasSomeTransparency()) {
      return rgbaObjectToRgbaString(formattedRgb)
    }

    return rgbaObjectToRgbString(formattedRgb)
  }

  public toHex(): Hex {
    return value255RgbaObjectToHex(this.rgba)
  }

  public toHexString(): HexColor {
    return toHexString(this.toHex())
  }
}
