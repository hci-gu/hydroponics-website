import React, { useState, useEffect } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { Pagination } from 'antd'
import { getImages } from '../../../api'
import { useImagePagination, useImages } from '../../../hooks'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Image = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;

  > img {
    width: 200px;
    height: 100px;
  }
`

const ImagePagination = () => {
  const { images, page, maxPages, pageSize, setPageSize, setPage } =
    useImagePagination()

  return (
    <>
      <Container>
        {images.map((image, i) => (
          <Image key={`Image_${image.imageTaken}`}>
            <span>{moment(image.imageTaken).format('YYYY-MM-DD HH:mm')}</span>
            <img src={image.imageUrl} alt="Plant"></img>
          </Image>
        ))}
      </Container>
      <Pagination
        defaultCurrent={page}
        total={maxPages * pageSize}
        pageSize={pageSize}
        onShowSizeChange={(_, size) => setPageSize(size)}
        onChange={(value) => setPage(value)}
      />
    </>
  )
}

export default ImagePagination
