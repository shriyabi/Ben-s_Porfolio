import './App.css';
import Timeline from './Timeline.js';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ben from './ben_headshot.jpeg';
import high from './highschool.jpeg';
import cc from './ccbean.jpeg';
import ds from './dspython.jpeg';
import post from './Post.png'
import manage from './Management.png'
import every from './pyeveryone.jpeg';
import mich from './michigan.jpeg';
import { useSpring, animated } from '@react-spring/web'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import { useTransition, useSprings } from '@react-spring/web'
//import exported func from class

//imma be making this a template anyway so here we react!!

const his_majesty = {
  first_name: 'Benjamin',
  middle_name: 'M.',
  last_name: 'Hosler',
  url: ben,
  //imageSize: 120
};

function Dropdown() {
  const [open, setOpen] = useState(false);
  const hovered = () => {
    setOpen(true);
  };
  const left = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen pb-5">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
      <br></br>
      <div className="relative inline-block" onMouseEnter={hovered} onMouseLeave={left}>
        <button className="text-blue-950 hover:text-red-700 focus:outline-none text-xs md:text-sm lg:text-base">(231) 329-5940 </button>
        {open && (
          <div className="absolute bg-white rounded shadow-lg left-1/2 top-1/2 transform -translate-x-1/2">
            <ul className="list-none">
              <li><a href="sms:2313295940" className="block px-2 py-2 text-gray-800 hover:bg-gray-200 text-center"> Message </a></li>
              <li><a href="tel:2313295940" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-center"> Call</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

const Education1 = ({ school, degree, start, end, url, descriptions }) => {
  return (
    <div className="w-[80vw] bg-gray-300 border-red-700 flex flex-col justify-center items-center rounded-bl-lg rounded-tl-lg rounded-br-lg rounded-tr-lg shadow-xl shadow-red-700 mb-5 md:h-full w-1/3 md:mr-5 md:ml-5">
      <div className="text-l font-bold text-center text-red-700 pt-3 pl-3 pr-3 md:text-xl pt-5 pl-5 pr-5"> {school} </div>
      <img src={url} className="rounded-full w-1/2 h-auto md:w-1/2 m-2 lg:w-1/3 h-auto"></img>
      <div className="text-sm px-1 text-center font-semibold italic md:text-base pt-2 lg:text-lg">{degree}</div>
      <div className="text-xs text-center text-blue-950 px-1 leading-none pt-2 md:text-sm"> {start} </div>
      <div className="text-xs text-center text-blue-950 leading-none font-bold px-1 md:text-sm"> - </div>
      <div className="text-xs text-center text-blue-950 leading-none px-1 pb-2 md:text-sm"> {end} </div>
      <div className="text-xs text-center text-blue-950 px-4 py-2 md:text-sm lg:text-base">{descriptions}</div>
    </div>
  )
}

const Education2 = ({ school, degree, start, end, url, descriptions }) => {
  return (
    <div className="w-[80vw] bg-gray-300 border-red-700 flex flex-col justify-center items-center rounded-bl-lg rounded-tl-lg rounded-br-lg rounded-tr-lg shadow-xl shadow-red-700 mb-5 md:h-full w-1/3 md:ml-5 md:mr-5">
      <div className="text-l font-bold text-center text-red-700 pt-3 pl-3 pr-3 md:text-xl pt-5 pl-5 pr-5"> {school} </div>
      <img src={url} className="rounded-full w-1/2 h-auto md:w-1/2 m-2 lg:w-1/3 h-auto"></img>
      <div className="text-sm px-1 text-center font-semibold italic md:text-base pt-2 lg:text-lg">{degree}</div>
      <div className="text-xs text-center text-blue-950 px-1 leading-none pt-2 md:text-sm"> {start} </div>
      <div className="text-xs text-center text-blue-950 leading-none font-bold px-1 md:text-sm"> - </div>
      <div className="text-xs text-center text-blue-950 leading-none px-1 pb-2 md:text-sm"> {end} </div>
      <div className="text-xs text-center text-blue-950 px-4 py-2 md:text-sm lg:text-base">{descriptions}</div>
    </div>
  )
}

function Certifications({ name, issuer, date, url }) {
  return (
    <div className="relative mb-20 w-[80vw] h-1/4 bg-gray-300 border-red-700 flex flex-col px-2 justify-center rounded-bl-lg rounded-tl-lg rounded-br-lg rounded-tr-lg certi mb-5 md:w-1/4 md:mx-5 md:h-auto">
      <div className="text-base text-center font-semibold underline text-blue-950 md:text-lg lg:text-xl">{name}</div>
      <div className="text-sm text-center font-semibold text-red-700 italic md:text-base lg:text-lg">{issuer}</div>
      <div className="h-1/2 w-auto border-2 border-red-700 m-4 mb-20 self-center rounded-tl-sm rounded-bl-sm rounded-tr-sm rounded-br-sm cert md:h-auto">
        <img src={url} className="w-full h-full "></img>
      </div>
      <div className="text-right text-xs absolute bottom-0 right-0 px-2 my-5 md:text-sm lg:text-base">Issued {date}</div>
    </div>
  )
}

function Circle({ icon, href }) {
  {/*const props = useSpring({
    to: { transform: 'translateY(0px)' },
    from: { transform: 'translateY(-15px)' },
    config: { tension: 120, friction: 23 }, // Adjust these values
    loop: { reverse: true },
  });
return <animated.div style={props}>*/}
  return <animated.div>
    <a href={href}><div className="mr-7 border-2 border-solid border-red-700 p-2 text-blue-950 bg-gray-300 box-shadow hover:animate-bounce">
      {icon}
    </div> </a> </animated.div>
}

function Transition({ children, className }) {
  const styles = useSpring({
    loop: true,
    from: { opacity: 1, transform: 'scale(0.9)' },
    to: [
      { opacity: 1, transform: 'scale(1)' },
      { opacity: 1, transform: 'scale(0.9)' },
    ],
    config: { duration: 2000 }, // Adjust duration as needed
  });
  return (
    <animated.div className={className} style={styles}>
      {children}
    </animated.div>
  );
}

const Home = () => {
  const props = useSpring({
    to: { transform: 'translateY(0px)' },
    from: { transform: 'translateY(-10px)' },
    config: { tension: 120, friction: 23 }, // Adjust these values
    loop: { reverse: true },
  });
  return <animated.div style={props} className="flex items-center justify-center">
    <div className="bg-blue-950 h-4/5 flex justify-center items-center flex-col">
      <div className="flex flex-col h-auto w-[85vw] items-center justify-center md:w-4/5 md:h-auto lg:h-auto lg:w-3/5">
        <div className="bg-gray-300 flex items-center justify-end inline-block pb-0 w-full lg:h-2/3 md:h-3/5 pl-2 box">
          <div className="h-1/2 w-full lg:h-3/5 md:h-1/2 inline-flex items-center justify-center">
            <div className="flex flex-col items-end w-1/2">
              <header className="text-3xl font-bold pl-3 md:pr-5 lg:pr-5 text-red-700 md:text-5xl"> {his_majesty.first_name} </header>
              <header className="text-3xl font-bold pl-3 md:pr-5 lg:pr-5 text-red-700 md:text-5xl"> {his_majesty.middle_name} </header>
              <header className="text-3xl font-bold p;-3 md:pr-5 lg:pr-5 text-red-700 md:text-5xl"> {his_majesty.last_name} </header>
            </div>
            <Transition className={"w-1/2 items-center flex justify-center pb-3"}>
              <img src={his_majesty.url} className="w-full h-auto md:w-3/4 lg:w-3/4 bean" alt="" />
            </Transition>
            {/*<div className="w-1/2 items-center flex justify-center pb-3">
                <img src={his_majesty.url} className="w-full h-auto md:w-3/4 lg:w-3/4 bean" alt="" />
              </div>
              </Transition> */}
          </div>
        </div>
        <div className="text-gray-300 pt-3 bg-red-700 flex flex-col justify-center items-center w-full h-auto text-[0.8em] md:h-2/3 md:text-sm lg:text-base px-4 pb-5 box-desc">
          Welcome to my page! I am currently a student at the University of Michigan Ann Arbor, studying political science and history in my senior year. My love lies in electoral campaigns, nonprofits, and policies affecting youth. In 2022, the current Michigan State Representative, Will Snyder, gave me a chance after I called multiple times practically begging. Learning campaigns was always a dream, and I instantly became part of the family. Quickly, I began to do all that was needed for the campaign, moving from an intern to field director for Rep. Snyder and Rep Sabo. From this spark in 2022, I've run with the ever-evolving journey, learning every aspect of campaigns, lobbying, policy, and organizing possible. Currently, I am the Data Manager for Michigan. Of a staff at a max capacity of over 300, I am the only student full-time staff. Furthermore, as one of the five senior positions, I advise and run all data for Michigan's most prominent youth turnout project. I never would have imagined in 2022 that I would be leading a defining program in the most critical swing state two years later. Through God, the support of my family and partner, and constant learning, I've been able to experience multiple aspects of campaigns. After graduation, I plan to stay in politics and make as many changes as possible.
        </div>
      </div>
      <br></br>
    </div>
  </animated.div>
}


function App() {
  return (
    <>
      <script src="https://kit.fontawesome.com/fa913dc807.js" crossorigin="anonymous"></script>
      <div className="bg-blue-950 font-georgia-like min-h-screen flex justify-start items-center flex-col">
        <div className="w-screen h-auto flex flex-col md:justify-start md:items-start">
          <div className="w-screen h-auto py-8 px-5 font-semibold border-b-8 border-double border-red-700 flex flex-col md:flex-row">
            <div className="text-3xl md:text-5xl w-1/2 text-gray-300 font-georgia-like font-semibold"> {his_majesty.first_name} {his_majesty.middle_name} {his_majesty.last_name}</div>
            <div className="flex inline-flex w-1/2 mt-5 md:mt-0 md:justify-end items-center">
              <Circle icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              }
                href={"tel:2313295940"}
              />
              <Circle icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              }
                href={"mailto:hosler.ben@icloud.com"}
              />
              <Circle icon={
                <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
              }
                href={"http://www.linkedin.com/in/hoslerbenjamin"}
              />
              <Circle icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2v20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-6-6H8a2 2 0 0 0-2-2z" />
                <path d="M14 2v6h6" />
                <path d="M8 10h8" stroke-width="3"/>
                <path d="M8 14h8" />
                <path d="M8 18h6" />
              </svg>
              }
                href={"resume.pdf"}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-center font-georgia-like items-center md:h-screen lg:h-auto'>
        <div className='bg-gray-300 mt-20 mb-20 rounded-xl flex flex-col md:flex-row md:mb-20 lg:mt-40 w-4/5 md:w-[90vw] lg:w-4/5 items-stretch'>
          <div className='bg-red-700 font-georgia-like rounded-t-xl md:rounded-r-none md:rounded-l-xl py-4 px-3 flex justify-center w-full md:w-1/2 items-center font-semibold text-gray-50 text-xs md:text-base lg:text-lg'>
            Hey! Welcome to my portfolio. I recently graduated from the University of Michigan with degrees in political science and history. Throughout my studies and experiences, I developed a strong passion for applying data insights to the political campaign landscape, where I led a statewide data program during the 2024 presidential election. My data focus has now led to a role at Deloitte, where I serve as a business analyst in the government and public services division.
              <br></br>
              <br></br>
            Outside of consulting, I'm creating Michigan Next, a 501(c) startup—an initiative dedicated to advancing the state and transforming it for present and future generations of Michiganders. Furthermore, as Data Director for Young Democrats of Michigan, I'm also driving electoral change throughout the state.
            <br></br>
            <br></br>
            Aside from my love of spreadsheets and data, I've run every day since March 16, 2022. When not complaining about my tired legs, I love reading and gaming.

          </div>
          <div className='w-full md:w-1/2 lg:h-[50vh] p-3 flex items-center justify-center'>
            <img src={ben} className='w-auto h-full'></img>
          </div>
          {/* <div className='w-1/2 p-3 flex items-center justify-center bg-[url(./ben_headshot.jpeg)] bg-cover bg-center'>
            
          </div> */}
        </div>
      </div>
      </div>
      <div className="bg-blue-950 font-georgia-like h-full w-screen flex justify-center items-center flex-col pb-20">
        <div className="h-auto flex flex-col justify-center w-full">
          <div className="flex flex-col justify-center h-auto items-center">
            <header className="text-3xl font-bold text-gray-300 text-left"> Experience </header>
            <br></br>
            <ScrollAnimation animateIn='fadeIn'>
              <div className="h-auto w-screen flex justify-center items-center">
                <Timeline />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 font-georgia-like flex flex-col h-auto w-screen justify-center items-center md:h-screen pb-20">
        <header className="text-3xl font-bold text-gray-300 text-center"> Education </header>
        <br></br>
        <ScrollAnimation animateIn='fadeIn'>
          <div className="h-auto w-auto flex justify-center items-stretch items-center">
            <div className="md:flex-row flex-col flex justify-center items-center w-[85vw] items-stretch">
              <Education1
                // className="md:mr-5"
                school="University of Michigan- Ann Arbor"
                degree="Bachelor's Degrees in Political Science and History"
                start="AUGUST 2023"
                end="APRIL 2025"
                descriptions="Global Scholars Program Peer Facilitator, Undergraduate Research Opportunity Program, and the Michigan Institute of Progressive Policy"
              />
              <Education1
                school="Muskegon Community College"
                degree="Associate's Degree of Science and Art"
                start="SEPTEMBER 2020"
                end="APRIL 2023"
                url={cc}
                descriptions="Early College Ambassador, Phi Theta Kappa Honor Society, Student Services Council, Business Administration Committee, and Student Government Association President"
              />
              <Education2
                school="Orchard View High School"
                degree="GED"
                start="SEPTEMBER 2018"
                end="APRIL 2022"
                url={high}
                descriptions="
                National Honors Society, Marching Band, Jazz Band, and Concert Band."
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="bg-blue-950 font-georgia-like flex flex-col h-auto w-screen justify-center pb-20 items-center md:h-screen">
        <header className="text-xl font-bold text-gray-300 text-center md:text-2xl"> Licenses and Certifications </header>
        <br></br>
        <ScrollAnimation animateIn='fadeIn'>
          <div className="flex-col md:flex-row flex items-stretch w-[85vw] md:w-[95vw] lg:w-auto lg:mb-10">
              <Certifications
                name="Precinct Election Inspector"
                issuer="State of Michigan"
                date="September 2022"
                url={mich}
              />
              <Certifications
                name="Python Data Structures"
                issuer="University of Michigan"
                date="Janurary 2024"
                url={ds}
                className="md:mr-3"
              />
              <Certifications
                name="PostgreSQL for Everybody Specialization"
                issuer="University of Michigan"
                date="August 2024"
                url={post}
              />
              <Certifications
                name="Management Consulting Specialization"
                issuer="Emory University - Goizueta Business School"
                date="March 2025"
                url={manage}
              />
          </div>
        </ScrollAnimation>
        <header className="text-xl font-bold text-gray-300 text-center md:text-2xl mt-20">Languages</header>
        <br></br>
        <ScrollAnimation animateIn='fadeIn'>
          <div className="inline-flex h-[10em] w-auto certi">
            <div className="bg-gray-300 flex flex-col h-full w-full md:p-7 items-center flex justify-center rounded-tl-lg rounded-bl-lg border-r-2 border-red-700">
              <div className="text-xl font-semibold text-red-700">English</div>
              <div className="text-sm text-center">Fluent</div>
            </div>
            <div className="bg-gray-300 flex flex-col h-full w-full p-3 md:p-7 items-center flex justify-center rounded-tr-lg rounded-br-lg">
              <div className="text-xl font-semibold text-red-700">French</div>
              <div className="text-sm text-center">Professional Working Experience</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <div className="bg-gray-300 font-georgia-like h-[30vh] w-screen flex justify-center">
        <div className="flex flex-col justify-center items-center pt-5 pb-10 w-full">
          <br></br>
          <div className="text-xl font-bold">Let's Connect!</div>
          <br></br>
          <div className="flex inline-flex justify-center h-3/4 md:h-2/3 w-full md:w-3/4">
            <div className="contact-box w-1/2 md:w-1/3 mr-5 flex flex-col justify-center items-center md:p-5 h-3/4 lg:w-1/5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <br></br>
              <Dropdown />
            </div>
            <div className="contact-box w-1/2 md:w-1/3 flex flex-col justify-center items-center md:p-5 h-3/4 lg:w-1/5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <br></br>
              <a href="mailto:hosler.ben@icloud.com" className='text-xs text-blue-950 hover:text-red-700 md:text-sm lg:text-base'>hosler.ben@icloud.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
