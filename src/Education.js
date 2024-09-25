

import Aos from 'aos';
import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';

function Education() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container-fluid mt-5" id='education' data-aos="fade-up">
      <div className="container">
        <div className="abt text-center fw-bold pb-5">
          <p>Education</p>
        </div>
        <div className='row text-center g-5'>
          <div className='col-md-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.campusoption.com/images/colleges/gallery/21_03_17_050221_College.PNG" />
              <Card.Body>
                <Card.Title className='fw-bold'>Under Graduation<br></br>Bsc.Computer Science<br></br>
                  2020-2023
                </Card.Title>
                <Card.Text>
                  <p>
                    NMSSVN College of <br></br>Arts and Science<br></br>
                    Nagamalai Pudhukottai<br></br>
                    Madurai,Tamilnadu.
                  </p>
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://ceoaschool.com/madurai/assets/images/newimages/transport.jpg" />
              <Card.Body>
                <Card.Title className='fw-bold'>
                  <p>HSE<br></br>
                    2018-2020


                  </p>
                </Card.Title>
                <Card.Text>
                  C.E.O.A Matriculation <br></br> Hr Sec School<br></br>
                  kosakulam<br></br>
                  Madurai-625017.
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.vL6h68-ebhoyPUgVOtjV_AHaFP&pid=Api&P=0&h=180" />
              <Card.Body>
                <Card.Title className='fw-bold'>SSLC<br></br>2017-2018</Card.Title>
                <Card.Text>
                  C.E.O.A Matriculation <br></br> Hr Sec School<br></br>
                  kosakulam<br></br>
                  Madurai-625017.
                </Card.Text>


              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Education;
