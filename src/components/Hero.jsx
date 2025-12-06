import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
  "/hero7.jpg",
  "/hero8.jpg",
  "/hero9.jpg",
  "/hero10.jpg",
  "/hero11.jpg",
  "/hero12.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Carousel */}
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[index]})`,
        }}
      />

      {/* Dark overlay for carbon look */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-6xl font-bold text-carbonYellow tracking-wide"
        >
          German Engineering
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg text-gray-300 max-w-2xl"
        >
          Experience the precision, performance, and power of the world's
          strongest automotive brands.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-8 px-8 py-3 bg-carbonYellow text-black font-bold rounded-lg"
        >
          Explore Now
        </motion.button>
      </div>
    </div>
  );
}
