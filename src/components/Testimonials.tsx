"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "I thought I needed heavy weights to build size. 3 months of strict bodyweight training with him completely transformed my physique.",
    author: "Marcus T.",
    role: "Former Athlete",
    image: "/client_marcus.png"
  },
  {
    quote: "The discipline he teaches goes beyond the workout. It's about mental fortitude. No gym, no excuses. Best shape of my life.",
    author: "Sarah J.",
    role: "Entrepreneur",
    image: "/client_sarah.png"
  },
  {
    quote: "My core strength has never been better. The outdoor group sessions push you past limits you didn't know you had.",
    author: "David R.",
    role: "Software Engineer",
    image: "/client_david.png"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 md:py-32 relative bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #0B3D2E 0%, #06281F 100%)'
      }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white/90">
            Real <span className="text-accent">Results.</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative px-12 md:px-24">
          <Quote className="absolute top-0 left-0 md:left-12 text-accent/20 w-24 h-24 -translate-y-1/2 -z-10" />
          
          <div className="min-h-[250px] flex items-center justify-center">
             <motion.div
               key={current}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.5 }}
               className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
             >
                <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full overflow-hidden border-2 border-accent shrink-0 shadow-[0_0_20px_rgba(229,255,0,0.2)]">
                  <Image 
                    src={testimonials[current].image}
                    alt={testimonials[current].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <p className="text-2xl md:text-3xl font-heading font-medium leading-normal text-white/90 mb-8 italic">
                    "{testimonials[current].quote}"
                  </p>
                  <div className="flex flex-col items-center md:items-start gap-2">
                     <div className="w-12 h-1 bg-accent mb-2" />
                     <h4 className="text-xl font-bold uppercase tracking-widest text-accent">{testimonials[current].author}</h4>
                     <span className="text-white/50 text-sm uppercase tracking-wider">{testimonials[current].role}</span>
                  </div>
                </div>
             </motion.div>
          </div>

          <div className="flex gap-4 justify-center mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
