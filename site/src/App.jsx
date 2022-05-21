import styled from '@emotion/styled'

import Header from './components/Header'
import Compare from './components/Compare'
import Button from './components/Button'

import github from './assets/github.png'

const Wrapper = styled.div`
  background-color: #252427;
  color: #cccccc;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5% 15%;
`

const Container = styled.div`
  max-width: 1200px;
  position: relative;
`

const Github = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  
  img {
    height: clamp(2rem, 10vw, 3rem);
  }

  transition: transform 0.3s;

  &:hover {
    transform: rotate(15deg);
  }
`

function App() {

  return (
    <Wrapper>
      <Container>

      <Header />
      <Compare />
      <Button />

      <Github href="https://www.github.com/givensuman/colorblind-theme">
        <img
          src={github}
          alt="Github Logo"
        />
      </Github>

      </Container>
    </Wrapper>
  )
}

export default App
