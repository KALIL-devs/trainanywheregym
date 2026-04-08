"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Training", href: "#programs" },
  { name: "Stories", href: "#testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-300",
        scrolled ? "glass-panel py-4" : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-sm transition-transform group-hover:scale-110">
            <span className="text-primary-dark font-heading font-bold text-xl uppercase leading-none mt-0.5">T</span>
          </div>
          <span className="text-xl font-heading font-bold tracking-widest uppercase mt-0.5">
            Train<span className="text-accent group-hover:text-white transition-colors">Anywhere</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-wider font-semibold text-foreground/80 hover:text-accent hover:[text-shadow:0_0_8px_rgba(229,255,0,0.5)] transition-all"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 outline outline-1 outline-accent/50 hover:outline-accent bg-accent/5 hover:bg-accent/20 text-accent text-sm font-bold uppercase tracking-wider transition-all duration-300"
          >
            Join Now
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-foreground hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-panel border-t border-accent/10 absolute top-full left-0 w-full flex flex-col"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 border-b border-white/5 font-heading text-lg text-foreground hover:text-accent uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-6 py-6 text-accent font-heading text-lg font-bold uppercase tracking-wider"
          >
            Join Now
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
