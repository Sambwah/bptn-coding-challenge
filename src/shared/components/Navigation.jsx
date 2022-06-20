import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/">The Movie App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Popular</Link>
                        <Link className="nav-link" to="/liked">Liked</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}