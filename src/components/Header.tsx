import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-4 border-b border-slate-100"
          : "bg-white/80 backdrop-blur-sm py-6"
      )}
    >
      {/* Background decoration for the faded document theme effect */}
      {!isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-brand-blue/10 -z-10" />
      )}

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="flex items-center gap-3">
            <img src="../src/assets/images/knw-logo.png" alt="KNW Logo" className="w-10 h-10 object-contain" />
            <div className="w-0.5 h-6 bg-brand-orange mx-1 rotate-12" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-800 leading-tight">
              Engineers<br/>(Pvt) Ltd
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "font-bold uppercase text-[11px] tracking-widest transition-colors",
                isScrolled ? "text-slate-600 hover:text-brand-orange" : "text-slate-500 hover:text-brand-orange"
              )}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className={cn(
              "px-6 py-2.5 font-bold uppercase text-[10px] tracking-widest transition-all rounded-sm",
              isScrolled 
                ? "bg-brand-blue text-white hover:bg-brand-orange" 
                : "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white"
            )}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors",
            "text-slate-900"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-t border-slate-100 px-6 py-6"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-700 font-bold uppercase text-xs tracking-widest hover:text-brand-orange transition-colors py-4 border-b border-slate-50 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
