import React, {useRef, useEffect, useState} from 'react';
import {TweenMax, Power3, TimelineLite} from  "gsap";
import {FaClipboard, FaLaptop, FaAdobe} from "react-icons/fa";

// import headerLogo from "../src/utils/logo-green-small.png";

//Logo
import logo from "../src/utils/my-logo.png";

//photos
import photo1 from "../src/utils/project1.png";
import photo2 from "../src/utils/project2.png";
import photo3 from "../src/utils/project3.png";

//stylesheet
import './App.css';

//components
import Testimony from "./components/Testimony";
import About from "./components/About";
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBox from "./components/NavBox";
//import Client from './components/Client';

function App() {
  // let headerTxt = useRef(null);
  // let content = useRef(null);

  const [state, setState] = useState({
    isSeen: false
  });

  const toggleButton = (e) => {
    // if (e.target.checked){
    //   console.log('button clicked');
    // }
    setState({
      isSeen: !state.isSeen,
    });
  }

  let tl = new TimelineLite();

  useEffect(() => {
    // //TweenMax.to(headBigTxt, 0, {css: {visibility: "hidden", opacity: 0 }});
    // TweenMax.to(content, 0, {css: {visibility: "visible",}});
    // // TweenMax.from(headerTxt, 0.2, {css: {visibility: "hidden", opacity: 0}});
    // //TweenMax.to(headerTxt, 0.3, {css: {visibility: "visible",}});
    // //Header text animations
    // const headerTxtFirst = headerTxt.children[0].children[0];
    // const headerTxtSecond = headerTxtFirst.nextSibling;
    // const headerP = headerTxt.children[1];
    // const headerBtn = headerTxt.children[2]; 
    // console.log(headerTxtFirst,headerTxtSecond);


    // tl.staggerFrom([headerTxtFirst.children, headerTxtSecond], 1, {
    //   y: 44,
    //   ease: Power3.easeOut,
    //   delay: .8
    // }, .15);
    
  });
  return (
    <div className="container">
      <header className="header" >
       <div className="header-nav">
        <img src={logo} alt="my logo" className="header-logo"/>
       {/* <h1 className="header-logoTxt">zedx</h1> */}
       
       {/* responsive button */}
       <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" onClick={(e) => toggleButton(e)}/>
        <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
        </label>
       </div>

       {state.isSeen === true && (
         <NavBox />
       )}
       
        <nav>
          <ul className="nav-list">
          <li className="nav-item"><a className="nav-link" href="#">home</a></li>
          <li className="nav-item"><a className="nav-link" href="#services">services</a></li>
          <li className="nav-item"><a className="nav-link" href="#case">case study</a></li>
          <li className="nav-item"><a style ={{color: 'white'}} className="nav-link" href="#hire">
            hire us</a>
            </li>
          </ul>
        </nav>
       </div>
       <div className="header-text">
         <h1 className="header-bigText header-bigText--animate">
           <div>
           <span className="header-bigText-1">we build beautiful and</span>
           </div>
           <div>
           <span className="header-bigText-2">reliable web solutions</span>
           </div>
         </h1>
         <p className="header-p">
           <span>we strongly believe that communications, trust and transparency</span>  
           <span>are the essential elements of successful business relationship</span>  
           <span>ready for the journey</span>
         </p>
         <div className="header-btn">
          <button className="header-btn-1">learn more</button>
          <button className="header-btn-2">our projects</button>
         </div>
       </div>
      </header>

      <section className="services mt" id="services">
        <div className="services-headText">
          <h1>Our services</h1>
          <h3>
            <span>we feel very strong about our Skills when it comes to planning, designing</span> 
            <span>and coding application. Here is what we love to do.</span> 
          </h3>
        </div>
      <div className="services-cards">
      <div className="services-card">
         <div className="services-img">
          <FaClipboard className="services-logo"/>
         </div>
         <h1 className="services-cardText">business & product designs</h1>
         <div>
           <p className="services-text">
             Analyse business and product concepts at start-ups workshops or ongoing Projects
             audits and prepare a visible and sensible product roadMap for achieving a perfect
              market
           </p>
         </div>
         <div className="services-button">
           <button className="services-btn">learn more</button>
          </div>
       </div>

       <div className="services-card">
         <div className="services-img">
          <FaLaptop className="services-logo"/>
         </div>
         <h1 className="services-cardText">web & mobile development</h1>
         <div>
           <p className="services-text">
             plan, develop and test high quality web applications using reactJs, NodeJs, javascript,
             typeScript, HTML5 and SASS/ CSS3 frameworks and native mobile languages.
           </p>
         </div>
         <div className="services-button">
           <button className="services-btn">learn more</button>
          </div>
       </div>

       <div className="services-card">
         <div className="services-img">
          <FaAdobe className="services-logo"/>
         </div>
         <h1 className="services-cardText">uX & uI designs</h1>
         <div>
           <p className="services-text">
             sketch information and simple mock-ups, convert them into clickable prototypes
             and finish with usable interface designs to deliver a good and reliable user experience 
           </p>
         </div>
         <div className="services-button">
           <button className="services-btn">learn more</button>
          </div>
       </div>
      </div>
      </section>

      {/* about us section */}
      <section className="about">
        <About />
      </section>

      {/* portfolio section */}
      <section className="work">
        <div className="work-cards">
          <div className="work-card">
            <figure className="work-img">
              <img src={photo1} alt={`${photo1}`} className="work-photo work-photo--2"/>
            </figure>
          </div>

          <div className="work-card">
            <figure className="work-img">
              <img src={photo2} alt={`${photo1}`} className="work-photo-1"/>
            </figure>
          </div>

          <div className="work-card">
            <figure className="work-img">
              <img src={photo3} alt={`${photo1}`} className="work-photo work-photo--3"/>
            </figure>
          </div>
        </div>
        <div className="header-p work-p" style={{color: '#333'}}>
            <p>we use cutting edge technology to develop scalable application that run on the
              web, desktop and android/ios platforms.
            </p>
          </div>
          <div className="work-btn" >
            <button className="header-btn-2">view project</button>
          </div>
      </section>

      {/* process section */}
      <section className="process" id="case">
        <Process />
      </section>
      {/* hire us section */}
      <section className="contact" id="hire">
        <h2>contact us</h2>
        <Contact />
      </section>
      {/* Testimonial section */}
      <section className={"testimonial"}>
        <Testimony />
      </section>
      {/* client section */}
      {/* <section className="client"> */}
        {/* <Client /> */}
      {/* </section> */}
      {/* footer section */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
