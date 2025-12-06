import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "/RS72.jpg",
    brand: "Audi",
    model: "RS7",
  },
  {
    id: 2,
    src: "/M4 Competition.jpg",
    brand: "BMW",
    model: "M4",
  },
  {
    id: 3,
    src: "/flavien-MaraDXSaTho-unsplash.jpg",
    brand: "Mercedes",
    model: "AMG GT",
  },
  {
    id: 4,
    src: "/911 Turbo S.jpg",
    brand: "Porsche",
    model: "911",
  },
  { id: 5, src: "/hero7.jpg", brand: "Audi", model: "R8" },
  { id: 6, src: "/m5.jpg", brand: "BMW", model: "M5" },
  {
    id: 7,
    src: "/s class.jpg",
    brand: "Mercedes",
    model: "S-Class",
  },
  {
    id: 8,
    src: "/taycan.jpg",
    brand: "Porsche",
    model: "Taycan",
  },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-24 bg-zinc-900 text-white" id="gallery">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center text-5xl font-bold text-carbonYellow mb-16 tracking-wide"
      >
        Our Gallery
      </motion.h2>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {galleryImages.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            onClick={() => setSelectedImg(img)}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={img.src}
                alt={`${img.brand} ${img.model}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <h3 className="text-carbonYellow font-bold text-xl">
                  {img.brand}
                </h3>
                <p className="text-gray-300">{img.model}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl w-full"
          >
            <img
              src={selectedImg.src}
              alt={`${selectedImg.brand} ${selectedImg.model}`}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 text-white bg-carbonYellow hover:bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold transition"
            >
              ×
            </button>
            <div className="text-center mt-4">
              <h3 className="text-carbonYellow text-3xl font-bold">
                {selectedImg.brand}
              </h3>
              <p className="text-gray-300 text-xl">{selectedImg.model}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
