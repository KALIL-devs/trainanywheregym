"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Dumbbell, Target, ShieldCheck } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative bg-primary-dark">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="grid md:grid-cols-2 gap-16 md:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Image Side */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-sm border-l-4 border-b-4 border-accent">
              <Image
                src="/coach.png"
                alt="Coach Portrait"
                fill
                className="object-cover object-top filter grayscale-[20%] contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-80" />
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              className="absolute -bottom-8 -right-4 md:-right-12 glass-panel p-6 shadow-2xl z-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-black text-accent mb-1">+10<span className="text-xl text-white">yrs</span></div>
              <div className="text-sm uppercase tracking-widest font-bold text-white/70">Coaching Exp</div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <motion.div variants={itemVariants} className="mb-4 flex items-center gap-4">
              <div className="h-0.5 w-12 bg-accent" />
              <span className="text-accent uppercase font-bold tracking-[0.2em] text-sm">About the Coach</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
              Forged on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Field.</span><br/>
              Mastered <span className="text-accent">Anywhere.</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 text-white/80 text-lg font-sans leading-relaxed mb-10">
              <p>
                My journey began on the football field, where true power isn't built with fancy machines—it's built with grit, absolute body control, and relentless discipline. 
              </p>
              <p>
                As a former professional player turned elite fitness specialist, my mission is to strip away the excuses. You don't need a gym. You don't need equipment. You just need the will to master your own bodyweight.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass-panel flex-shrink-0 flex items-center justify-center text-accent">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Elite Discipline</h4>
                    <p className="text-sm text-white/60">Training the mind to command the body.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full glass-panel flex-shrink-0 flex items-center justify-center text-accent">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Bulletproof Core</h4>
                    <p className="text-sm text-white/60">Functional strength for real-world impact.</p>
                  </div>
               </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
