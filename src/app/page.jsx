"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
        <div className="h-1/3 lg:h-full lg:w-1/2 ">
          <motion.div
            className="flex items-center justify-center h-full"
            initial={{ x: 50, opacity: 0, filter: "blur(20px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 1.2, ease: "circOut" }}
          >
            <motion.div
              className="w-[70px] h-[70px] bg-[#8cf9ff] absolute z-40 translate-y-[-150px] blur-[100px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <Image
              src="/profile-img.jpeg"
              alt=""
              width={400}
              height={400}
              className="rounded-2xl ring-1 ring-[#333333] aspect-square object-contain scale-50 lg:scale-100 z-50"
            />
          </motion.div>
        </div>
        {/* TEXT CONTAINER */}
        <motion.div
          className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center md:items-start justify-center text-white"
          initial={{ x: -50, filter: "blur(20px)", opacity: 0 }}
          animate={{ x: 0, filter: "blur(0px)", opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <h1 className="text-4xl font-bold md:text-6xl">Surattinon Husen</h1>
          <p className="md:text-xl">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat Lorem ipsum dolor sit amet, qui
            minim labore adipisicing minim sint cillum sint consectetur
            cupidatat.
          </p>
          <div className="flex gap-4 font-semibold">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-white text-black">
                View my work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-white">
                Contact me
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Homepage;
