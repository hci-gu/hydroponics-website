import React from 'react'
import styled from 'styled-components'
import InfoContent from '../components/InfoContent'
import Header from '../components/Header'

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
    <Header/>
    {/* <InfoContent/> */}
  </Root>
  )
}

export default App
