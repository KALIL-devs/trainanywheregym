"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/workout_1.png", alt: "Outdoor Bootcamp" },
  { src: "/workout_2.png", alt: "Battle Ropes Intense" },
  { src: "/workout_3.png", alt: "Kettlebell Training" },
  { src: "/workout_4.png", alt: "Sled Push Circuit" }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative bg-primary-dark overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white/90">
            In <span className="text-accent">Action.</span>
          </h2>
          <p className="mt-4 text-white/60 text-lg uppercase tracking-widest">Real Work. Real Sweat.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image 
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-0"
              />
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity z-20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity z-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
