import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({loggedIn, changeLoggedinStatus}) {

    //console.log('loggedIn from Header: ', loggedIn);
    
    return(
        <div className="App container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Energy CompAIR</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="myProfile">My Profile</Nav.Link>
                    <Nav.Link 
                        onClick={loggedIn ? changeLoggedinStatus : null} 
                        href='/Authenticate'
                        >
                        {loggedIn ? "Logout" : "Login"}
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
      </div>
    )

}


export default Header