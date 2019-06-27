import { Navbar, Col, Row } from 'react-bootstrap'
import React from 'react'

export default function Nav(props) {
    return (
        <div>
            <Navbar expand="lg" style={{ background: '#00afca', color: '#fec50c', textAlign: 'center', padding: '8px' }}>

        
                <Col><h1>The Kazakhstan Klick</h1></Col>
                <Col><h5>{props.message}</h5></Col>
                <Row>
                    <Col> <h3>Score: {props.score}/12</h3></Col>
                    <Col> <h3>Top Score: {props.topScore}</h3></Col>
                </Row>
               
            </Navbar>
        </div>
    )
}
