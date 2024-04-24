"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Homepage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const skills = [
    {
      id: "1",
      title: "Linux skill",
      desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      textColor: "text-[#ffffff]",
    },
    {
      id: "2",
      title: "Developer skill",
      desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      textColor: "text-[#ffffff]",
    },
    {
      id: "3",
      title: "Network skill",
      desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      textColor: "text-[#ffffff]",
    },
  ];

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
            <button className="p-4 rounded-lg ring-1 ring-black bg-white text-black">
              View my work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-white">
              Contact me
            </button>
          </div>
        </motion.div>
      </div>
      <div className="h-[300vh] bg-black w-screen" ref={ref}>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div className="flex" style={{ x }}>
            <div className="h-screen w-screen flex items-center justify-center bg-black">
              <div className="h-screen w-full flex flex-col items-center justify-center">
                <div className="h-60">
                  <div className="flex items-center justify-start">
                    <div className="fixed w-[30px] h-[30px] rounded-full bg-white m-auto" />
                    <div className="fixed w-[50vw] h-[5px] bg-white translate-x-4" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-8 mt-20">
                  <h1 className="fixed text-8xl h-1/2 justify-start font-bold">
                    Skills
                  </h1>
                  <p className="fixed w-screen px-8 pb-32">
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing
                  </p>
                </div>
              </div>
            </div>
            {skills.map((item) => (
              <div
                className="h-screen w-screen flex items-center justify-center bg-black"
                key={item.id}
              >
                <div className="h-screen w-full flex flex-col items-center justify-center">
                  <div className="h-60">
                    <div className="flex items-center justify-center">
                      <div className="fixed w-[30px] h-[30px] rounded-full bg-white m-auto" />
                      <div className="fixed w-screen h-[5px] bg-white translate-x-4" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-8 mt-20">
                    <h1 className="fixed text-4xl h-1/2 justify-start font-semibold">
                      {item.title}
                    </h1>
                    <p className="fixed w-screen px-12 pb-32 text-center">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
