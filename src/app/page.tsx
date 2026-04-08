import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-dark">
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <Programs />
      <Gallery />
      <Testimonials />
      <Contact />
      
      {/* Footer minimal */}
      <footer className="py-8 bg-primary-dark border-t border-white/5 text-center text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} Train Anywhere. All rights reserved.</p>
      </footer>
    </main>
  );
}
