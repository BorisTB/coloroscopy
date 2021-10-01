import { CssVariableName } from '@coloroscopy/types'

interface ThemeOptions {
  root?: HTMLElement
}

export class Theme {
  private root: HTMLElement

  constructor({ root = document.documentElement }: ThemeOptions = {}) {
    this.root = root
  }

  private setVariableValue(name: CssVariableName, value: string): void {
    this.root.style.setProperty(name, value)
  }

  private getVariableValue(name: CssVariableName): string {
    return getComputedStyle(this.root).getPropertyValue(name)
  }
}
