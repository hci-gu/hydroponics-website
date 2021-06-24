import React from 'react'
import styled from 'styled-components'

import { Typography} from 'antd';
const { Title, Paragraph} = Typography;


const Root = styled.div`
height: '100vh',
min-height : '100vh'
background-color: #FAFAFA;

padding-left: 10%;
padding-right: 10%;
padding-top: 5%;
`


const TextBox = styled.div` 
`

function App() {
  
  return (
  <Root>
    <TextBox>
        <Typography>
          <Title level={3}>Om projektet</Title>
            <Paragraph>
            Det här projektet utforskar metoder för att studera och kontrollera växter med hjälp av digital teknik. Resultaten från forskningen kommer användas i forskning inom människa-dator interaktion. Projektet fokuserar i synnerhet på växtodling ur ett visuellt perspektiv.
          </Paragraph>
            <Title level={3}>Information om odlningen</Title>
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
            <br></br>
            <br></br>
            <strong>Övrig information </strong>   
            <br></br>
            Växterna odlas med hjälp av DWC(Deep Water Culture)metoden.
            <br></br>
            Odlingsmedierna(stenull) doppas i 1ml Root!t First Feed blandat med 2dl vatten innan frösättning. 
            <br></br>
            Luftpumpen är på lägsta styrka under hela växtfasen.
            <br></br>
            Växtbelysningen placeras 40cm ovanför växtbehållarnas lock.
            <br></br>
            Växtbelysningen placeras 20cm ovanför sticklingbehållarens golv. 
            <br></br>
            
            
            </Paragraph>
            <Title level={3}>Utrustning</Title>
            <Paragraph>
            <strong>Växtbelysning:</strong> Sansi LED Växtlampa E27 - 15W 
            <br></br>
            <strong>Luftpump:</strong> BOYU S-2000 Syrepump 480l/tim
            <br></br>
            <strong>Näring sticklingar</strong> Root!t First Feed
            <br></br>
            <strong>Näring plantor</strong> GHE FloraBloom, FloraMicro, FloraGro.
            <br></br>
            <strong>pH-reglerare</strong> Vitalink ESSENTIALS pH Down EASY och pH Up EASY        
            </Paragraph>
        </Typography>
      </TextBox>
  </Root>
  )
}

export default App
