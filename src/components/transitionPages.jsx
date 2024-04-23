"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

function TransitionPage({ children }) {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-[#000000] to-[#111111] text-white"
      >
        <motion.div
          className="fixed m-auto top-0 bottom-0 right-0 left-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black bottom-0 z-40"
          initial={{ height: "100vh" }}
          animate={{ height: "0vh", transition: { delay: 0.8 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
}

export default TransitionPage;
