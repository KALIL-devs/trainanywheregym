"use client";

import { motion } from "framer-motion";
import { Activity, MapPin, Flame } from "lucide-react";

export default function Philosophy() {
  const cards = [
    {
      icon: <MapPin strokeWidth={1.5} size={48} />,
      title: "Accessibility",
      description: "Anywhere is a gym. No waiting for machines, no memberships. Just you and the ground.",
      delay: 0.2
    },
    {
      icon: <Activity strokeWidth={1.5} size={48} />,
      title: "Flexibility",
      description: "Train across multiple planes of motion. Build functional strength that translates to real sports.",
      delay: 0.4
    },
    {
      icon: <Flame strokeWidth={1.5} size={48} />,
      title: "Real Strength",
      description: "Mastering your bodyweight builds denser muscle, supreme balance, and unyielding core stability.",
      delay: 0.6
    }
  ];

  return (
    <section id="philosophy" className="py-24 relative overflow-hidden bg-primary backdrop-blur-md border-y border-white/5">
       {/* Background structural elements */}
      <div className="absolute top-0 right-10 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] mix-blend-color-dodge pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-accent uppercase font-bold tracking-[0.2em] text-sm"> Philosophy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            The World Is <span className="text-accent">Your Arena.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
              <div className="glass-panel p-10 h-full flex flex-col items-start relative z-10 hover:-translate-y-2 transition-transform duration-500">
                <div className="text-accent mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wide mb-4 whitespace-nowrap">{card.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-8 w-12 h-1 bg-accent/30 group-hover:w-full group-hover:bg-accent transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
