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
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`

function App() {
  const images = useRecoilValue(imagesAtom)
  const plants = useRecoilValue(plantsAtom)

  return (
    <Root>
      <PlantsContainer>
        {plants.map((plant) => (
          <ImageDisplayer plant={plant} images={images} />
        ))}
      </PlantsContainer>
    </Root>
  )
}

export default App
