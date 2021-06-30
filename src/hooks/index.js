import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { imagesAtom, lastUpdateAtom, isLoadingAtom, plantsAtom } from '../state'
import * as api from '../api'
import { useState } from 'react'

export const usePlants = () => {
  const [lastUpdate] = useAtom(lastUpdateAtom)
  const [plants, setPlants] = useAtom(plantsAtom)

  useEffect(() => {
    const getData = async () => {
      const newPlants = await api.getPlants()
      setPlants(newPlants)
    }
    getData()
  }, [setPlants, lastUpdate])

  return plants.sort(
    (a, b) => new Date(b.growthStart) - new Date(a.growthStart)
  )
}

export const useImagesForPlant = (plant) => {
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const getData = async () => {
      const plantImages = await api.getImagesForPlant(plant)
      setImages(plantImages.reverse())
      if (plantImages.length) setIndex(plantImages.length - 1)
    }
    getData()
  }, [plant, setImages])

  return [images, index, setIndex]
}

export const useImagePagination = () => {
  const [imageResponse, setImageResponse] = useAtom(imagesAtom)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(25)
  const [maxPages, setMaxPages] = useState(1)

  useEffect(() => {
    const getData = async () => {
      const newImageResponse = await api.getImages(page - 1, pageSize)
      setImageResponse(newImageResponse)
      setMaxPages(Math.ceil(newImageResponse.count / newImageResponse.limit))
    }
    getData()
  }, [setImageResponse, page, pageSize, setMaxPages])

  return {
    images: imageResponse.images,
    page,
    maxPages,
    pageSize,
    setPageSize,
    setPage,
  }
}

export const useApiUpdate = (apiFunction) => {
  const [, setIsLoading] = useAtom(isLoadingAtom)
  const [, setLastUpdate] = useAtom(lastUpdateAtom)

  const runFunction = async (args) => {
    setIsLoading(true)
    await apiFunction(args)
    setLastUpdate(new Date())
    setIsLoading(false)
  }

  return runFunction
}

export const useDeletePlant = () => useApiUpdate(api.deletePlant)
export const useCreatePlant = () => useApiUpdate(api.createPlant)
export const useUpdatePlant = () => useApiUpdate(api.updatePlant)
