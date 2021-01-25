import { Card, Image } from 'antd'
import moment from 'moment'
import styled from 'styled-components'

const IMAGE_WIDTH = 2000
const PLANT_WIDTH = 400

const ImageCropper = styled.div`
  width: ${PLANT_WIDTH}px;
  height: 300px;
  overflow: hidden;
`

const Plant = ({ plant, images }) => {
  if (images.length === 0) return <div>empty</div>

  const imageStyle = {
    marginTop: 25,
    marginLeft: -(PLANT_WIDTH * plant.imagePosition) + 50,
    width: IMAGE_WIDTH,
  }

  return (
    <Card title={`${plant.name} - ${plant.id}`}>
      <ImageCropper>
        <Image style={imageStyle} src={images[0].imageUrl} />
      </ImageCropper>
    </Card>
  )
}

export default Plant
