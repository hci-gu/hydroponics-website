import React from 'react'
import styled from 'styled-components'
import ImageDisplayer from './components/ImageDisplayer'
import { useRecoilValue } from 'recoil'
import { imagesAtom, plantsAtom } from './state'

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const PlantsContainer = styled.div`
  margin: 50px auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 50px;
  justify-items: center;

  @media (max-width: 800px) {
    margin: 0 auto;
    width: 90%;
    grid-template-columns: 200px 2fr 1fr;
    grid-gap: 50px;
  }

  > div {
    width: 100%;
    height: 300px;
    background-color: magenta;
  }
`

function App() {
  const images = useRecoilValue(imagesAtom)
  const plants = useRecoilValue(plantsAtom)

  return (
    <Root>
      <PlantsContainer>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {/* {plants.map((plant) => (
          <ImageDisplayer plant={plant} images={images} />
        ))} */}
      </PlantsContainer>
    </Root>
  )
}

export default App
