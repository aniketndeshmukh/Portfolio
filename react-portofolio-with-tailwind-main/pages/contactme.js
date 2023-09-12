import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Aniket Deshmukh</title>
        <meta name="description" content="This is Portfolio of Aniket Deshmukh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 ">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between dark:text-white bg-transparent   "  >
           <a href="\" ><h1 className="font-burtons text-xl " >Aniket Deshmukh</h1></a>
            <ul className="flex items-center">
              <li>
                <a href="/#portfolio"><h2  className=" px-4 py-2 ">Portfolio</h2></a>
              </li>
              <li>
                <a href="/#skills"><h2  className=" px-4 py-2 ">Skills</h2></a>
              </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          
          
        </section>
      </main>
    </div>
  );
}
