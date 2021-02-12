import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useRecoilState } from 'recoil'
import { imagesAtom } from '../state'
import styled from 'styled-components'
import { Pagination } from 'antd'
import { getImages } from '../api'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Image = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;

  display: flex;
  flex-direction: column;

  > img {
    width: 200px;
    height: 100px;
  }
`

const ImageList = () => {
  const [images, setImages] = useRecoilState(imagesAtom)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(25)

  useEffect(() => {
    const getData = async () => {
      const _images = await getImages(page - 1, pageSize)
      setImages(_images)
    }
    getData()
  }, [page, pageSize, setImages])

  return (
    <>
      <Container>
        {images.map((image, i) => (
          <Image key={`Image_${image.imageTaken}`}>
            <span>{moment(image.imageTaken).format('YYYY-MM-DD HH:mm')}</span>
            <img src={image.imageUrl}></img>
          </Image>
        ))}
      </Container>
      <Pagination
        defaultCurrent={page}
        total={5000}
        pageSize={pageSize}
        onShowSizeChange={(_, size) => setPageSize(size)}
        onChange={(value) => setPage(value)}
      />
    </>
  )
}

export default ImageList
