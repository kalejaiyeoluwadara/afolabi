// components/CustomCursor.js
"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - cursor.offsetWidth / 2 + 2, // Fine-tune the horizontal position (add or subtract values as needed)
        y: e.clientY - cursor.offsetHeight / 2 + 2, // Fine-tune the vertical position (add or subtract values as needed)
        duration: 0.1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="custom-cursor"></div>;
}
