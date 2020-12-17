import { Card } from 'antd'
import moment from 'moment'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

const Plant = ({ plant }) => {
  return <Card title={`${plant.name} - ${plant.id}`}></Card>
}

export default Plant
