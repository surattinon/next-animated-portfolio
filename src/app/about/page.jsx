"use client";

import React from "react";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-screen h-[calc(100vh-6rem)]">
        <div className="w-full h-full flex flex-col items-center justify-center text-8xl text-center">
          About Me
        </div>
        <div className="flex flex-col">
          <div className="fixed bottom-40 left-[50vw]">
            <div className="w-[20px] h-[20px] bg-white relative rounded-full" />
          </div>
        </div>
        <div className="w-screen h-full bg-gradient-to-t from-[#000000] to-[#111111]"></div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
