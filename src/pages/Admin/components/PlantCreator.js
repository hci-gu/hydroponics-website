import { Card, Form, Input, InputNumber, DatePicker, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import moment from 'moment'
import { useCreatePlant, useDeletePlant, useUpdatePlant } from '../../../hooks'

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

const DeleteButton = (plant) => {
  const deletePlant = useDeletePlant()

  return (
    <DeleteOutlined
      type="danger"
      htmlType="submit"
      onClick={() => deletePlant(plant)}
    >
      delete
    </DeleteOutlined>
  )
}

const CreatePlant = () => {
  const createPlant = useCreatePlant()
  const onFinish = async (values) => {
    await createPlant(values)
  }

  return (
    <Card title="Create plant">
      <Form {...layout} name="basic" initialValues={{}} onFinish={onFinish}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Temperature" name="temperature">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Light hours" name="lightHours">
          <InputNumber />
        </Form.Item>
        <Form.Item label="pH" name="ph">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Position in image" name="imagePosition">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Growth Start" name="growthStart">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Other information" name="information">
          <Input.TextArea />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

const PlantCreator = ({ plant }) => {
  const updatePlant = useUpdatePlant()
  const onFinish = async (values) => {
    updatePlant({
      ...values,
      id: plant.id,
    })
  }

  if (!plant) {
    return CreatePlant()
  }

  return (
    <Card
      title={`${plant.name} - ${plant.id}`}
      extra={<DeleteButton plant={plant} />}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{
          ...plant,
          growthStart: moment(plant.growthStart),
          growthEnd: moment(plant.growthEnd),
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Temperature" name="temperature">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Light hours" name="lightHours">
          <InputNumber />
        </Form.Item>
        <Form.Item label="pH" name="ph">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Position in image" name="imagePosition">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Growth Start" name="growthStart">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Growth End" name="growthEnd">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Other information" name="information">
          <Input.TextArea />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default PlantCreator
