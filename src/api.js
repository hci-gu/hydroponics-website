import axios from 'axios'

const { REACT_APP_API_URL } = process.env

export const getImages = async (offset = 0, limit = 25) => {
  const response = await axios.get(
    `${REACT_APP_API_URL}/images?offset=${offset * limit}&limit=${limit}`
  )

  return response.data
}

export const getPlants = async () => {
  const response = await axios.get(`${REACT_APP_API_URL}/plants`)

  return response.data
}

export const getImagesForPlant = async (plant) => {
  const response = await axios.get(
    `${REACT_APP_API_URL}/plants/${plant.id}/images`
  )

  return response.data
}

export const updatePlant = async (plant) => {
  const response = await axios.put(
    `${REACT_APP_API_URL}/plants/${plant.id}`,
    plant
  )

  return response.data
}

export const deletePlant = async ({ plant }) => {
window.confirm()

  console.log(plant)
  console.log(`${REACT_APP_API_URL}/plants/${plant.id}`)
  const response = await axios.delete(`${REACT_APP_API_URL}/plants/${plant.id}`)

  return response.data
}

export const createPlant = async (plant) => {
  const response = await axios.post(`${REACT_APP_API_URL}/plants`, plant)

  return response.data
}
