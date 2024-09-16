"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useGlobal } from "./context";

function Loading() {
  const [loadCount, setLoadCount] = useState(0);
  const { loading, setLoading } = useGlobal();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadCount((prev) => {
        if (prev < 100) {
          return prev + 10;
        } else {
          clearInterval(interval);
          setLoading(0); // Reset loading
          return 100;
        }
      });
    }, 400); // Update every 100ms for a 10 second load

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [setLoading]);

  return (
    <div className="fixed h-screen w-screen bg-foreground flex flex-col items-start justify-end p-5">
      {/* Animate the loadCount text with bounce effect */}
      <motion.h1
        className="font-clashb"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        {loadCount}%
      </motion.h1>

      {/* Animate the progress bar width */}
      <motion.div
        style={{ width: "100%" }}
        className="h-[10px] bg-black"
        initial={{ width: 0 }}
        animate={{ width: `${loadCount}%` }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
    </div>
  );
}

export default Loading;
