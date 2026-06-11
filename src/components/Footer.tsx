import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { companyInfo } from "@/src/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-900 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img src="src/assets/images/knw-logo.png" alt="KNW Logo" className="w-12 h-12 object-contain" />
              <div className="w-0.5 h-6 bg-brand-orange mx-1 rotate-12" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 leading-tight">
                Engineers<br/>(Pvt) Ltd
              </span>
            </div>
            <p className="text-slate-600 font-medium text-sm leading-relaxed max-w-xs">
              Established in 2010. Sri Lanka's leading engineering firm in specialized design, fabrication, and production.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/knwengineersltd" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white border border-slate-200 rounded-sm flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-sm flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-[10px] text-brand-blue">Navigation</h4>
            <ul className="space-y-4 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
              <li><a href="#home" className="hover:text-brand-orange transition-all">Home</a></li>
              <li><a href="#about" className="hover:text-brand-orange transition-all">About Our Company</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-all">Engineering Services</a></li>
              <li><a href="#projects" className="hover:text-brand-orange transition-all">Portfolio Index</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-[10px] text-brand-blue">Expertise</h4>
            <ul className="space-y-4 text-slate-600 font-bold uppercase text-[11px] tracking-widest">
              <li>Medical Gas Supply</li>
              <li>LPG Gas Systems</li>
              <li>Steam Engineering</li>
              <li>Fire Protection</li>
              <li>SS Fabrication</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-[10px] text-brand-blue">Office Info</h4>
            <ul className="space-y-6">
              <li className="flex flex-col gap-1">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Location</span>
                <span className="font-bold text-sm text-slate-700">{companyInfo.address}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Contact</span>
                <span className="font-bold text-sm text-slate-700">{companyInfo.phone}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Support</span>
                <span className="font-bold text-sm text-brand-orange">{companyInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <p>© {currentYear} {companyInfo.name}. All Rights Reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Terms of Work</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
