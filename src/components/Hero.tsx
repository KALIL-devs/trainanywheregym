"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <Image
          src="/hero_bg.png"
          alt="Abstract Fitness Background"
          fill
          priority
          className="object-cover opacity-60"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary-dark/60 to-primary-dark mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between h-full pt-20 md:pt-0">
        
        {/* Text Section / Left */}
        <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-2xl">
              Train <span className="block text-transparent bg-clip-text bg-gradient-to-b from-accent to-accent-hover drop-shadow-[0_0_20px_rgba(229,255,0,0.4)]">Anywhere</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white/90 mb-8 overflow-hidden">
              <motion.span 
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
              >
                No Excuses.
              </motion.span>
            </h2>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 1 }}
             className="mt-4 md:mt-8"
          >
            <a
              href="#programs"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold uppercase tracking-widest overflow-hidden bg-accent text-primary-dark text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(229,255,0,0.6)]"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
              <span className="relative flex items-center gap-3">
                Start Training
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>

        {/* Coach Image / Right */}
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-[60%] md:h-[90%] md:relative z-10 flex justify-center md:justify-end items-end pointer-events-none">
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
             className="relative h-full w-full"
           >
             <Image 
               src="/coach.png"
               alt="Coach"
               fill
               className="object-contain object-bottom md:object-right-bottom drop-shadow-2xl"
               priority
             />
           </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator down */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-bold hidden md:block">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"
          animate={{
            scaleY: [0, 1, 0],
            translateY: [0, 10, 20]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
