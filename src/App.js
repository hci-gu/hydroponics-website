import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const { REACT_APP_API_URL } = process.env

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

function App() {
  const [images, setImages] = useState([])
  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get(`${REACT_APP_API_URL}/images`)
      setImages(response.data)
    }
    getImages()
  }, [])

  return (
    <div>
      <Container>
        {images.map((image) => (
          <Image>
            <span>{image.imageTaken}</span>
            <img src={image.imageUrl}></img>
          </Image>
        ))}
      </Container>
    </div>
  )
}

export default App
