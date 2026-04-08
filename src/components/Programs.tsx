"use client";

import { motion } from "framer-motion";

export default function Programs() {
  const programs = [
    {
      title: "1-on-1 Coaching",
      price: "$150",
      period: "/session",
      outline: "Hyper-personalized sessions pushing your physical and mental barriers.",
      features: ["Custom regimen", "Nutritional guidance", "Direct WhatsApp access", "Form correction"],
    },
    {
      title: "Online Bootcamp",
      price: "$99",
      period: "/month",
      outline: "A structured 4-week bodyweight program delivered to your phone.",
      features: ["Video demonstrations", "Weekly check-ins", "Community access", "Progress tracking"],
      highlight: true
    },
    {
      title: "Group Sessions",
      price: "$40",
      period: "/session",
      outline: "High-energy outdoor training. Compete and grow with a squad.",
      features: ["Outdoor location", "HIIT focus", "Competitive environment", "Team exercises"],
    }
  ];

  return (
    <section id="programs" className="py-24 md:py-32 relative bg-primary-dark">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 text-white">
            Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover drop-shadow-md">Programs</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl">Choose your path. Each program is designed to build lean muscle, strip body fat, and boost cardiovascular endurance without touching a weight.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative group ${prog.highlight ? 'lg:-translate-y-4' : ''}`}
            >
              <div className={`absolute -inset-1 rounded-sm blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100 ${prog.highlight ? 'bg-accent/40 opacity-50' : 'bg-white/10'}`} />
              <div className={`relative h-full flex flex-col p-8 glass-panel border ${prog.highlight ? 'border-accent' : 'border-white/10 group-hover:border-white/30'} transition-colors`}>
                
                {prog.highlight && (
                  <div className="absolute top-0 right-0 bg-accent text-primary-dark text-xs font-bold uppercase tracking-widest py-1 px-3 transform translate-x-2 -translate-y-2 shadow-lg">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold uppercase mb-2">{prog.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-accent">{prog.price}</span>
                  <span className="text-white/50">{prog.period}</span>
                </div>
                <p className="text-white/80 mb-8 flex-grow">{prog.outline}</p>
                
                <ul className="space-y-4 mb-10">
                  {prog.features.map(feat => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-white/70">
                      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 uppercase font-bold tracking-widest transition-all ${prog.highlight ? 'bg-accent text-primary-dark hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(229,255,0,0.4)]' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                  Select Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
