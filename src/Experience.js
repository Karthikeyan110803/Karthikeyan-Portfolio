import { useEffect } from 'react';
import exp from '../src/experienceicon.png';
import Accordion from 'react-bootstrap/Accordion';
import Aos from 'aos';

function Experience() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
   
    <div className='container-fluid mt-5 mb-5 pt-md-5' id='experience' data-aos="fade-up">
     <div className='abt text-center pb-5 fw-bold'>
      <p>Professional Experience</p>
     </div>
      <div className='container'>
        <div className='row'>
        <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header ><p className='fw-bold'>Edex Tech IT Solutions</p>
      
      </Accordion.Header>
      <Accordion.Body>
      <ul>
                    <li>Developing front end website architecture</li>
                    <li>Designing user interactions on web pages</li>
                    <li>Developing back-end website applications</li>
                    <li>Creating servers and databases for functionality</li>
                    <li>Ensuring cross-platform optimization for mobile phones</li>
                    <li>Ensuring responsiveness of applications</li>
                    <li>Seeing through a project from conception to finished product.</li>
                    <li>Designing and developing APIs</li>
                    <li>Meeting both technical and consumer needs.
                    </li>
                  </ul>
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>
        </div>
      </div>
    </div>
   



  );
}
export default Experience;