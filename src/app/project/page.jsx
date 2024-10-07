"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "SereneSounds",
    desc: "SereneSounds is a sophisticated music curation web app that leverages various recommendation techniques to provide users with diverse and personalized music suggestions.",
    img: "/SereneSounds.jpg",
    web_link: "https://serenesounds.streamlit.app/",
    github_link: "https://github.com/shib1111111/SereneSounds",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "MovieMaven",
    desc: "It allows users to search for a movie by its title and displays various details about the movie, such as its rating, genres, plot, directors, cast, writers, production companies, box office gross ,budget and recommendations",
    img: "/MovieMaven.jpg",
    web_link: "https://shib1111111-moviemaven-app-ezbhuv.streamlit.app/",
    github_link: "https://github.com/shib1111111/MovieMaven",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "LLAMA DB",
    desc: "It is an AI-Driven Natural Language Query Chatbot that simplifies database interaction by enabling users to communicate with their database in plain English",
    img: "/llamadb.png",
    web_link: "",
    github_link: "https://github.com/shib1111111/LLAMA_DB",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "QuikChat",
    desc: "A feature-rich Android messaging app with real-time messaging, user-friendly interfaces, and Firebase integration for a seamless communication experience",
    img: "/QuikChat.png",
    web_link: "",
    github_link: "https://github.com/shib1111111/QuikChat_Android_App",
  },
];

const ProjectPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Projects
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <div className="flex gap-4 justify-end">
                    {/* Web Link Button */}
                    <Link href={item.web_link}>
                      <button className="flex items-center gap-x-2 p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-blue-600 font-semibold m-6 rounded">
                        {/* Web Icon */}
                        <span>
                          <Image src="/web.png" alt="Web" width={20} height={20} />
                        </span>
                        {/* Link Text */}
                        <span>Link</span>
                      </button>
                    </Link>

                    {/* GitHub Link Button */}
                    <Link href={item.github_link}>
                      <button className="flex items-center gap-x-2 p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-green-600 font-semibold m-4 rounded">
                        {/* GitHub Icon */}
                        <span>
                          <Image src="/github.png" alt="GitHub" width={24} height={24} />
                        </span>
                        {/* Link Text */}
                        <span>Link</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Aspiring Full-Stack AI Engineer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
