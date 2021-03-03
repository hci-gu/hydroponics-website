import React from 'react'
import styled from 'styled-components'
import ImageDisplayer from './components/ImageDisplayer'
import { useRecoilValue } from 'recoil'
import { imagesAtom, plantsAtom } from './state'

import { Card} from 'antd'


const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const PlantsContainer = styled.div`
  margin: 50px auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  justify-items: center;

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
    
      <PlantsContainer>
        <Card
          
          style={{ boxShadow: "1px 1px 4px 0px  rgba(0, 0, 0, 0.2)", width: `760px`, backgroundColor: '#ffe7ba',  }}
          headStyle={{ border: 0, textAlign: `center` }}
          bodyStyle={{ textAlign: `left`,}}
          title={`About the hydroponics project`}
          >
            This project aims to explore methods for studying and controlling plants with digital technology that will be used in human computer interaction research. </Card>
        <Card
          style={{ boxShadow: "1px 1px 4px 0px  rgba(0, 0, 0, 0.2)", width: `760px`, textAlign: `center` , backgroundColor: '#d9f7be', }}
           headStyle={{border: 0 }}
          title={`Notes`}
          >
               </Card>
    
        {plants.map((plant) => (
          <ImageDisplayer plant={plant} images={images} />
        ))}
      </PlantsContainer>
    </Root>
  )
}

export default App
