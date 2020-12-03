import { Card, Form, Input, InputNumber, DatePicker, Button } from 'antd'
import { updatePlant, createPlant, deletePlant } from './api'
import { DeleteOutlined } from '@ant-design/icons'
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

const DeleteButton = (plant) => {
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
  const onFinish = async (values) => {
    await createPlant(values)
  }

  return (
    <Card title="Create plant">
      <Form {...layout} name="basic" initialValues={{}} onFinish={onFinish}>
        <Form.Item label="Id" name="id">
          <InputNumber />
        </Form.Item>
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
        <Form.Item label="Growth Start" name="growthStart">
          <DatePicker />
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

const Plant = ({ plant }) => {
  const onFinish = async (values) => {
    await updatePlant({
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
        <Form.Item label="Growth Start" name="growthStart">
          <DatePicker />
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

export default Plant
