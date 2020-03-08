import React, {useState} from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons' 
import { Link } from 'react-router-dom'

library.add(fab); 

function Header()  {
 
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar className="nav" collapseOnSelect expanded={expanded} expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <img
                    alt="FUT Logo"
                    src={process.env.PUBLIC_URL + '/img/fut_champions_logo.png'}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {'  '} <strong>FUT</strong>draft
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />

            <Navbar.Collapse id="responsive-navbar-nav" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to ="/">Build Your Ultimate Team</Nav.Link>
                    <Nav.Link as={Link} to ="/rules">Rules</Nav.Link>
                    <Nav.Link as={Link} to ="/leaderboard" >Leaderboard</Nav.Link>
                    <Nav.Link className="d-lg-none" href="https://github.com/roberthdg/FIFA-Ultimate-Team-Draft-webapp">Github Project</Nav.Link>
                </Nav>
                            
                <Nav.Link href="https://github.com/roberthdg/FIFA-Ultimate-Team-Draft-webapp">
                        <FontAwesomeIcon className="icon d-none d-md-block" icon={['fab', 'github']} size="2x"/>
                </Nav.Link>

            </Navbar.Collapse>  
        </Navbar>
    )
}

export default Header