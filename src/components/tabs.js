import React from "react"
import Nav from 'react-bootstrap/Nav'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'


const Tabscit = ()=>{
    return(
        <TabContainer id="left-tabs-example" defaultActiveKey="first">
        
        <Nav variant="tabs" className="dflex">
            <Nav.Item>
            <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
        </Nav>

        <TabContent>
            <TabPane eventKey="first">
            first
            </TabPane>
            <TabPane eventKey="second">
            2nd
            </TabPane>
        </TabContent>

</TabContainer>
    )
}
export default Tabscit

