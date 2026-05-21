import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { services } from "@/src/data";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:max-w-3xl"
          >
            <h2 className="text-xs font-black text-brand-blue uppercase tracking-[0.4em] mb-6 border-l-4 border-brand-orange pl-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              Specialized Engineering <br className="hidden md:block" /> & Turnkey Projects.
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // Safe dynamic icon access
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Wrench;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-10 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm border-b-4 border-transparent hover:border-brand-orange relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 rounded-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-medium mb-8">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-brand-orange font-black uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                    Learn More <LucideIcons.ArrowRight className="w-3 h-3" />
                  </div>
                </div>
                {/* Visual background number */}
                <div className="absolute top-10 right-10 text-[60px] font-black text-slate-100/50 leading-none group-hover:text-brand-blue/5 transition-colors pointer-events-none italic">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
