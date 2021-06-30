import React, { useEffect } from 'react'
import { Card, Image as AntImage, Slider } from 'antd'
import moment from 'moment'
import styled from 'styled-components'
import { useImagesForPlant } from '../hooks'

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

let imageCache = {}

const Plant = ({ plant }) => {
  const [images, index, setIndex] = useImagesForPlant(plant)

  const imageStyle = {
    top: -Y_OFFSET,
    left: -(PLANT_WIDTH * plant.imagePosition) - X_OFFSET,
    width: IMAGE_WIDTH,
  }

  useEffect(() => {
    const from = Math.max(0, index - 10)
    const to = Math.min(images.length, index + 10)

    for (let i = from; i < to; i++) {
      if (!imageCache[i]) {
        const preloadImage = new Image()

        preloadImage.src = images[i].imageUrl
        imageCache[i] = preloadImage
      }
    }
  }, [images, index])

  if (images.length === 0 && !images[index])
    return (
      <Card
        hoverable
        style={{ width: `${CARD_WIDTH}px`, textAlign: 'center' }}
        title={`Den här plantan är påväg!`}
      >
        <ImageCropper>
          <AntImage
            style={{ width: 260, top: 160, left: 250 }}
            src="https://i.imgur.com/1KmQLKx.png"
            preview={false}
          />
        </ImageCropper>
        <Card.Grid hoverable={false} style={gridStyle}>
          {' '}
          <Meta title="pH" description={`${plant.ph}`} />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {' '}
          <Meta
            title="Temperatur"
            description={`${plant.temperature ? plant.temperature : '-'} c°`}
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {' '}
          <Meta
            title="Ljustimmar"
            description={`${plant.lightHours ? plant.lightHours : '-'}/dag`}
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          {' '}
          <Meta
            title="Planterad"
            description={`${moment(plant.growthStart).format('YYYY-MM-DD')}`}
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={bigGrid}>
          <Meta
            title="Annan information"
            description={`${plant.information}`}
          />
        </Card.Grid>
      </Card>
    )

  const imageToDisplay = images[index]
  return (
    <Card
      hoverable
      style={{ width: `${CARD_WIDTH}px`, textAlign: 'center' }}
      title={`${plant.name} - ${plant.id}`}
    >
      <ImageCropper>
        <AntImage
          style={imageStyle}
          src={imageToDisplay.imageUrl}
          preview={false}
        />
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

      <Card.Grid hoverable={false} style={gridStyle}>
        {' '}
        <Meta title="pH" description={`${plant.ph}`} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        {' '}
        <Meta
          title="Temperatur"
          description={`${
            imageToDisplay.temperature
              ? imageToDisplay.temperature.toFixed(2)
              : '-'
          } c°`}
        />
      </Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        {' '}
        <Meta
          title="Ljustimmar"
          description={`${plant.lightHours ? plant.lightHours : '-'}/dag`}
        />
      </Card.Grid>
      <Card.Grid hoverable={false} style={gridStyle}>
        {' '}
        <Meta
          title="Planterad"
          description={`${moment(plant.growthStart).format('YYYY-MM-DD')}`}
        />
      </Card.Grid>
      <Card.Grid hoverable={false} style={bigGrid}>
        <Meta title="Annan information" description={`${plant.information}`} />
      </Card.Grid>
    </Card>
  )
}

export default Plant
