import { motion } from "framer-motion";

export default function Navbar() {
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

        {/* Links */}
        <ul className="flex gap-10 text-white uppercase font-medium">
          {["Home", "Brands", "Models", "Gallery", "Contact"].map((item, i) => (
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

      </div>
    </motion.nav>
  );
}
