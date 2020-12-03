import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { getPlants, getImages } from './api'
import Plant from './Plant'

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Image = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;

  display: flex;
  flex-direction: column;

  > img {
    width: 200px;
    height: 100px;
  }
`

const PlantsContainer = styled.div`
  margin: 50px auto;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

  return (
    <Root>
      <PlantsContainer>
        {plants.map((plant) => (
          <Plant plant={plant} />
        ))}
        <Plant />
      </PlantsContainer>
      <Container>
        {images.map((image) => (
          <Image>
            <span>{image.imageTaken}</span>
            <img src={image.imageUrl}></img>
          </Image>
        ))}
      </Container>
    </Root>
  )
}

export default App
