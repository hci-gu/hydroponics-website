import React from 'react'
import styled from 'styled-components'
import ImageDisplayer from '../components/ImageDisplayer'
import { useRecoilValue } from 'recoil'
import { imagesAtom, plantsAtom } from '../state'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Root = styled.div`
 

background-color: #FAFAFA;
padding-bottom: 20%;

@media (min-width: 1900px) {
  flex-direction: row;
  

}

`



const PlantsContainer = styled.div`
  margin: 10%;
  margin-top: 5%;
  display: grid;
  grid-gap: 2%;
  padding-right: 20%;

  
`


function App() {
  const images = useRecoilValue(imagesAtom)
  const plants = useRecoilValue(plantsAtom)

  return (
    <Root>
      <Header/>
      {/* <Sidebar/> */}
        <PlantsContainer>
          {plants.map((plant) => (
            <ImageDisplayer plant={plant} images={images} />
          ))}
        </PlantsContainer>  
    </Root>
  )
}

export default App
