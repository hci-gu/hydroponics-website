import React, { useEffect, useState } from 'react'
import { Card, Image, Slider } from 'antd'
import moment from 'moment'
import styled from 'styled-components'
import { getImagesForPlant } from '../api'

const CARD_WIDTH = 760

const X_OFFSET = 30
const Y_OFFSET = 300
const IMAGE_WIDTH = 1600
const PLANT_WIDTH = 800

const gridStyle = {
  width: '25%',
  textAlign: 'center',
}

const bigGrid = {
  width: '100%',
}

const ImageCropper = styled.div`
  width: ${CARD_WIDTH}px;
  height: 700px;
  overflow: hidden;

  position: relative;

  > div {
    display: block;
  }
  > div > img {
    position: absolute;
  }
  > span {
    width: 150px;
    padding: 5px;
    position: absolute;
    z-index: 100;
    background-color: black;
    color: white;
    left: calc(50% - 75px);
    bottom: 0;
  }
`
const { Meta } = Card

const PlantImages = ({ plant }) => {
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const getData = async () => {
      const _images = await getImagesForPlant(plant)
      setImages(_images.reverse())
      setIndex(_images.length - 1)
    }
    getData()
  }, [setImages, setIndex])

  if (images.length === 0) return <div>empty</div>

  const imageStyle = {
    top: -Y_OFFSET,
    left: -(PLANT_WIDTH * plant.imagePosition) - X_OFFSET,
    width: IMAGE_WIDTH,
  }

  const imageToDisplay = images[index]
  return (
    <Card
      hoverable
      style={{ width: `${CARD_WIDTH}px`, textAlign: 'center' }}
      title={`${plant.name} - ${plant.id}`}
    >
      <Card.Grid hoverable={false} style={gridStyle}>
        {' '}
        <Meta title="pH" description={`${plant.ph}`} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        {' '}
        <Meta title="Temperature" description={`${plant.temperature}c°`} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        {' '}
        <Meta title="Light hours" description={`${plant.lightHours}/day`} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        {' '}
        <Meta
          title="Growth start"
          description={`${moment(plant.growthStart).format('YYYY-MM-DD')}`}
        />
      </Card.Grid>
 
      <ImageCropper>
        <Image style={imageStyle} src={imageToDisplay.imageUrl}  preview={false}/>
      </ImageCropper>
      <Slider
        value={index}
        min={0}
        max={images.length - 1}
        onChange={(val) => setIndex(val)}
        tipFormatter={(val) => (
          <strong>
            {moment(imageToDisplay.imageTaken).format('YYYY-MM-DD HH:mm')}
          </strong>
        )}
        tooltipVisible
      />
           <Card.Grid hoverable={false} style={bigGrid}>
        {' '}
        <Meta title="Other information" description={`${plant.information}`} />
      </Card.Grid>
      
    </Card>
  )
}

export default PlantImages
