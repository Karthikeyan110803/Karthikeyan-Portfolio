import exp from '../src/experienceicon.png';

function Experience() {
  return (
    <div className="row mt-5 pt-4 p-3 d-flex">
      <div className="col-md-6 ">
        <p className="ex fw-bold  fs-3">Professional Experience</p>
        <p className='fw-bold'> EdexTech Solutions</p>
        <p className='fw-bold'>Junior Developer - present</p>
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

        <div className="col-md-6">
         <img style={{height: 500, width: 500,}} src={exp}></img>
        </div>
      </div>
    </div>

  );
}
export default Experience;