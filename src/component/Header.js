      import Button from 'react-bootstrap/Button';
import { CiLogin } from "react-icons/ci";
import logo from '../logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Badge } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="" expand="lg">
      <Container me-3>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" width={190} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <NavDropdown className='titleNav' title="HOME" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Home 1 <Badge bg='secondary'>new</Badge>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Home 3 <Badge bg='secondary'>new</Badge> </NavDropdown.Item>
            </NavDropdown>
            {/*  */}
            <NavDropdown className='titleNav' title="PAGES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Error 4</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contect Us
              </NavDropdown.Item>
            </NavDropdown>
            {/*  */}
            <NavDropdown className='titleNav' title="LISTING" id="basic-nav-dropdown">
              <NavDropdown.Item className='aa' href="#action/3.1">Add Listing <Badge bg='secondary'>new</Badge></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Listing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Listing Grid</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Listing Map</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Listing Details</NavDropdown.Item>
            </NavDropdown>
            {/*  */}
            <NavDropdown className='titleNav' title="BLOG" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='rk-1' href="/home">Contect Us</Nav.Link>
            <div className='d-flex align-items-center'>
              <Button className=' rk-2 d-flex align-items-center onlyTextBtn' > <CiLogin />LogOut</Button>
              <Button className='rt d-flex align-items-center' variant="primary"><span>+</span>Add listing</Button>{' '}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>

  )
}


export default Header