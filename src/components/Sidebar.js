import { Link } from 'react-router-dom';
import {Button } from 'antd'

function SideBar() {
    return (
        <div>
            <p
                style={{ border: 0, width: `300px`, }}
                headStyle={{ border: 0, textAlign: `left` }}
                bodyStyle={{ textAlign: `left`, }}
            >
                <b>Om projektet</b> <br></br>
                Det här projektet utforskar metoder för att studera och kontrollera växter med hjälp av digital teknik. Resultaten från forskningen kommer användas i forskning inom människa-dator interaktion.
            </p>

            <Button type="primary" htmlType="submit"><Link to="/info">Läs vidare</Link></Button>
        </div>
    )
}

export default SideBar
