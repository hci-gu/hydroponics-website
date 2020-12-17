import { Card, Image } from 'antd'
import moment from 'moment'

const Plant = ({ plant, images }) => {
  return (
    <Card title={`${plant.name} - ${plant.id}`}>
      {images.length > 0 && (
        <Image width={'100%'} src={images[images.length - 1].imageUrl} />
      )}
    </Card>
  )
}

export default Plant
