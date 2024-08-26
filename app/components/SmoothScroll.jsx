import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll(); // Updated hook
  const controls = useAnimation();

  // Interpolating scroll progress to Y-axis movement
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <motion.div
      ref={scrollRef}
      animate={controls}
      style={{ y }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
