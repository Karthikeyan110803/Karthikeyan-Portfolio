import Aos from "aos";
import { useEffect } from "react";

function About() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
    return (
        <div>
            <div className="row mt-5 pt-4 p-3 " id="about" data-aos="fade-up">
                <div className=" abt col-md-6 text-center align-self-center fw-bold ">
                    <p>What I do..!</p>
                   
                </div>
                <div className="col-md-6 pt-3 fs-5">
                <ul>
                        <li>Well-proficient in Front-end website development with Vue.js, Vue-Bootstrap, Quasar framework ,
                            React.js creating responsive user interfaces and enchancing user experiences.</li><br></br>
                        <li>Good knowledge in developing backend appilications in Java using SpringBoot Framework and Javascript using Express.js,
                            Node.js handling REST APIs and implements business logic.</li><br></br>
                        <li> Experience in working with PostgreSQL and MongoDB as a database for efficient in data storage and retrieval.
                        </li><br></br>
                        <li>Hands-on Experience in version control using Git and GitHub, managing code repositories and colloborating with other developers.</li><br></br>
                        <li>Familiarity with Agile Methodology, participating in ceremonies like weekly-standups, Sprint Planning, Sprint Review and Retrospective.</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}
export default About;