import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import imageFull from "../assets/images/image-full.png";
import imageBottom from "../assets/images/image-bottom.png";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Adjust the scale of the background image based on scroll position
  const backgroundScale = useTransform(scrollY, [0, 1000], [1.5, 1.9]); // Adjust the range [0, 1000] as needed
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1.5, 1]);

  // Adjust the vertical position of the text elements
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], ["-10%", "40%", "150%"]); // Slightly higher placement
  const textX = useTransform(scrollYProgress, [0, 1], ["-10%", "60%"]); // More leftward and rightward placement

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h3
        className="font-bold text-white text-7xl md:text-8xl relative z-10"
        style={{ x: textX, y: textY }}
      >
        <span style={{ display: "block", textAlign: "left" }}>Let The</span>
        <span style={{ display: "block", textAlign: "center" }}>Success</span>
        <span style={{ display: "block", textAlign: "right" }}>Begin</span>
      </motion.h3>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageFull})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          scale: backgroundScale, // Apply scale animation to the background image
        }}
        initial={{ opacity: 0 }} // Fade in the background image initially
        animate={{ opacity: 1 }} // Animate opacity when component mounts
        transition={{ duration: 1 }} // Set the duration of the transition
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${imageBottom})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
