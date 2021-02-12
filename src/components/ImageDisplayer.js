import { Card, Image } from 'antd'
import moment from 'moment'
import styled from 'styled-components'

const CARD_WIDTH = 600

const X_OFFSET = 300
const Y_OFFSET = 300
const IMAGE_WIDTH = 1600
const PLANT_WIDTH = 600

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
`
const { Meta } = Card
const Plant = ({ plant, images }) => {
  if (images.length === 0) return <div>empty</div>

  const imageStyle = {
    top: -Y_OFFSET,
    left: -(PLANT_WIDTH * plant.imagePosition) - X_OFFSET,
    width: IMAGE_WIDTH,
  }

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
        <Meta title="Growth start" description={`${plant.ph}`} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={bigGrid}>
        {' '}
        <Meta title="Other information" description={`${plant.information}`} />
      </Card.Grid>
      <ImageCropper>
        <Image style={imageStyle} src={images[0].imageUrl} />
      </ImageCropper>
    </Card>
  )
}

export default Plant
