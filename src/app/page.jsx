"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row gap-8 h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-10">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 ">
          <motion.div
            className="flex items-center justify-center h-full"
            initial={{ scale: 0.7, opacity: 0, filter: "blur(20px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 1 }}
          >
            <Image
              src="/profile-img.jpeg"
              alt=""
              width={400}
              height={400}
              className="rounded-2xl ring-1 ring-[#333333] aspect-square object-contain scale-75 lg:scale-100"
            />
          </motion.div>
        </div>
        {/* TEXT CONTAINER */}
        <motion.div
          className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center md:items-start justify-center text-white"
          initial={{ scale: 0.7, filter: "blur(20px)", opacity: 0 }}
          animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h1 className="text-4xl font-bold md:text-6xl">Surattinon Husen</h1>
          <p className="md:text-xl">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat Lorem ipsum dolor sit amet, qui
            minim labore adipisicing minim sint cillum sint consectetur
            cupidatat.
          </p>
          <div className="flex gap-4 font-semibold">
            <button className="p-4 rounded-lg ring-1 ring-black bg-white text-black">
              View my work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-white">
              Contact me
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Homepage;
