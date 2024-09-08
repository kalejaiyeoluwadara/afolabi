"use client";
import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{
        duration: 0.8, // Increase duration for a slower animation
        ease: "easeInOut",
        delay: 0.4, // Add delay before the animation starts
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
