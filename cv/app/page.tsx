"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "../public/images/bi.png";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaCode,
  FaPaintBrush,
  FaDesktop,
  FaReact,
  FaJs,
  FaNodeJs,
  FaSketch,
  FaHtml5,
  FaAngrycreative,
  FaGoogle,
  FaMicrosoft,
  FaResearchgate,
  FaThinkPeaks,
  FaRunning,
  FaInstagram,
  FaDiscourse,
} from "react-icons/fa";

const HomePage: React.FC = () => {
  const images = ["/images/a.png", "/images/b.png", "/images/c.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div>
        <header className="relative text-center mb-4 md:mb-6 lg:mb-8">
          <Image
            src={bannerImage}
            alt="Banner Image"
            className="w-full object-cover mb-4 md:mb-6 lg:mb-8 h-full"
          />
          <div className="absolute top-[37%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 w-1/2 md:w-[50%] lg:w-[54%] h-[50%] overflow-hidden z-10 border-4 border-white rounded-lg shadow-lg">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${
                  index === currentImageIndex
                    ? "translate-x-0"
                    : "translate-x-full"
                }`}
              />
            ))}
          </div>
          <h1 className="relative z-20 lg:text-2xl md:text-lg sm:text-lg font-bold text-shadow-md text-black bg-slate-200">
            Frontend Developer | BSE Major @ The African Leadership University
          </h1>
        </header>
      </div>
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-600 to-gray-900 text-white p-8">
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <section className="text-center max-w-3xl">
            <h2 className="text-4xl font-semibold border-b-2 border-white pb-2 mb-4">
              About Me
            </h2>
            <p
              className="text-lg text-justify leading-relaxed"
              style={{
                hyphens: "auto",
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              I am a Software Developer specialized in frontend development
              seeking opportunities to contribute to the development of
              innovative solutions and build on my technical skills and
              experience in a supportive and dynamic environment.
            </p>

            <div className="flex justify-center mt-2">
              <FaThinkPeaks className="text-3xl text-pink-500 mr-2" />
              <FaCode className="text-3xl text-blue-500 mr-2" />
              <FaPaintBrush className="text-3xl text-orange-500 mr-2" />
              <FaDesktop className="text-3xl text-green-500" />
            </div>
            {/* mini-game simulation */}
            <div className="w-full max-w-full">
              <svg
                viewBox="0 0 500 200"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-10 w-full h-auto"
              >
                {/* Sky Background */}
                <rect width="500" height="180" fill="#87CEEB" />

                {/* Text on the sky */}
                <text
                  x="250"
                  y="50"
                  fontSize="24"
                  fill="white"
                  textAnchor="middle"
                  fontFamily="Arial, sans-serif"
                  textDecoration="underline"
                  textRendering="optimizeLegibility"
                  className="font-bold"
                >
                  @drealebitech
                </text>

                {/* Grass */}
                <rect y="160" width="500" height="30" fill="#228B22" />

                {/* Sun */}
                <circle cx="450" cy="30" r="20" fill="yellow" />

                {/* Human Figure */}
                <g id="human" transform="translate(70, 100)">
                  <circle cx="0" cy="0" r="10" fill="#FFD700" /> {/* Head */}
                  <rect
                    x="-5"
                    y="10"
                    width="10"
                    height="30"
                    fill="#8B4513"
                  />{" "}
                  {/* Body */}
                  <line
                    x1="-10"
                    y1="15"
                    x2="10"
                    y2="15"
                    stroke="#8B4513"
                    strokeWidth="4"
                  />{" "}
                  {/* Arms */}
                  <line
                    x1="-5"
                    y1="40"
                    x2="-15"
                    y2="55"
                    stroke="#8B4513"
                    strokeWidth="4"
                  />{" "}
                  {/* Left Leg */}
                  <line
                    x1="5"
                    y1="40"
                    x2="15"
                    y2="55"
                    stroke="#8B4513"
                    strokeWidth="4"
                  />{" "}
                  {/* Right Leg */}
                </g>

                {/* Jumping Animation */}
                <animateTransform
                  xlinkHref="#human"
                  attributeName="transform"
                  type="translate"
                  values="70,100; 70,50; 70,100"
                  keyTimes="0; 0.5; 1"
                  dur="2.7s"
                  repeatCount="indefinite"
                />

                {/* Obstacle */}
                <rect x="500" y="140" width="30" height="20" fill="red">
                  <animate
                    attributeName="x"
                    from="500"
                    to="0"
                    dur="2.7s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>
          </section>

          <section className="text-center max-w-3xl">
            <h2 className="text-4xl font-semibold border-b-2 border-white pb-2 mb-6">
              Skills
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:text-sm">
              <div className="bg-white bg-opacity-20 rounded-lg py-2 px-4 text-lg font-medium">
                <FaReact className="text-2xl text-blue-500 mr-2" />
                React
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg py-2 px-4 text-lg font-medium">
                <FaNodeJs className="text-2xl text-green-500 mr-2" />
                Next.js
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg py-2 px-4 text-lg font-medium">
                <FaJs className="text-2xl text-yellow-500 mr-2" />
                JavaScript
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg py-2 px-4 text-lg font-medium">
                <FaHtml5 className="text-2xl text-red-500 mr-2" />
                HTML & CSS
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg py-2 px-4 text-lg font-medium">
                <FaAngrycreative className="text-2xl text-pink-500 mr-2" />
                ReactNative
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg py-2 px-4 text-lg font-medium">
                <FaGithub className="text-2xl text-gray-500 mr-2" />
                Git & GitHub
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg py-2 px-4 text-lg font-medium">
                <FaMicrosoft className="text-2xl mr-2" />
                Microsoft Tools
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg py-2 px-4 text-lg font-medium">
                <FaGoogle className="text-2xl text-rose-950 mr-2" />
                Google suite
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg py-2 px-4 text-lg font-medium">
                <FaSketch className="text-2xl text-indigo-800 mr-2" />
                Visual Design
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg py-2 px-4 text-lg font-medium">
                <FaResearchgate className="text-2xl text-amber-300 mr-2" />
                Research and Data Analysis
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg py-2 px-4 text-lg font-medium">
                <FaDiscourse className="text-2xl text-teal-400 mr-2" />
                Excellent comm. in English
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg py-2 px-4 text-lg font-medium">
                <FaRunning className="text-2xl text-emerald-50 mr-2" />
                Agile Problem Solving
              </div>
            </div>
          </section>
        </main>
        {/* Experiences */}
        <div className="bg-slate-900 rounded-lg p-5">
          <h2 className="text-4xl font-semibold border-b-2 border-white pb-2 mb-6">
            Experiences
          </h2>
          <p
            className="text-sm text-justify leading-relaxed "
            style={{
              hyphens: "auto",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            <Link
              href="https://kpmg.com/ng/en/home.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex font-bold items-center text-lg text-lime-300 italic hover:scale-105 transform transition">
                <Image
                  src="/images/kpmg.png"
                  alt="Work Image"
                  width={100}
                  height={150}
                  className="mr-2 rounded-[70%] h-[50px] w-[50px] z-10"
                />
                KPMG Nigeria
              </span>
            </Link>
            <br />
            In October 2023, I joined KPMG Nigeria as a Project Officer in the
            Advisory-Forensic unit, where I managed the handling and
            distribution of confidential data, up until April 2024. During my
            time there, I completed several projects using Microsoft tools like
            Power BI. These tools were instrumental in analyzing data and
            providing insights that were crucial to the success of our projects.
            A key highlight was collaborating with the Digital team to build and
            upgrade the “Intelligence Due Diligence tool” using Vue.js,
            React.js, and Tailwind CSS. This experience allowed me to contribute
            significantly to the team while honing my technical skills in a
            high-stakes environment.
          </p>
          <p
            className="text-sm text-justify leading-relaxed mt-5"
            style={{
              hyphens: "auto",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            <Link
              href="https://www.edusko.com/school/jerclems-nursery-and-primary-school"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex font-bold items-center text-lg text-lime-300 italic hover:scale-105 transform transition">
                <Image
                  src="/images/js.png"
                  alt="Work Image"
                  width={100}
                  height={150}
                  className="mr-4 rounded-[70%] h-[50px] w-[50px] z-10"
                />
                Jerclems School
              </span>
            </Link>
            <br />
            From July to October 2023, I led a summer Code Camp organized by
            Jerclems School, where I taught Grade 4-6 students the basics of
            Computer Literacy and Programming. I was responsible for creating
            the learning curriculum, ensuring the program was both engaging and
            educational for the young participants.
          </p>
          <p
            className="text-sm text-justify leading-relaxed mt-5"
            style={{
              hyphens: "auto",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            <Link
              href="https://www.alxafrica.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex font-bold items-center text-lg text-lime-300 italic hover:scale-105 transform transition">
                <Image
                  src="/images/alx.png"
                  alt="Work Image"
                  width={100}
                  height={150}
                  className="mr-4 rounded-[70%] h-[50px] w-[50px] z-10"
                />
                <span
                  style={{
                    hyphens: "auto",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  ALX Software Engineering Trainee
                </span>
              </span>
            </Link>
            <br />
            From May 2022 to June 2023, I was a Software Engineering trainee at
            ALX Africa, where I developed and maintained web applications using
            modern technologies. I collaborated with cross-functional teams
            across multiple jurisdictions to gather requirements and design
            software architecture. My study also involved conducting code
            reviews, identifying bugs, and implementing optimizations. Working
            within Agile methodologies, I ensured the timely delivery of
            software projects while also resolving technical issues and
            providing technical support among my peers.
          </p>
          <p
            className="text-sm text-justify leading-relaxed mt-5"
            style={{
              hyphens: "auto",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/endurance-idemudia-4a9966185/?originalSubdomain=ng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex font-bold items-center text-lg text-lime-300 italic hover:scale-105 transform transition">
                <Image
                  src="/images/Ed.png"
                  alt="Work Image"
                  width={100}
                  height={150}
                  className="mr-4 rounded-[70%] h-[50px] w-[50px] z-10"
                />
                Eddyblinks Tech
              </span>
            </Link>
            <br />
            From 2019 to 2022, I interned at Eddyblinks Tech, where I executed
            graphic design projects for various clients using CorelDraw and
            Photoshop. During this time, I developed strong competencies in
            CorelDraw, PowerPoint, and Photoshop, creating a range of graphics
            and designs. I also contributed to the development of visual, audio,
            and text-based research projects for students, schools, and
            organizations, strengthening my Microsoft tools competencies.
          </p>
        </div>
        {/* Education */}
        <section className="grid w-full mt-8">
          <h2 className="text-4xl text-white font-semibold border-b-2 border-white pb-2 mb-6">
            Education
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 text-black rounded-lg w-full">
            <div className="flex items-center bg-slate-200 col-span-1 p-4 rounded-xl hover:scale-90 transform transition">
              <Image
                src="/images/alu.png"
                alt="School Image"
                width={100}
                height={150}
                className="mr-4 rounded-[70%] h-[90px] w-[90px]"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  African Leadership University
                </h3>
                <p className="text-lg">BSc. Software Engineering | 2024-2027</p>
              </div>
            </div>
            <div className="flex items-center bg-slate-200 col-span-1 p-4 rounded-xl hover:scale-90 transform transition">
              <Image
                src="/images/alx.png"
                alt="School Image"
                width={100}
                height={150}
                className="mr-4 rounded-[70%] h-[90px] w-[90px]"
              />
              <div>
                <h3 className="text-xl font-semibold">ALX</h3>
                <p className="text-lg">
                  Certificate - Software Engineering | 2022-2023
                </p>
              </div>
            </div>
            <div className="flex items-center bg-slate-200 col-span-1 p-4 rounded-xl hover:scale-90 transform transition">
              <Image
                src="/images/alx.png"
                alt="School Image"
                width={100}
                height={150}
                className="mr-4 rounded-[70%] h-[90px] w-[90px]"
              />
              <div>
                <h3 className="text-xl font-semibold">ALX</h3>
                <p className="text-lg">
                  Certificate - ALX Ventures Founder Academy | 2023
                </p>
              </div>
            </div>
            <div className="flex items-center bg-slate-200 col-span-1 p-4 rounded-xl hover:scale-90 transform transition">
              <Image
                src="/images/alogo.png"
                alt="School Image"
                width={100}
                height={150}
                className="mr-4 rounded-[70%] h-[90px] w-[90px]"
              />
              <div>
                <h3 className="text-xl font-semibold">Auchi Polytechnic</h3>
                <p className="text-lg">
                  OND Mechanical Engineering | 2019-2022
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 text-center max-w-3xl">
          <h2 className="text-4xl font-semibold border-b-2 border-white pb-2 mb-6">
            Contact
          </h2>
          <div className="flex justify-center space-x-8 items-center">
            <a href="https://www.linkedin.com/in/ebitech14/" target="_blank">
              <FaLinkedin className="text-4xl text-blue-600 hover:scale-110 transform transition" />
            </a>
            <a href="https://github.com/Ebi-Tech/" target="_blank">
              <FaGithub className="text-4xl text-gray-500 hover:scale-110 transform transition" />
            </a>
            <a href="https://instagram.com/drealebitech" target="_blank">
              <FaInstagram className="text-4xl text-pink-500 hover:scale-110 transform transition" />
            </a>
            <a href="https://twitter.com/ebitech14" target="_blank">
              <FaTwitter className="text-4xl text-blue-400 hover:scale-110 transform transition" />
            </a>
            <a href="mailto:difebi14@gmail.com.com">
              <FaEnvelope className="text-4xl text-red-500 hover:scale-110 transform transition" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
