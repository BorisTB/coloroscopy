import React from 'react'
import styled from '@emotion/styled'

export type HueDirection = 'horizontal' | 'vertical'

export interface HueProps extends React.ComponentPropsWithRef<'div'> {
  direction?: HueDirection
}

const Root = styled.div`
  position: relative;
  width: 500px;
  height: 40px;
`

const Container = styled.div<{ direction?: HueDirection }>`
  position: relative;
  padding: 0 2px;
  height: 100%;
  background: linear-gradient(
    to ${(props) => (props.direction === 'vertical' ? 'top' : 'right')},
    #f00 0%,
    #ff0 17%,
    #0f0 33%,
    #0ff 50%,
    #00f 67%,
    #f0f 83%,
    #f00 100%
  );
`

export const Hue = React.forwardRef<HTMLDivElement, HueProps>(
  ({ direction, ...props }, ref) => {
    return (
      <Root ref={ref} {...props}>
        <Container direction={direction}>Hue</Container>
      </Root>
    )
  }
)

Hue.defaultProps = {
  direction: 'horizontal'
}
