import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { companyInfo } from "@/src/data";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-white">
      {/* Document Theme: Top Blue Shade */}
      <div className="absolute top-0 right-0 w-[70%] h-full bg-brand-blue -z-10 translate-x-1/4 -translate-y-1/2 rotate-12 opacity-5" />
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-blue -z-10 hidden lg:block" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
      
      {/* Document Theme: Bottom Orange Shade */}
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brand-orange -z-10 translate-y-1/4 -translate-x-1/4 rotate-12 opacity-5" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-brand-orange -z-10 hidden lg:block" style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <img src="/input_file_2.png" alt="KNW Logo" className="w-16 h-16 object-contain" />
            <div className="h-12 w-px bg-slate-200" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange leading-tight">
              Established <br/> Since 2010
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 uppercase tracking-tighter">
            Precision <br/>
            <span className="text-brand-blue">Fabrication.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-lg">
            KNW Engineers (Pvt) Ltd is a premier Sri Lankan firm specializing in high-quality design, fabrication, and production engineering. We deliver turnkey projects that are hassle-free and cost-effective.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="px-8 py-4 bg-brand-blue hover:bg-brand-orange text-white font-black uppercase text-xs tracking-[0.2em] transition-all inline-flex items-center justify-center gap-3 rounded-sm shadow-xl shadow-brand-blue/20"
            >
              Our Solutions
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-slate-200 text-slate-900 font-black uppercase text-xs tracking-[0.2em] hover:border-brand-blue hover:text-brand-blue transition-all inline-flex items-center justify-center rounded-sm"
            >
              Consult Now
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-video lg:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative group">
            <img 
              src="/input_file_3.png" 
              alt="KNW Engineers Banner"
              className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/30 via-transparent to-transparent mix-blend-multiply" />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-2xl border-l-[6px] border-brand-orange max-w-[220px] hidden md:block">
            <span className="text-brand-blue font-black text-4xl block leading-none mb-1">30+</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-normal">
              Years of Chartered <br/> Engineering Expertise
            </span>
          </div>

          {/* Background accent */}
          <div className="absolute -z-10 top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50" />
        </motion.div>
      </div>

      {/* Modern geometric background */}
      <div className="absolute inset-0 -z-0 pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900 transform translate-x-1/3 skew-x-12" />
      </div>
    </section>
  );
}
