import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { companyInfo } from "@/src/data";
import banner from '../assets/images/knw-banner-2.png';

export default function About() {
  const values = [
    "Expert Design & Fabrication",
    "Turnkey Engineering Projects",
    "High-Quality Reliable Products",
    "Seamless Production Engineering",
    "Proactive Technical Approach",
    "On-Time Project Delivery"
  ];

  return (
    <section id="about" className="py-32 bg-white/50 backdrop-blur-sm overflow-hidden relative border-t border-slate-100">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue opacity-[0.03] -skew-x-12 transform translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="col-span-2 aspect-video rounded-sm overflow-hidden shadow-2xl">
              <img 
                src={banner}
                alt="KNW Industrial Facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-sm overflow-hidden shadow-xl border-4 border-white -mt-20 z-10 hidden md:block">
              <img 
                src="/input_file_0.png" 
                alt="KNW Security Systems"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-sm overflow-hidden shadow-xl border-4 border-white -mt-20 z-10 ml-auto w-3/4 hidden md:block">
               <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
                alt="Engineering Precision"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative accent */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-brand-orange/5 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-black text-brand-orange uppercase tracking-[0.4em] mb-6 inline-flex items-center gap-3">
              <span className="w-8 h-px bg-brand-orange" />
              Corporate Identity
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-tight">
              A Proactive Approach to <br className="hidden md:block"/> Engineering Mastery.
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              <p>
                {companyInfo.about}
              </p>
              <p>
                Our proactive approach to technical issues enables our customers to understand and implement cost-effective solutions without compromising on reliability. Another key strength of KNW Engineers is our rigorous time management, ensuring that every project—from initial design to final production—is completed within the stipulated timeframe.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-slate-50 border-l-4 border-brand-blue rounded-sm">
                <h4 className="font-black text-brand-blue uppercase text-xs tracking-widest mb-3">Our Mission</h4>
                <p className="text-sm font-bold text-slate-700 leading-relaxed italic">
                  "To produce high-quality and reliable products that exceed customer expectations through technical expertise."
                </p>
              </div>
              <div className="p-6 bg-slate-50 border-l-4 border-brand-orange rounded-sm">
                <h4 className="font-black text-brand-orange uppercase text-xs tracking-widest mb-3">Our Strength</h4>
                <p className="text-sm font-bold text-slate-700 leading-relaxed italic">
                  "A competitive advantage driven by technical excellence and a commitment to hassle-free turnkey delivery."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 bg-brand-orange rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-slate-800 font-bold uppercase text-[10px] tracking-widest">{value}</span>
                </div>
              ))}
            </div>

            <button className="px-10 py-5 bg-slate-900 text-white font-black uppercase text-xs tracking-widest hover:bg-brand-blue transition-all rounded-sm shadow-xl shadow-slate-900/10 flex items-center gap-3">
              Technical Profile <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
