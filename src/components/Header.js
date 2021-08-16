import { PageHeader } from 'antd'
import styled from 'styled-components'

const HeaderRow = styled.div`
 

  
flex-direction: row;
display: flex;
background-color: white;
padding-left: 10%;
height: 20%;
width: 100%;`


function Header() {
    return (
        <HeaderRow>
            <PageHeader
                style={{}}
                className="site-page-header"
                title="The hydroponics project"
            />

        </HeaderRow>
    )
}

export default Header
