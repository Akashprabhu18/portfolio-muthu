import React from "react";
import "./App.css";
import { FaGears } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { GrCertificate } from "react-icons/gr";
import { FaSquareGithub } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa6";
import { FcPhone } from "react-icons/fc";
import { ImLinkedin } from "react-icons/im";
import { RiLinkUnlinkM } from "react-icons/ri";
import DownloadButton from './DownloadButton';
import SendButton from "./SendButton";

function App() {
  return (
    <div>
      <Header />
      <About />
      <CurriculumActivities />
      <Projects />
      <Certifications />
      <IndustrialExposure />
      <Contact />
    </div>
  );
}
//----------------------- Header----------------------//
const Header = () => (
  <div id="header">
    <div className="container">
      <nav>
        <ul>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#curriculam">Curriculam activities</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#Certifications">Certifications</a>
          </li>
          <li>
            <a href="#ind-expo">Industrial Exposure</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="image">
        {/* <img src="/images/profile.png" alt="Profile" width="250px" height="250px" /> */}
      </div>
      <div className="header-text ">
        <h1 className="blur">
          Hi, I'm <span>Muthu Pandiyan</span>
        </h1>
        <p className="slide-in"><span className="react"style={{color:"#62DEFC", fontWeight:"900"}}>React Js</span> Developer</p>
      </div>
    </div>
  </div>
);
//----------------------- Header----------------------//
//----------------------- About----------------------//
const About = () => {
  const openTab = (tabname) => {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }

    document.getElementById(tabname).classList.add("active-tab");
    document.getElementById(`${tabname}-link`).classList.add("active-link");
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img
              src="./images/1234.gif"
              alt="About GIF"
            />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Hi, I'm Muthu pandiyan from Sivakasi. Now I'm pursuing Computer
              Science and Engineering at AAA College of Engineering and
              Technology, Sivakasi.
            </p>
            <div className="tab-titles">
              <p
                id="skills-link"
                className="tab-links active-link"
                onClick={() => openTab("skills")}
              >
                Skills
              </p>
              <p
                id="education-link"
                className="tab-links"
                onClick={() => openTab("education")}
              >
                Education
              </p>
              <p
                id="languages-link"
                className="tab-links"
                onClick={() => openTab("languages")}
              >
                Languages known
              </p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li>
                  <span>React Js</span>
                  <br />
                  Intermediate level
                </li>
                <li>
                  <span>HTML 5/CSS 3</span>
                  <br />
                  Intermediate level
                </li>
                <li>
                  <span>JavaScript</span>
                  <br />
                  Intermediate level
                </li>
                <li>
                  <span>Bootstrap</span>
                  <br />
                  Intermediate level
                </li>
                <li>
                  <span>MUI</span>
                  <br />
                  Intermediate level
                </li>
                <li>
                  <span>React Boostrap</span>
                  <br />
                  Intermediate level
                </li>
                <li>
                  <span>Power BI</span>
                  <br />
                  Intermediate level
                </li>
                </ul>
            </div>
            <div className="tab-contents" id="languages">
              <ul>
                <li>
                  <span>Tamil</span>
                  <br />
                  Speak, Read, Write
                </li>
                <li>
                  <span>English</span>
                  <br />
                  Speak, Read, Write
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li>
                  <span>2022 Final year</span>
                  <br />
                  AAA College of Engineering and Technology, Sivakasi
                  <br />
                  8.31 CGPA
                </li>
                <li>
                  <span>2018-2019 XII th</span>
                  <br />
                  SHNV Hr Secondary School, Sivakasi
                  <br />
                  63%
                </li>
                <li>
                  <span>2017-2018</span>
                  <br />
                  SHNV Hr Secondary School, Sivakasi
                  <br />
                  89%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//----------------------- About----------------------//
//----------------------- CurriculumActivities----------------------/
const CurriculumActivities = () => (
  <div id="curriculam">
    <div className="container">
      <h1 className="sub-title">Curriculam activities</h1>
      <div className="activities-list">
        <div>
          <FaGears style={{ fontSize: "2em", color:"orange"}} />
          <h2>WorkShop</h2>
          <p>
            Participated in a one-day workshop on IoT With Android App,
            organized by the Dept of ECE in association with IETE on 30-04-2022.
            <br />
            <a href="#">Learn more</a>
          </p>
        </div>
        <div>
          <FaGears style={{ fontSize: "2em" ,color:"orange"}} />
          <h2>WorkShop</h2>
          <p>
            Participated in a two-day workshop on Research tools and Techniques
            for materials, organized by Madurai Diraviyam Thayumanavar College.
            <br />
            <a href="#">Learn more</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);
//----------------------- CurriculumActivities----------------------//
//----------------------- Projects----------------------//
const Projects = () => (
  <div id="projects">
    <div className="container">
      <h1 className="sub-title">Projects</h1>
      <div className="activities-list">
        <div>
          <GrProjects style={{ fontSize: "1.2em",color:"orange" }} />
          <h2>Mini project</h2>
          <p>
            We developed a module that consists of GSM, GPS, and Accelerometer
            which are used to detect and intimate the accident occurrences to
            the respective people involved in accidents.
            <br />
            <a href="/report print.pdf">Get Report</a>
          </p>
        </div>
        <div>
          <GrProjects style={{ fontSize: "1.2em",color:"orange" }} />
          <h2>Final Year Project</h2>
          <p>
            We developed an intelligent Voice assistant using the OpenAI
            language model to understand and respond to user queries
            effectively.
            <br />
            <a href="/Project_Report.pdf">Get Report</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);
//----------------------- Projects----------------------//
//----------------------- Certifications----------------------//

const Certifications = () => (
  <div id="Certifications">
    <div className="container">
      <h1 className="sub-title">Certifications</h1>
      <div className="activities-list">
        <div>
          <GrCertificate style={{ fontSize: "1.2em",color:"orange" }} />

          <h2>AWS</h2>
          <p>
            Completed a course of AWS cloud Foundation.
            <br />
            <a href="/AWS Certificate.pdf">View Certificate</a>
          </p>
        </div>
        <div>
          <GrCertificate style={{ fontSize: "1.2em",color:"orange" }} />

          <h2>OOPS with JAVA</h2>
          <p>
            Participated and completed OOPS concepts with JAVA.
            <br />
            <a href="/JAVA Certificate.pdf">View Certificate</a>
          </p>
        </div>
        <div>
          <GrCertificate style={{ fontSize: "1.2em",color:"orange" }} />

          <h2>Python-beginner</h2>
          <p>
            completed Python Python-beginner course provided by Kaggle
            <br />
            <a href="/JAVA Certificate.pdf">View Certificate</a>
          </p>
        </div>
        <div>
          <GrCertificate style={{ fontSize: "1.2em",color:"orange"}} />

          <h2>AWS</h2>
          <p>
            Completed a course of AWS cloud practitioner.
            <br />
            <a href="/JAVA Certificate.pdf">View Certificate</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);
//----------------------- Certifications----------------------//
//----------------------- IndustrialExposure----------------------//

const IndustrialExposure = () => (
  <div id="ind-expo">
    <div className="container">
      <h1 className="sub-title">Industrial Exposure</h1>
      <div className="activities-list1 cont ">
      <div className="demo">
          <div  style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1 style={{ margin: 0 }}>SAVIC TECHNOLOGIES</h1>
            <h3 style={{ margin: 0, textAlign: "end", color:"greenyellow" }}>Nov 2023 - At present</h3>
          </div>
  
          <p>
          Currently interning as a Deputy Associate Consultant at SAVIC Technologies in Rayagiri for a 5-month period. My main focus is on front-end development, specifically working with React.js to create a web application for an internal project. Additionally, I've contributed to developing components for another internal project.
            <br />
              </p>
        </div>
      </div>
      <div className="work-list">
        <div className="work">
          <img src="./images/download.jfif" alt="Internship" />
          <div className="layer">
            <h3>Internship</h3>
            <p>Undergone Internship in Sense connect, Sivakasi</p>
            <a href="#">
              <RiLinkUnlinkM />
            </a>
          </div>
        </div>
        <div className="work">
          <img src="images/images.jfif" alt="Industrial Visit" />
          <div className="layer">
            <h3>Industrial Visit</h3>
            <p>Undergone Industrial Visit at Soften Technologies, Cochin</p>
            <a href="#">
              <RiLinkUnlinkM />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
//----------------------- IndustrialExposure----------------------//
//----------------------- Contact----------------------//


const Contact = () => (
  <div id="contact">
    <div className="container">
      <div className="row">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <p>
            <FaPaperPlane  style={{ fontSize: "1.2em",color:"orange", marginRight:"10px"}}/>
            mailto.muthu18@gmail.com
          </p>
          <p>
            <FcPhone style={{ fontSize: "1.2em", marginRight:"10px"}}/>
            9360873805
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/muthu-pandiyan-g-82995a248">
              <ImLinkedin style={{ fontSize: "1.2em",color:"blue"}} />
            </a>
            <a href="https://github.com/Akashprabhu18">
              <FaSquareGithub style={{ fontSize: "1.3em",color:"white"}} />
            </a>
            
          </div>
          <a href="./public/Muthu pandiyan-2024.pdf" download className="btn btn2">
            <DownloadButton/>
          </a>
        </div>
        <div className="contact-right">
          <form>
            <input type="text" name="name" placeholder="Your name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
            ></textarea>
           <SendButton/>
          </form>
        </div>
      </div>
    </div>
  </div>
);
//----------------------- Contact----------------------//

export default App;
