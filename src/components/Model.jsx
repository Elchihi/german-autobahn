import { motion } from "framer-motion";

const models = [
  {
    brand: "Audi",
    name: "RS7 Sportback",
    img: "/src/assets/models/RS7sportback.jpg",
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "591 HP",
      speed: "0-100 km/h in 3.6s",
      price: "€120,000",
    },
  },
  {
    brand: "BMW",
    name: "M4 Competition",
    img: "/src/assets/models/M4 Competition.jpg",
    specs: {
      engine: "3.0L Inline-6 Twin-Turbo",
      power: "503 HP",
      speed: "0-100 km/h in 3.9s",
      price: "€95,000",
    },
  },
  {
    brand: "Mercedes",
    name: "AMG GT 63 S",
    img: "/src/assets/models/AMG GT 63 S.jpg",
    specs: {
      engine: "4.0L V8 Biturbo",
      power: "630 HP",
      speed: "0-100 km/h in 3.2s",
      price: "€165,000",
    },
  },
  {
    brand: "Porsche",
    name: "911 GT3 RS",
    img: "/src/assets/models/Porsche 911 GT3 RS.jpg",
    specs: {
      engine: "4.0L Flat-6 Naturally Aspirated",
      power: "640 HP",
      speed: "0-100 km/h in 3.0s",
      price: "€220,000",
    },
  },
];

export default function Models() {
  return (
    <section className="py-24 bg-black text-white" id="models">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center text-5xl font-bold text-carbonYellow mb-16 tracking-wide"
      >
        Featured Models
      </motion.h2>

      {/* Models Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {models.map((model, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-carbonYellow transition-all group"
          >
            <div className="h-72 overflow-hidden">
              <img
                src={model.img}
                alt={model.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <p className="text-carbonYellow text-sm font-semibold mb-1">
                {model.brand}
              </p>
              <h3 className="text-3xl font-bold mb-4">{model.name}</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                <div>
                  <p className="text-carbonYellow font-semibold">Engine</p>
                  <p>{model.specs.engine}</p>
                </div>
                <div>
                  <p className="text-carbonYellow font-semibold">Power</p>
                  <p>{model.specs.power}</p>
                </div>
                <div>
                  <p className="text-carbonYellow font-semibold">0-100 km/h</p>
                  <p>{model.specs.speed}</p>
                </div>
                <div>
                  <p className="text-carbonYellow font-semibold">Price</p>
                  <p>{model.specs.price}</p>
                </div>
              </div>
              <button className="mt-6 w-full bg-carbonYellow text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
