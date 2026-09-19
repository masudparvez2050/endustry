import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cog,
  Building2,
  FlaskConical,
  Zap,
  Car,
  Cpu,
  ArrowRight,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "mechanical",
    title: "Mechanical Engineering",
    category: "Heavy Fabrication",
    description:
      "Precision tool design, CNC 5-axis milling, metallurgy analysis, and robust mechanical assembly engineered for extreme tolerances.",
    icon: <Cog className="w-6 h-6 text-[#e8174e]" />,
    image:
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    features: ["CNC Plasma Cutting", "Metallurgical Testing", "High Tolerance Parts"],
  },
  {
    id: "construction",
    title: "Civil Construction",
    category: "Infrastructure",
    description:
      "Large-scale commercial, warehouse, and heavy industrial architectural engineering compliant with international seismic and safety codes.",
    icon: <Building2 className="w-6 h-6 text-[#e8174e]" />,
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
    features: ["Structural Modeling", "Soil & Foundation Analysis", "Turnkey Building"],
  },
  {
    id: "chemical",
    title: "Chemical & Materials Research",
    category: "Laboratory Science",
    description:
      "Advanced chemical formulation, petrochemical synthesis, industrial polymer stabilization, and rigorous environmental hazard testing.",
    icon: <FlaskConical className="w-6 h-6 text-[#e8174e]" />,
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    features: ["Polymer Synthesis", "Petrochemical Testing", "Ecological Impact Analysis"],
  },
  {
    id: "energy",
    title: "Power & Energy Solutions",
    category: "Renewable Power",
    description:
      "Grid integration, high-voltage substations, wind turbine mechanical maintenance, and industrial solar installations.",
    icon: <Zap className="w-6 h-6 text-[#e8174e]" />,
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
    features: ["Solar & Wind Grids", "Turbine Overhauling", "Substation Reliability"],
  },
  {
    id: "automotive",
    title: "Automotive Industry",
    category: "Assembly Lines",
    description:
      "Chassis fabrication, powertrain endurance diagnostics, and automated robotic assembly lines tailored for electric and hybrid mobility.",
    icon: <Car className="w-6 h-6 text-[#e8174e]" />,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    features: ["EV Battery Mounting", "Robotic Chassis Welding", "Rigorous Safety Testing"],
  },
  {
    id: "automation",
    title: "Industrial Automation & AI",
    category: "Smart Factory",
    description:
      "SCADA systems, programmable logic controllers (PLC), predictive maintenance sensors, and Industry 4.0 IoT instrumentation.",
    icon: <Cpu className="w-6 h-6 text-[#e8174e]" />,
    image:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    features: ["PLC Programming", "Predictive Diagnostics", "IoT Sensor Fabrics"],
  },
];

export const ServicesShowcase = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#f6f8fb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#e8174e]">
              <span className="w-6 h-0.5 bg-[#e8174e]" />
              Industrial Disciplines
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#203556] tracking-tight">
              High-Performance Engineering Services
            </h2>
            <p className="text-base text-gray-600 font-sans">
              Comprehensive turnkey capabilities across civil, mechanical, chemical, and automation sectors worldwide.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#e8174e] text-gray-800 hover:text-white text-xs font-bold uppercase tracking-wider border border-gray-200 hover:border-[#e8174e] transition-all shadow-sm group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white group border border-gray-200/80 hover:border-[#e8174e]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider">
                    {service.category}
                  </span>

                  {/* Icon box */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="font-heading text-xl font-bold text-[#203556] group-hover:text-[#e8174e] transition-colors">
                    <Link href="/services">{service.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans line-clamp-3">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs text-gray-500 font-medium">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e8174e]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 sm:px-7 pb-6 pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#203556] group-hover:text-[#e8174e] transition-colors"
                >
                  <span>Read Detailed Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
