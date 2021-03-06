import React from 'react'
import styled from 'styled-components'
import Plant from '../components/Plant'
import { PageHeader, Button } from 'antd'
import { Link } from 'react-router-dom'
import { usePlants } from '../hooks'

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

const HeaderRow = styled.div`
  flex-direction: row;
  display: flex;
  background-color: white;
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
  const plants = usePlants()

  return (
    <Root>
      <HeaderRow>
        <PageHeader
          style={{}}
          className="site-page-header"
          title="The hydroponics project"
        />
      </HeaderRow>
      <Container>
        <PlantsContainer>
          {plants.map((plant, i) => (
            <Plant plant={plant} key={`Plant_${i}`} />
          ))}
        </PlantsContainer>
        <InfoContainer>
          <div>
            <p
              style={{ border: 0, width: `300px` }}
              headStyle={{ border: 0, textAlign: `left` }}
              bodyStyle={{ textAlign: `left` }}
            >
              <b>Om projektet</b> <br></br>
              Det här projektet utforskar metoder för att studera och
              kontrollera växter med hjälp av digital teknik. Resultaten från
              forskningen kommer användas i forskning inom människa-dator
              interaktion.
            </p>
            <Button type="primary" htmlType="submit">
              <Link to="/info">Läs vidare</Link>
            </Button>
          </div>
        </InfoContainer>
      </Container>
    </Root>
  )
}

export default App
