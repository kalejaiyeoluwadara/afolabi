"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function CustomImage({ desk, mobile, style }) {
  const [size, setSize] = useState(mobile);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth < 1000 ? mobile : desk);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [desk, mobile]);

  return <Image className={`${style}`} src={size} alt="" />;
}

export default CustomImage;
