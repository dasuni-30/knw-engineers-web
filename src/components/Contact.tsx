import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Instagram } from "lucide-react";
import { companyInfo } from "@/src/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-blue text-white overflow-hidden relative">
      {/* Decorative background logo icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-black text-white/5 pointer-events-none uppercase tracking-tighter italic">
        KNW
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-black text-brand-orange uppercase tracking-[0.4em] mb-6">Inquiry Desk</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-none">
              Start Your <br /> Project Today.
            </h3>
            <p className="text-blue-100/70 text-lg mb-12 font-medium leading-relaxed max-w-lg">
              Our technical experts are ready to provide you with comprehensive engineering solutions tailored to your specific needs.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-8">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-brand-orange shrink-0 rounded-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-200/50 mb-2">Office Address</h4>
                  <p className="text-white font-bold leading-relaxed">{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-brand-orange shrink-0 rounded-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-200/50 mb-2">Technical Hotline</h4>
                  <p className="text-white font-bold">{companyInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-brand-orange shrink-0 rounded-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-200/50 mb-2">Email Dispatch</h4>
                  <p className="text-white font-bold">{companyInfo.email}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-14 rounded-sm shadow-2xl relative"
          >
            <div className="absolute top-0 left-10 w-16 h-1.5 bg-brand-orange" />
            <h4 className="text-2xl font-black mb-10 uppercase tracking-tight text-slate-900 italic">Request a Quote</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. John Doe"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-brand-blue transition-all font-bold uppercase text-xs rounded-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-brand-blue transition-all font-bold uppercase text-xs rounded-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Project Type</label>
                <input 
                  type="text" 
                  placeholder="E.g. Medical Gas System"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-brand-blue transition-all font-bold uppercase text-xs rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we assist you with your project?"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-brand-blue transition-all font-bold uppercase text-xs rounded-sm resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-brand-orange hover:bg-slate-900 text-white font-black uppercase text-xs tracking-widest transition-all rounded-sm shadow-xl shadow-brand-orange/20 flex items-center justify-center gap-3"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
