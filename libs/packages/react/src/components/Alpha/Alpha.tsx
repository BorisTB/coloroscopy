import React from 'react'
import styled from '@emotion/styled'
import { HueDirection } from '../Hue'
import { Checkboard } from '../Checkboard'

export interface AlphaProps extends React.ComponentPropsWithRef<'div'> {}

const rgb = {
  r: 120,
  g: 20,
  b: 190
}

const Root = styled.div`
  position: relative;
  width: 500px;
  height: 40px;
`

const Background = styled.div`
  position: absolute;
  inset: 0;
`

const MainColor = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0) 0%,
    rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1) 100%
  );
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

export const Alpha = React.forwardRef<HTMLDivElement, AlphaProps>(
  (props, ref) => {
    return (
      <Root ref={ref} {...props}>
        <Background>
          <Checkboard />
        </Background>
        <MainColor />
      </Root>
    )
  }
)
