import { motion } from "framer-motion";

const brands = [
  {
    name: "Audi",
    img: "/audi.jpg",
    desc: "Progress through technology and unmatched performance.",
  },
  {
    name: "BMW",
    img: "/bmw.jpg",
    desc: "The ultimate driving machine built for pure driving pleasure.",
  },
  {
    name: "Mercedes",
    img: "/merc.jpg",
    desc: "Luxury, elegance, and world-class German engineering.",
  },
  {
    name: "Porsche",
    img: "/porsche.jpg",
    desc: "Precision sports performance with iconic timeless design.",
  },
];

export default function Brands() {
  return (
    <section className="py-24 bg-black text-white" id="brands">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center text-5xl font-bold text-carbonYellow mb-16 tracking-wide"
      >
        Top German Brands
      </motion.h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
        {brands.map((brand, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-[#111] rounded-2xl p-6 shadow-xl border border-gray-700 hover:border-carbonYellow transition-all hover:scale-105 cursor-pointer flex flex-col"
          >
            <div className="h-80 mb-4 overflow-hidden rounded-lg">
              <img
                src={brand.img}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-center text-2xl font-bold text-carbonYellow mb-3">
              {brand.name}
            </h3>
            <p className="text-gray-400 text-center">{brand.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}