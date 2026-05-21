import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/src/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:max-w-2xl"
          >
            <h2 className="text-xs font-black text-brand-orange uppercase tracking-[0.4em] mb-6">Recent Work</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              Engineering <br /> Portfolio.
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="px-10 py-5 bg-brand-blue text-white font-black uppercase text-xs tracking-widest hover:bg-brand-orange transition-all rounded-sm shadow-xl shadow-brand-blue/10">
              Project Archive
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-slate-50 rounded-sm shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="inline-block text-brand-orange text-[10px] font-black uppercase tracking-widest mb-2 bg-white px-2 py-0.5 shadow-sm">
                    {project.category}
                  </span>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h4>
                </div>

                <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0 translate-x-4">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
              <p className="text-slate-600 text-sm font-medium leading-relaxed px-2 border-l-2 border-slate-100 group-hover:border-brand-orange transition-colors">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
