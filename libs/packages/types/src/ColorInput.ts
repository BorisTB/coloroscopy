import { ColorType } from './ColorType'

/**
 * @description Possible color input for coloroscopy tools
 * @example
 *   function handleSelectedColor(color: ColorInput) {}
 */
export type ColorInput = ColorType | string
