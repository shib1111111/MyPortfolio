"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/my_profile.JPG"
              alt="My profile picture"
              width={400}
              height={400}
              className="w-50 h-50 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            I&apos;m Shib Kumar Saraf, an IT professional at CDAC Chennai, proficient in Python and Java for machine learning, deep learning, NLP, OpenCV, web development, and cloud technologies. Aspiring to be a Full Stack Machine Learning Engineer, I&apos;m committed to staying updated on the latest tech trends and driving innovation in the field.
            </p>
            

            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-white hover:text-blue-500">
                Python Programming
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-500 text-white hover:bg-white hover:text-red-500">
                Core Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-500">
                Flask
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-white hover:text-blue-500">
                Django
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-green-500 text-white hover:bg-white hover:text-green-500">
                FastAPI
              </div>

              <div className="rounded p-2 text-sm cursor-pointer bg-pink-500 text-white hover:bg-white hover:text-pink-500">
                VueJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-orange-500 text-white hover:bg-white hover:text-orange-500">
                NextJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-500 text-white hover:bg-white hover:text-red-500">
                NodeJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-indigo-500 text-white hover:bg-white hover:text-indigo-500">
                PostgresSQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-orange-500 text-white hover:bg-white hover:text-orange-500">
               MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-fuchsia-500 text-white hover:bg-white hover:text-fuchsia-500">
                AI
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-indigo-700 text-white hover:bg-white hover:text-indigo-700">
                LLM
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-cyan-500 text-white hover:bg-white hover:text-cyan-500">
                Machine Learning
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-emerald-500 text-white hover:bg-white hover:text-emerald-500">
                Deep Learning
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-gray-500 text-white hover:bg-white hover:text-gray-500">
                NLP
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-sky-500 text-white hover:bg-white hover:text-sky-500">
                Data Analytics
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-orange-500 text-white hover:bg-white hover:text-orange-500">
                Data Visualization
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-violet-500 text-white hover:bg-white hover:text-violet-500">
                Cloud Technologies
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-teal-600 text-white hover:bg-white hover:text-teal-600">
                Docker
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-rose-500 text-white hover:bg-white hover:text-rose-500">
                Git
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-500 text-white hover:bg-white hover:text-slate-500">
                Google Cloud
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-orange-500 text-white hover:bg-white hover:text-orange-500">
                ELK Stack
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-teal-500 text-white hover:bg-white hover:text-teal-500">
                DevOps
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-indigo-600 text-white hover:bg-white hover:text-indigo-600">
                CI/CD
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-purple-600 text-white hover:bg-white hover:text-purple-600">
                Kubernetes
              </div>             
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-500 text-white hover:bg-white hover:text-yellow-500">
                Canva
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-green-500 text-white hover:bg-white hover:text-green-500">
                Excel
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-blue-400 text-white hover:bg-white hover:text-blue-400">
                PowerPoint
              </div>


            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Project Associate(Big Data & Analytics)
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  I built an LLM-based chatbot and am enhancing exam analytics for national-level exam operations.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Jul 2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Centre for Development of Advanced Computing (C-DAC) Chennai
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Big Data & Data Analytics Intern
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I analyzed large datasets using Python, and SQL,developed
                    predictive analytics models,chatbots and algorithms and used LLM.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Jan 2024 - Jun 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Centre for Development of Advanced Computing (C-DAC) Chennai
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Subject Matter Expert & Quality Assurance Analyst{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  I designed reports, trained users, tested new equipment, and implemented best practices for product development.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    May 2021 - Nov 2021{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Solvitude Solutions Pvt. Ltd.
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
