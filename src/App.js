import logo from './logo.svg';
import './App.css';
import Home from './Home'
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from './about';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects  from './Projects';
import Contact from './Contact';
import Aos from 'aos';
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
<>
<Navbar expand="lg" className=" navbr bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><b className='nav'>Karthikeyan</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
     
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='container-fluid'>
      <Home/>
      <About/>
      <Experience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact />
    
     
      
    </div>
</>
    
   
  
  );
}

export default App;
