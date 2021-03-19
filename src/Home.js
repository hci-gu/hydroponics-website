import React from 'react'
import styled from 'styled-components'
import ImageDisplayer from './components/ImageDisplayer'
import { useRecoilValue } from 'recoil'
import { imagesAtom, plantsAtom } from './state'

import { PageHeader } from 'antd'

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 100px;
`

const HeaderRow = styled.div`
  flex-direction: row;
  display: flex;
  margin-left: 100px;
  margin-top: 30px;
`

const InfoContainer = styled.div`
  width: 30%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: right;
  padding-left: 50px;

  @media (max-width: 800px) {
    margin: 0 auto;
    width: 90%;
    grid-template-columns: 1fr;
  }
`
const PlantsContainer = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 50px;
  justify-items: left;

  @media (max-width: 800px) {
    margin: 0 auto;
    width: 90%;
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
`

function App() {
  const images = useRecoilValue(imagesAtom)
  const plants = useRecoilValue(plantsAtom)

  return (
    <Root>
      <HeaderRow>
        <PageHeader
          className="site-page-header"
          title="The hydroponics project"
        />
      </HeaderRow>
      <Container>
        <PlantsContainer>
          {plants.map((plant) => (
            <ImageDisplayer plant={plant} images={images} />
          ))}
        </PlantsContainer>
        <InfoContainer>
          {/* <h4 title={`About the hydroponics project`}>
          About the hydroponics project
          </h4> */}
          <p
            style={{ border: 0, width: `300px` }}
            headStyle={{ border: 0, textAlign: `left` }}
            bodyStyle={{ textAlign: `left` }}
          >
            <b>About the hydroponics project</b> <br></br>
            This project aims to explore methods for studying and controlling
            plants with digital technology that will be used in human computer
            interaction research.
          </p>
        </InfoContainer>
      </Container>
    </Root>
  )
}

export default App
