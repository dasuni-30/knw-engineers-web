import { Building2, Ruler, Zap, Droplets, HardHat, ShieldCheck } from "lucide-react";
import { Service, Project, CompanyInfo } from "./types";

export const companyInfo: CompanyInfo = {
  name: "KNW Engineers (Pvt) Ltd",
  tagline: "Unmatched Expertise. Turnkey Engineering Solutions.",
  about: "Established in 2010, KNW Engineers (Pvt) Ltd stands as a pillar of reliability in design, fabrication, and production engineering in Sri Lanka. We operate on a turnkey basis, delivering seamless end-to-end solutions that remove the burden of complexity from our clients. Our core strength lies in our deep technical expertise and a proactive philosophy that prioritized cost-effective, high-quality outcomes. With a strong emphasis on time management and precision, we foster collaborative partnerships that drive mutual growth and engineering excellence.",
  address: "No 207/2, Dalupitiya Rd, Kadawatha, Sri Lanka",
  phone: "+94 11 2921759 | +94 77 3018121",
  email: "knwengineers10@gmail.com",
};

export const services: Service[] = [
  {
    title: "Gas Pipe Systems",
    description: "Expert design and installation of Medical gas systems, LPG gas supply, and compressed air systems for industrial and medical facilities.",
    icon: "Stethoscope",
  },
  {
    title: "Stainless Steel Tech",
    description: "High-end fabrication of SS kitchen equipment, process pipe systems, and architectural hand rails for urban structures.",
    icon: "ShieldCheck",
  },
  {
    title: "Industrial Piping",
    description: "Comprehensive steam and condensate pipe systems, ensuring high performance and safety for heavy industrial plants.",
    icon: "Wind",
  },
  {
    title: "Fire Protection",
    description: "Advanced fire protection systems and line installations integrated seamlessly following international safety protocols.",
    icon: "ShieldAlert",
  },
  {
    title: "Storage Solutions",
    description: "Precision-engineered water and diesel storage tanks, custom steel doors, and industrial fabrication for diverse needs.",
    icon: "Box",
  },
  {
    title: "Turnkey Projects",
    description: "Complete design-to-production management, ensuring hassle-free execution and cost-effective engineering solutions.",
    icon: "Zap",
  },
];

export const projects: Project[] = [
  {
    title: "Industrial Gas Manifold",
    category: "LPG Systems",
    image: "/input_file_4.png",
    description: "Multi-meter high-capacity gas distribution network for heavy industrial production.",
  },
  {
    title: "Security Entrance Hub",
    category: "Structural Fabrication",
    image: "/input_file_0.png",
    description: "Design and installation of high-security automated turnstile systems and access control barriers.",
  },
  {
    title: "Medical Gas Infrastructure",
    category: "Specialized Piping",
    image: "https://images.unsplash.com/photo-1516549655169-df84a0774514?auto=format&fit=crop&q=80&w=1200",
    description: "Clinical-grade medical gas distribution network for a leading private healthcare facility.",
  },
];
