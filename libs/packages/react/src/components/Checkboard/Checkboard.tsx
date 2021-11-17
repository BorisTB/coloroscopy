import React from 'react'
import styled from '@emotion/styled'
import { toPx } from '@coloroscopy/utils'

export interface CheckboardProps extends React.ComponentPropsWithRef<'div'> {
  size?: number
}

const darkColor = '#D7D8DD'
const lightColor = '#FFF'

const Root = styled.div<CheckboardProps>`
  position: absolute;
  inset: 0;
  background: repeating-conic-gradient(
      ${darkColor} 0% 25%,
      ${lightColor} 0% 50%
    )
    50% / ${({ size }) => `${toPx(size)} ${toPx(size)}`};
  background-blend-mode: normal, difference, normal;
`

export const Checkboard = React.forwardRef<HTMLDivElement, CheckboardProps>(
  ({ children, ...props }, ref) => {
    return (
      <Root {...props} ref={ref}>
        {children}
      </Root>
    )
  }
)

Checkboard.defaultProps = {
  size: 10
}
