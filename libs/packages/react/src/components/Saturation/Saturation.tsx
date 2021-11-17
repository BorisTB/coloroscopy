import React, { useMemo } from 'react'
import { Color, ColorInput } from '@coloroscopy/types'
import { isValidColor } from '@coloroscopy/validation'
import styled from '@emotion/styled'

export interface SaturationProps extends React.ComponentPropsWithRef<'div'> {
  color?: ColorInput
}

const mainColorHslH = 169

const Root = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`

const MainColor = styled.div`
  position: absolute;
  inset: 0;
  background: hsl(${mainColorHslH}, 100%, 50%);
`

const WhiteGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
`

const BlackGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
`

export const Saturation = React.forwardRef<HTMLDivElement, SaturationProps>(
  ({ color }, ref) => {
    const validColor = useMemo<Color>(
      () => (isValidColor(color) ? color : 'transparent'),
      [color]
    )

    return (
      <Root ref={ref}>
        <MainColor>
          <WhiteGradient>
            <BlackGradient>Saturation</BlackGradient>
          </WhiteGradient>
        </MainColor>
      </Root>
    )
  }
)
