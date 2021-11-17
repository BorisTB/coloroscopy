import styled from '@emotion/styled'
import { Alpha, Hue, Saturation } from '@coloroscopy/react'

export interface AppProps {}

const Layout = styled.div`
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const App: React.FC<AppProps> = () => {
  return (
    <Layout>
      <Center>
        <Saturation />
      </Center>
      <Center>
        <Hue />
        <Alpha />
      </Center>
    </Layout>
  )
}
