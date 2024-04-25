"use client";

import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function AboutPage() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const skills = [
    {
      id: "1",
      title: "20xx",
      desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      textColor: "text-[#ffffff]",
    },
    {
      id: "2",
      title: "20xx",
      desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      textColor: "text-[#ffffff]",
    },
    {
      id: "3",
      title: "20xx",
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
      <div className="w-screen h-[calc(100vh-6rem)]">
        <div className="w-full h-full flex flex-col items-center justify-end text-center">
          <h1 className="text-8xl h-2/3 mt-52">About me</h1>
          <h2 className="text-xl mb-2">See my timeline</h2>
          <FontAwesomeIcon icon={faChevronDown} className="mb-32" />
        </div>
        <div
          className="h-[300vh] bg-gradient-to-b from-[#000000] to-[#111111] w-screen"
          ref={ref}
        >
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
            <motion.div className="flex" style={{ x }}>
              <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-t from-[#000000] to-[#111111]">
                <div className="h-screen w-full flex flex-col items-center justify-center">
                  <div className="h-60">
                    <div className="flex items-center justify-start">
                      <div className="fixed w-[30px] h-[30px] bg-white blur-xl" />
                      <div className="fixed w-[30px] h-[30px] rounded-full bg-white m-auto" />
                      <div className="fixed w-[50vw] h-[5px] bg-white translate-x-4" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-8 mt-20">
                    <h1 className="fixed text-6xl text-center h-1/2 justify-start font-bold pt-20">
                      Timeline &gt;&gt;
                    </h1>
                  </div>
                </div>
              </div>
              {skills.map((item) => (
                <div
                  className="h-screen w-screen flex items-center justify-center bg-gradient-to-t from-[#000000] to-[#111111]"
                  key={item.id}
                >
                  <div className="h-screen w-full flex flex-col items-center justify-center">
                    <div className="h-60">
                      <div className="flex items-center justify-center">
                        <div className="fixed w-[30px] h-[30px] bg-white blur-xl" />
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
      </div>
    </motion.div>
  );
}

export default AboutPage;
