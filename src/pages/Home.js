import React from 'react'
import styled from 'styled-components'
import Plant from '../components/Plant'
import {Button } from 'antd'
import { Link } from 'react-router-dom'
import { usePlants } from '../hooks'
import Header from '../components/Header'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  border: 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 100px;
  margin-top: 40px;
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
  const plants = usePlants()

  return (
    <Root>
      <Header/>
      <Container>
        <PlantsContainer>
          {plants.map((plant, i) => (
            <Plant plant={plant} key={`Plant_${i}`} />
          ))}
        </PlantsContainer>
        
      </Container>
    </Root>
  )
}

export default App
