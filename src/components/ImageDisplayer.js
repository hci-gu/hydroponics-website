import { Card, Image } from 'antd'
import moment from 'moment'
import styled from 'styled-components'

const IMAGE_WIDTH = 2000
const PLANT_WIDTH = 400

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const bigGrid = {
  width: '100%',
};

const ImageCropper = styled.div`
width: 800px;
height: 1200px;
overflow: hidden;
`
const { Meta } = Card;
const Plant = ({ plant, images }) => {
  if (images.length === 0) return <div>empty</div>

  const imageStyle = {
    marginBottom:100,
    marginLeft: -(PLANT_WIDTH * plant.imagePosition) *2 -260,
    width: 2000,
  }

  return (
    <Card hoverable  style={{ width: 809, textAlign:'center'}} title={`${plant.name} - ${plant.id}`}>
    <Card.Grid hoverable={false} style={gridStyle}> <Meta title='pH' description={`${plant.ph}`} /></Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}> <Meta title='Temperature' description={`${plant.temperature}c°`} /></Card.Grid>
     <Card.Grid hoverable={false} style={gridStyle}> <Meta title='Light hours' description={`${plant.lightHours}/day`} /></Card.Grid>
     <Card.Grid hoverable={false} style={gridStyle}> <Meta title='Growth start' description={`${plant.ph}`} /></Card.Grid>
     <Card.Grid hoverable={false} style={bigGrid}> <Meta title='Other information' description={`${plant.information}`} /></Card.Grid>
      <ImageCropper>
        <Image style={imageStyle} src={images[0].imageUrl} />
      </ImageCropper>
    </Card>
  )
}

export default Plant


