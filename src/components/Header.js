import styled from 'styled-components'
import { PageHeader, Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const HeaderRow = styled.div`
  flex-direction: row;
  background-color: white;
  padding-left: 10%;
  padding-right: 20%;

`

function Header() {

    const location = useLocation()

    return (

        <HeaderRow >

            {location.pathname === '/' ?
                <PageHeader
                    title="The hydroponics project"
                    extra={[
                        <Button key="1" type="primary">
                            <Link to="/info">Om projektet</Link>
                        </Button>,
                    ]}
                >
                </PageHeader> : location.pathname === '/info' ?
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="Om projektet"
                >
                </PageHeader>:
                <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="Admin"
            >
            </PageHeader>
            }
        </HeaderRow>

    )
}

export default Header
