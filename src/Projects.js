import Aos from 'aos';
import React, { useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className='container-fluid mt-5 mb-5 pt-md-5' id='projects' data-aos="fade-up">
     <div className='abt text-center pb-5 fw-bold'>
      <p>Projects</p>
     </div>
     <div className='row'>
     <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>ENCORE</Accordion.Header>
        <Accordion.Body>
       <p>Project Name: <b>Encore - Payslip Panel</b><br></br>
<b>Description:</b>
Developed and implemented a comprehensive payslip panel as part of the Encore project.<br></br> 
The panel was designed to generate, manage, and distribute employee payslips efficiently. Key features included:</p>
<ul>
   <li>Integration with payroll systems for accurate data retrieval.</li>
   <li>Automated payslip generation with customizable templates.</li>
   <li>Secure access for employees to view and download payslips.</li>
   <li>implemented role-based access control to ensure data privacy.</li>
   <li>Optimized user interface for a seamless and intuitive experience.</li>
   <li>Enhanced system performance and reduced processing time for large datasets.</li>
   <p><b>Technologies Used:</b> [ Vue,Spring boot,SQL]</p>

</ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='mt-3'>
        <Accordion.Header>EDUVERSE</Accordion.Header>
        <Accordion.Body>
      <p>Project Name: <b>Eduverse - Domain Name Acquisition Platform</b><br></br>
<b>Description:</b>
Contributed to the development of Eduverse, a platform focused on providing users with the ability to search,<br></br> 
register, and manage domain names, similar to services like GoDaddy
. Key features of the platform included:</p>
<ul>
    <li>Domain name search functionality with support for various top-level domains (TLDs).</li>
    <li>Integration with domain registration APIs for real-time availability and registration.  </li>
    <li>User account management for streamlined domain purchases and renewals   </li>
    <li>Secure payment processing and automated invoicing.</li>
    <li>Dashboard for users to manage domain settings, DNS configurations, and renewals.</li>
    <li>Scalability to handle high volumes of domain queries and transactions.</li>
    <p><b>Technologies Used:</b> [ Vue,Nuxt.JS,Spring boot,SQL]</p>
</ul>
        </Accordion.Body>
      </Accordion.Item>
</Accordion>
     </div>
     </div>
  )
}

export default Projects