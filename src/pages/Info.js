import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header';
import { Typography} from 'antd';
const { Title, Paragraph} = Typography;


const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  border: 20px;
`

const Container = styled.div`
  margin: 5%;
  padding-left: 10%;
  padding-right: 50%;
  padding-bottom: 30%;
`

function App() {
  
  return (
  <Root>
    <Header/>
    <Container>
             <p>
             Det här projektet utforskar metoder för att studera och kontrollera växter med hjälp av digital teknik. Resultaten från forskningen kommer användas i forskning inom människa-dator interaktion. Projektet fokuserar i synnerhet på växtodling ur ett visuellt perspektiv.
             </p>
    </Container>
  </Root>
  )
}

export default App
