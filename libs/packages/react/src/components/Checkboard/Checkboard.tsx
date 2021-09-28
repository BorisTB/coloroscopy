import React from 'react'
import styled from '@emotion/styled'
import { toPx } from '../../../../utils/src/formatting'

export interface CheckboardProps extends React.ComponentPropsWithRef<'div'> {
  size?: number
}

const Root = styled.div<CheckboardProps>`
  background-image: linear-gradient(
      to right,
      rgba(192, 192, 192, 0.75),
      rgba(192, 192, 192, 0.75)
    ),
    linear-gradient(to right, black 50%, white 50%),
    linear-gradient(to bottom, black 50%, white 50%);
  background-blend-mode: normal, difference, normal;
  background-size: ${({ size }) => `${toPx(size)} ${toPx(size)}`};
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
