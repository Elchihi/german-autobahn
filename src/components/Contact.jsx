import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-zinc-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl font-bold text-yellow-400 mb-16 tracking-wide"
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition"
                  placeholder="Adham mostafa"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition"
                  placeholder="adhamelchihi@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition"
                  placeholder="+49 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition resize-none"
                  placeholder="Tell us about your dream car..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition-all hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="bg-black p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-4">
                  <span className="text-yellow-400 text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p>Autobahn Straße 1, 10115 Berlin, Germany</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-yellow-400 text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p>+49 30 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-yellow-400 text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p>info@german-autobahn.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-yellow-400 text-2xl">🕐</span>
                  <div>
                    <p className="font-semibold text-white">Working Hours</p>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 10:00 AM - 4:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition text-xl font-bold"
                >
                  F
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition text-xl font-bold"
                >
                  X
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition text-xl font-bold"
                >
                  in
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition text-xl font-bold"
                >
                  IG
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}