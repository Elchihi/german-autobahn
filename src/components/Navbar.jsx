import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

      {/* AnimatePresence for Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden bg-black/90 text-white uppercase font-medium w-full absolute top-0 left-0 z-50 shadow-lg"
            >
              <ul className="flex flex-col px-6 py-4 gap-4 mt-20">
                {navItems.map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.05, color: "#f7ff00" }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="py-3 border-b border-carbonYellow/20 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
