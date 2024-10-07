"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2.5 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold animate-pulse">
          AI and Computational Enthusiast...
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          I&apos;m Shib Kumar Saraf, a budding AI engineer and IT professional with a passion for exploring algorithms and computational techniques to solve real-world problems.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/project"> {/* Change "/work" to your actual path */}
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact"> {/* Change "/contact" to your actual path */}
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
