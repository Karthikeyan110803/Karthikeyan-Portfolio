import Aos from 'aos';
import React, { useEffect } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
  return (
    <div className='container-fluid mt-5 mb-5 pt-md-5' id='Skills' data-aos="fade-up">
        <div className='container text-center g-5 '>
            <div className='row'>
    <div className='abt text-center pb-5 fw-bold'>
     <p>Skills</p>
    
     </div>
<div>
<Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Front-End">
        <div className='row'>
            <div className='col'>
                <img src='https://static.vecteezy.com/system/resources/previews/001/416/705/non_2x/html5-emblem-orange-shield-and-white-text-vector.jpg' width={200} height={200}></img>
            </div>
            <div className='col'>
                <img src='https://tse2.mm.bing.net/th?id=OIP.zzMiltvXJNgFUDhNAXAYFAHaFj&pid=Api&P=0&h=180'></img>
            </div>
            <div className='col'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvD_eGgBXkruGyfn6_oXRrH1AM_07sB9glQg&s'></img>
            </div>
            <div className='col'>
                <img src='https://tse2.mm.bing.net/th?id=OIP.ZZaV8f0-sI1l6dcdApuE6gHaEK&pid=Api&P=0&h=180'></img>
            </div>
            <div className='col'>
                <img src='https://www.sportsengineers.com/wp-content/uploads/2015/05/react-logo-570x570.png' width={190} height={190}></img>
            </div>
            
        </div>
      </Tab>
      <Tab eventKey="profile" title="Back-end">
        <div className='row'>
       <div className='col mt-5'>
        <img src='https://logos-download.com/wp-content/uploads/2016/10/Java_logo.png' width={180} height={180}></img>
       </div>
       <div className='col mt-5'>
        <img src='https://cdn1.iconfinder.com/data/icons/programing-development-8/24/node_js_logo-1024.png' width={170} height={170}></img>
       </div>
       <div className='col mt-5'>
        <img src='https://rajputhim.github.io/images/20220607_001840_0001.png' width={260} height={260}></img>
       </div>
       <div className='col'>
        <img src='https://pluspng.com/img-png/python-logo-png-big-image-png-2400.png' width={290} height={290}></img>
       </div>
       </div>
      </Tab>
      <Tab eventKey="longer-tab" title="Database">
       <div className='row g-5 mt-5 '>
        <div className='col'>
            <img src='https://static-00.iconduck.com/assets.00/database-mysql-icon-1954x2048-08uox8qu.png'width={200} height={200}></img>
        </div>
        <div className='col'>
            <img src='https://pluspng.com/img-png/logo-mongodb-png-mongo-db-badge-sticker-600.png'width={220} height={220}></img>
        </div>
       </div>
      </Tab>
      
    </Tabs>
</div>
     </div>
     </div>
     </div>
  )
}

export default Skills