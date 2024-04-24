"use client";

import React from "react";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl">
        Contact Me
      </div>
    </motion.div>
  );
}

export default ContactPage;
