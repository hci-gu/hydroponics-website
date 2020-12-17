import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { getPlants, getImages } from './api'
import ImageDisplayer from './components/ImageDisplayer'

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
  const [images, setImages] = useState([])
  const [plants, setPlants] = useState([])
  useEffect(() => {
    const getData = async () => {
      const [_images, _plants] = await Promise.all([getImages(), getPlants()])
      setImages(_images)
      setPlants(_plants)
    }
    getData()
  }, [])
  console.log({ plants, images })

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
