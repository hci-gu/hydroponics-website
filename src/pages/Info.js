import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header';
import { Typography} from 'antd';
const { Title, Paragraph} = Typography;


const Root = styled.div`
  background-color: #fafafa;
  height:100vh;
  position: absolute;
  height: 100%;
  width: 100%;
`


const Grid = styled.div`
padding:80px; 
display: grid;
grid-template-columns: 33% 33% 33%;
  
`

const TextBox = styled.div`
padding: 20px;

  
`



function App() {
  
  return (
  <Root>
    <Header/>
    
    <Grid>
      <TextBox>
            <p>
              Det här projektet utforskar metoder för att studera och kontrollera växter med hjälp av digital teknik. Resultaten från forskningen kommer användas i forskning inom människa-dator interaktion. Projektet fokuserar i synnerhet på växtodling ur ett visuellt perspektiv.
            </p>
      </TextBox>
    </Grid>
   
  </Root>
  )
}

export default App
