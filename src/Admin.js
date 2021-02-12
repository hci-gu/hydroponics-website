import React from 'react'
import styled from 'styled-components'
import Plant from './components/Plant'

import { useRecoilValue } from 'recoil'
import { plantsAtom } from './state'
import ImageList from './components/ImageList'

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const PlantsContainer = styled.div`
  margin: 50px auto;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`

function App() {
  const plants = useRecoilValue(plantsAtom)

  return (
    <Root>
      <PlantsContainer>
        {plants.map((plant, i) => (
          <Plant plant={plant} key={`Plant_${i}`} />
        ))}
        <Plant />
      </PlantsContainer>
      <ImageList />
    </Root>
  )
}

export default App
