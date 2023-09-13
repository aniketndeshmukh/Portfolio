import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillMail,
  AiFillGithub,
  AiFillInstagram

} from "react-icons/ai";
import { FaRegCopyright,FaLink } from "react-icons/fa";


import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import db from "../public/database.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import Link from "next/link";



import { motion } from "framer-motion";






export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Aniket Deshmukh</title>
        <meta name="description" content="This is Portfolio of Aniket Deshmukh" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white dark:bg-gray-900 md:px-20 lg:px-40 ">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between dark:text-white bg-transparent z-20 shadow-md "  >
            <Link href="#"><h1 className="font-burtons text-xl " >Aniket Deshmukh</h1></Link>
            <ul className="flex items-center lm:right-11">
              <li>
                <Link href="#portfolio"><h2  className=" px-4 py-2 ">Portfolio</h2></Link>
              </li>
              <li>
                <Link href="#skills"><h2  className="sm:px-4 sm:py-1 lm:px-2 lm:py-1  ">Skills</h2></Link>
              </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl sm:ml-0 lm:ml-4"
                />
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white sm:ml-4 sm:px-4 sm:py-2 lm:px-2 lm:py-1  border-none rounded-md sm:ml-2 lm:ml-6  "
                  href="/Resume.pdf" download>
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white sm:ml-9 sm:px-2 sm:py-2 lm:px-2 lm:py-1 border-none rounded-md sm:ml-2 lm:ml-6"
                  href="mailto:aniketdeshmukh019@gmail.com"
                >
                  ContactMe
                </Link>
              </li>
            </ul>
            
          </nav>
         <div id="intro" className="text-center p-10 py-10  "  >
           <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}> <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl ">
              Aniket Deshmukh
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Java Full Stack Developer & Web Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            To succeed in an environment of growth and excellence and earn Link job which provides me job satisfaction and self development and help me achieve personal as well as organizational goals.
            </p></motion.div>
            <motion.div initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{delay:0.3}}><div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <Link href="https://github.com/aniketndeshmukh"><AiFillGithub /></Link>
              <Link href="https://www.linkedin.com/in/aniket-deshmukh-64386521b/"><AiFillLinkedin /></Link>
             <Link href="https://www.instagram.com/aniketndeshmukh"> <AiFillInstagram /></Link>
            </div>
            <div  className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 ">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div></motion.div>
          </div>
         
        </section>
        <section id="skills" className="bg-teal-600  ml-0 mr-0 pt-20 pl-10 pr-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Skills</h3>
            <p className="text-md gap-y-0.5 text-lg font-semibold py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as Link Software developer and Web
              developer, I have learnt Link lot about new technologies like for Java Developement
              <span className="text-cyan-50"> Spring Boot </span>
              and for Web Developement <span className="text-cyan-50">React Js </span>
              and My hunger for learning new technologies is growing. 
            </p>
            <p className="text-md py-2 leading-8 text-lg font-semibold text-gray-800 dark:text-gray-200">
             
            </p>
          </div>
          <div className="lm:flex gap-10 sm:pb-5">
            <div className="text-center shadow-lg  p-10 rounded-xl my-10 bg-gray-800 text-gray-50 dark:text-gray-800 dark:bg-white flex-1">
              <Image className="imgc"  src={design} width={100} height={100} />
              <h3 className="text-lg font-bold pt-8 pb-2  ">
                Front End 
              </h3>
              <p className="py-2">
              Possess Link solid grasp of HTML tags and CSS, along with practical experience in developing applications using React.js.
              </p>
              <h4 className="py-4 text-teal-600">I have good knowledge in following technologies</h4>
              <p className=" text-gray-50 dark:text-gray-800 py-1">HTML</p>
              <p className=" text-gray-50 dark:text-gray-800 py-1">CSS</p>
              <p className=" text-gray-50 dark:text-gray-800 py-1">JAVASCRIPT</p>
              <p className=" text-gray-50 dark:text-gray-800 py-1">REACT JS</p>
              <p className=" text-gray-50 dark:text-gray-800 py-1">NEXT JS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-800 text-gray-50 dark:text-gray-800 dark:bg-white flex-1">
              <Image className="imgc"src={code} width={100} height={100} />
              <h3 className="text-lg font-bold pt-8 pb-2 ">
                Back End 
              </h3>
              <p className="py-2">
              Possess Link strong grasp of logical programming, Java development, and object-oriented programming with expertise in Java and Spring Boot.
              </p>
              <h4 className="py-4 text-teal-600">I am good in following Backend technologies</h4>
              <p className=" text-gray-50 dark:text-gray-800  py-1">JAVA</p>
              <p className=" text-gray-50 dark:text-gray-800  py-1">PYTHON</p>
              <p className=" text-gray-50 dark:text-gray-800  py-1">J2EE</p>
              <p className=" text-gray-50 dark:text-gray-800  py-1">SPRING BOOT</p>
              <p className=" text-gray-50 dark:text-gray-800  py-1">HIBERNATE</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-800 text-gray-50 dark:text-gray-800 dark:bg-white flex-1">
              <Image className="imgc "src={db} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Database</h3>
              <p className="py-2">
              I have valuable SQL knowledge, proficient in writing DML, DQL, DCL, and TCL statements.
              </p>
              <h4 className="py-4 text-teal-600">I have worked on following Database</h4>
              <p className=" text-gray-50 dark:text-gray-800  py-1">MYSQL</p>
              <p className=" text-gray-50 dark:text-gray-800  py-1">ORACLE</p>
              <p className=" text-gray-50 dark:text-gray-800  py-1">POSTGRESQL</p>
              <p className=" text-gray-50 dark:text-gray-800  py-1">MONGODB</p>
            </div>
          </div>
        </section>
        <section id="portfolio" className="py-10 pt-20 pl-10 pr-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 font-semibold leading-8 text-gray-800 dark:text-gray-200">
            My portfolio showcases Link diverse range of software projects developed using Java, J2EE, Spring Boot, Hibernate, HTML, and CSS. These projects highlight my expertise in building robust and scalable web applications, leveraging Java-based technologies for backend development and creating responsive, user-friendly front-end interfaces. With Link strong foundation in software engineering, I have successfully implemented solutions that demonstrate proficiency in core Java programming, efficient database management with Hibernate, and seamless integration of the Spring Boot framework. Each project reflects my commitment to delivering high-quality software that meets both functional and aesthetic standards.
              
            </p>
            <p className="text-md py-2 leading-8 font-semibold text-cyan-500  ">
             Projects i have worked on and Developed by me are following :
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lm:flex-row lm:flex-wrap">
          <div className="basis-1/3 text-center shadow-lg p-10 rounded-xl  bg-gray-800 text-gray-50 dark:text-gray-800 dark:bg-white flex-1" >
            <h1 className="text-xl font-bold">RESTAURANT SERVICE MANAGEMENT AND BILLING SYSTEM</h1><div className=" block ml-auto mr-auto w-56" >
              
              <Image
                className="rounded-lg object-cover  mt-3"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              /></div> <p className="mt-3 font-semibold">The Development of Hotel Billing Invoice ,Order and Table Management
              System as Desktop Application. I have used java language and technologies like jdbc and
              Javafx. The Proposed System Reduces Hotel Management Effort Because Of Integration of
              Order and Billing System. This System Takes Hotel Service to Digital Level Which Makes Hotel
              Management Less Human Dependent.</p>
             <div className="mr-auto ml-auto w-32"> <Link href="https://github.com/aniketndeshmukh/RestaurantManagementSystem" className="bg-gradient-to-r mt-5  from-cyan-500 text- to-teal-500  sm:ml-4 sm:px-4 sm:py-2 lm:px-2 lm:py-1 border-none rounded-md sm:ml-2 lm:ml-6 flex w-32 "><AiFillGithub className="lm:w-7 lm:h-7 sm:w-8 sm:h-12"></AiFillGithub><span className="ml-3 font-bold mt-1"> Git Hub</span></Link></div>
            </div>
           <div className="basis-1/3 text-center shadow-lg p-10 rounded-xl  bg-gray-800 text-gray-50 dark:text-gray-800 dark:bg-white flex-1" ><h1 className="text-xl font-bold">BOOK STORE MANAGEMENT SYSTEM</h1><div className=" block ml-auto mr-auto w-56" >
              
              <Image
                className="rounded-lg object-cover  mt-3"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              /></div> <p className="mt-3 font-semibold">The Development of Book Store Management System, where Book Seller
              can keep record of all the books in his Store. With the help of this System, Seller can Manage
              all the book records. In this Project I have used java language and for front end I have used
              HTML,CSS,BOOTSTRAP and JavaScript. For back End I have used SpringBoot.</p>
             <div className="mr-auto ml-auto w-32"> <Link href="#" className="bg-gradient-to-r mt-5  from-cyan-500 text- to-teal-500  sm:ml-4 sm:px-4 sm:py-2 lm:px-2 lm:py-1 border-none rounded-md sm:ml-2 lm:ml-6 flex  w-32 "><AiFillGithub className="lm:w-7 lm:h-7 sm:w-8 sm:h-12"></AiFillGithub><span className="ml-3 font-bold mt-1"> Git Hub</span></Link></div>
            </div>
            <div className=" lm:w-1/2 lm:flex-initial mr-auto ml-auto text-center shadow-lg p-10 rounded-xl   bg-gray-800 text-gray-50 dark:text-gray-800 dark:bg-white " >
              <h1 className="text-xl font-bold"> ONLINE PERSONAL PORTFOLIO</h1><div className=" block ml-auto mr-auto w-56" >
              
              <Image
                className="rounded-lg object-cover  mt-3"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              /></div> <p className="mt-3 font-semibold">I have built an online portfolio showcasing my projects and skills. 
              I used HTML, CSS, Tailwind CSS, React JS, Next JS, and Node JS to create this website.
               It is Link platform where I present my work and highlight my expertise in web development and design.</p>
             <div className="flex "><div className="mr-auto ml-auto w-32"> 
             <Link href="https://github.com/aniketndeshmukh/Aniket-Portfolio/tree/main/react-portofolio-with-tailwind-main" className="bg-gradient-to-r mt-5  from-cyan-500 text- to-teal-500 
              sm:ml-1 sm:px-4 sm:py-2 lm:px-2 lm:py-1 border-none rounded-md lm:ml-1 flex w-32 ">
                <AiFillGithub className="lm:w-7 lm:h-7 sm:w-8 sm:h-12">
                  </AiFillGithub><span className="ml-3 font-bold mt-1"> Git Hub</span></Link></div> <div className="mr-auto ml-auto w-36"> 
             <Link href="#" className="bg-gradient-to-r mt-5  from-cyan-500 text- to-teal-500 
              sm:ml-1 sm:px-4 sm:py-2 lm:px-2 lm:py-1 border-none rounded-md  lm:ml-1 flex w-36 ">
                
                <FaLink  className="lm:w-7 lm:h-7 sm:w-8 sm:h-12"></FaLink>
                  <span className="ml-3 font-bold mt-1">Live Demo</span></Link></div> 
                  
                  </div>
            </div>
            </div>
        </section>
      </main>
      <footer style={{width:'100%'}} className="h-60 p-20 bg-teal-600">
       <div  className=" relative mx-auto  flex w-fit  footmenu top-4  text-2xl "> <Link href="#portfolio" className="pr-7 pt-1"><h3>Portfolio</h3></Link> <Link href="#skills" className="pr-3 pt-1" ><h3>Skills</h3></Link > <Link   href="mailto:aniketdeshmukh019@gmail.com" className="pr-2 pt-1"><AiFillMail className=" w-7 h-7"></AiFillMail></Link> <Link  href="https://www.linkedin.com/in/aniket-deshmukh-64386521b/" className="pr-2  pt-1"><AiFillLinkedin className="w-7 h-7"></AiFillLinkedin></Link><Link href="https://github.com/aniketndeshmukh" className="pr-2  pt-1"><AiFillGithub className="w-7 h-7 "></AiFillGithub></Link></div> 
       <div style={{height:'2px',width:'100%'}} className=" w-screen relative  bg-gray-800 top-7"></div>
     <div className="relative top-16 flex"><FaRegCopyright className=" h-5 w-5"/><h1>AniketDeshmukh.All Rights Are Reserved.</h1></div>
      </footer>
    </div>
  );
}
