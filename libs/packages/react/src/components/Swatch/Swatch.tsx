import React, { useMemo } from 'react'
import { ColorType, ColorInput } from '@coloroscopy/types'
import { isValidColor } from '@coloroscopy/validation'

export interface SwatchProps extends React.ComponentPropsWithRef<'div'> {
  color: ColorInput
}

export const Swatch = React.forwardRef<HTMLDivElement, SwatchProps>(
  ({ color }, ref) => {
    const validColor = useMemo<ColorType>(
      () => (isValidColor(color) ? color : 'transparent'),
      [color]
    )

    return <div ref={ref}>{validColor}</div>
  }
)
