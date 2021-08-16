import React from 'react'
import styled from 'styled-components'

import PlantCreator from './components/PlantCreator'
import ImagePagination from './components/ImagePagination'
import { usePlants } from '../../hooks'
import Header from '../../components/Header'

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
  const plants = usePlants()

  return (
    <Root>
      <Header/>
      <PlantsContainer>
        {plants.map((plant) => (
          <PlantCreator plant={plant} key={`Plant_${plant.id}`} />
        ))}
        <PlantCreator />
      </PlantsContainer>
      <ImagePagination />
    </Root>
  )
}

export default App
