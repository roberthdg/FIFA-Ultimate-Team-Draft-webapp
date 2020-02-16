import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons' 

library.add(fab); 

function Header()  {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Navbar.Brand href="#home">
                <img
                    alt="FUT Logo"
                    src={process.env.PUBLIC_URL + '/img/fut_champions_logo.png'}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {'  '} <strong>FIFA</strong> Ultimate Team Draft
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="dark"/>

            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="#lineup">Build Your Ultimate Team</Nav.Link>
                    <Nav.Link href="#">Rules</Nav.Link>
                    <Nav.Link href="#">Leaderboard</Nav.Link>
                    <Nav.Link href="#" className="d-block d-md-none" >Login</Nav.Link>
                </Nav>
                  
            <Button variant="outline-light d-none d-md-block">Login</Button>

            <Nav.Link href="#">
                <FontAwesomeIcon className="icon d-none d-md-block" icon={['fab', 'github']} size="2x"/>
            </Nav.Link>

            </Navbar.Collapse>

        </Navbar>
      </>
    )
}

export default Header