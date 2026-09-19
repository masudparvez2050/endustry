import React from "react";
import { Factory, Shield, Cpu, Flame, Compass, Wrench } from "lucide-react";

export const PartnerLogos = () => {
  const partners = [
    { name: "Global Steel Dynamics", icon: <Factory className="w-8 h-8" /> },
    { name: "Apex Power Grid", icon: <Shield className="w-8 h-8" /> },
    { name: "Vertex Precision IoT", icon: <Cpu className="w-8 h-8" /> },
    { name: "Quantum Energy Corp", icon: <Flame className="w-8 h-8" /> },
    { name: "Falcon Engineering", icon: <Compass className="w-8 h-8" /> },
    { name: "Titan Heavy Mechanics", icon: <Wrench className="w-8 h-8" /> },
  ];

  return (
    <section className="py-14 bg-[#0a0d14] border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-bold mb-8">
          Trusted by Fortune 500 Industrial Enterprises & Infrastructure Consortia
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center text-gray-500 hover:text-white transition-colors duration-300 group cursor-default"
            >
              <div className="text-gray-600 group-hover:text-[#e8174e] transition-colors mb-2">
                {partner.icon}
              </div>
              <span className="text-xs font-semibold text-center tracking-tight font-heading">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
