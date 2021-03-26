import React from 'react'
import styled from 'styled-components'

import { useRecoilValue } from 'recoil'
import { plantsAtom } from './state'
import { Typography, Divider } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;


const Root = styled.div`
height: '100vh',
min-height : '100vh'
background-color: #FAFAFA;

padding-left: 10%;
padding-right: 10%;
padding-top: 5%;

`


const TextBox = styled.div`


  // background-color: yellow;
 
`

function App() {
  
  return (
  <Root>
<TextBox>
    <Typography>
      <Title level={3}>Om projektet</Title>
        <Paragraph>
        Det här projektet utforskar metoder för att studera och kontrollera växter med hjälp av digital teknik. Resultaten från forskningen kommer användas i forskning inom människa-dator interaktion. Projektet är i synnerhet intresserad utav växtodling ur ett visuellt perspektiv.
      </Paragraph>
      <Title level={3}>Metod</Title>
        <Paragraph>
          Detta projekt studerar hydroponiska odlingar där vi använder oss av Deep water culture(DWC)metoden.
        </Paragraph>
        <Title level={3}>Information om planteringarna</Title>
        <Paragraph>
        <strong>Om inget annat nämns för de unika plantorna så ges växterna: </strong>   
        <br></br>
        2ml pH-down
        <br></br>
        15ml grow
        <br></br>
        10ml micro
        <br></br>
        5ml bloom.
        <br></br>
        7l vatten
        </Paragraph>
        <Title level={3}>Utrustning</Title>
        <Paragraph>
        <strong>Växtbelysning:</strong> Sansi LED Växtlampa E27 - 15W 
        <br></br>
        <strong>Luftpump:</strong> BOYU S-2000 Syrepump 480l/tim
        </Paragraph>
    </Typography>
    </TextBox>
    </Root>
  )
}

export default App
