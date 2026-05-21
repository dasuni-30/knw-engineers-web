import React from "react";
import { motion } from "motion/react";
import { UserCheck, Award, Briefcase } from "lucide-react";

const teamHighlights = [
  {
    role: "Managing Director",
    name: "Eng K. G. Nanditha",
    credentials: "Chartered Mechanical Engineer, B.Sc Eng (Moratuwa)",
    focus: "30+ Years Industry Experience",
    icon: Award
  },
  {
    role: "Director / Senior QS",
    name: "Mrs. B. M. J. Peiris",
    credentials: "NDT Qualified Technical Officer",
    focus: "25+ Years Quantity Surveying",
    icon: UserCheck
  },
  {
    role: "Project Engineering",
    name: "Eng. M. K. R. S. Dharmasena",
    credentials: "B.Sc Engineer (Moratuwa)",
    focus: "20+ Years Construction Management",
    icon: Briefcase
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-black text-brand-blue uppercase tracking-[0.4em] mb-4">Our Leadership</h2>
          <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Board of Experts.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamHighlights.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-brand-blue/5 rounded-full flex items-center justify-center text-brand-blue mb-6">
                <member.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange mb-2 block">{member.role}</span>
              <h4 className="text-xl font-black text-slate-900 mb-2">{member.name}</h4>
              <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-tighter leading-relaxed">
                {member.credentials}
              </p>
              <div className="pt-4 border-t border-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {member.focus}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
