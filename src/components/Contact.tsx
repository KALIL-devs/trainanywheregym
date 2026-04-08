"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative bg-primary-dark">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left Column Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 text-white leading-none">
              Commit <br/>
              <span className="text-white/20">To The</span> <br/>
              <span className="text-accent drop-shadow-lg">Grind.</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-md leading-relaxed">
              Ready to strip away the excuses and build raw power? Fill out the form or reach out directly to join the training.
            </p>

            <div className="flex gap-6 mb-12 lg:mb-0">
              <a href="#" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-sm transition-colors border border-white/10 hover:border-accent">
                <Mail className="text-accent" />
                <span className="font-bold uppercase tracking-wider text-sm">Email</span>
              </a>
              <a href="#" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-sm transition-colors border border-white/10 hover:border-accent">
                <Phone className="text-accent" />
                <span className="font-bold uppercase tracking-wider text-sm">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[80px]" />
            
            <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Full Name</label>
                <input 
                  type="text" 
                  className="bg-primary/50 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none px-4 py-4 text-white placeholder-white/20 transition-all font-sans"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Email Address</label>
                <input 
                  type="email" 
                  className="bg-primary/50 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none px-4 py-4 text-white placeholder-white/20 transition-all font-sans"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Your Goal</label>
                <textarea 
                  rows={4}
                  className="bg-primary/50 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none px-4 py-4 text-white placeholder-white/20 transition-all resize-none font-sans"
                  placeholder="Build muscle, lose fat, improve conditioning..."
                />
              </div>

              <button className="mt-4 w-full bg-accent hover:bg-accent-hover text-primary-dark font-black uppercase tracking-widest py-5 flex items-center justify-center gap-3 transition-colors text-lg shadow-[0_0_20px_rgba(229,255,0,0.2)] hover:shadow-[0_0_30px_rgba(229,255,0,0.4)]">
                Send Message
                <Send size={20} className="mt-0.5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
