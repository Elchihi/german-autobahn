import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "Brands", "Models", "Gallery", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-carbonYellow/20"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-carbonYellow tracking-widest">
          GERMAN • AUTOBAHN
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-white uppercase font-medium">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.15, color: "#f7ff00" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="cursor-pointer"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden flex flex-col md:hidden bg-black/80 text-white uppercase font-medium px-6"
      >
        {navItems.map((item, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.05, color: "#f7ff00" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="py-4 border-b border-carbonYellow/20 cursor-pointer"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
