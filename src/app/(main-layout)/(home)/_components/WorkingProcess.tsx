"use client";

import React from "react";
import { Cpu, Layers, CheckCircle, PackageCheck } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: ProcessStep[] = [
  {
    number: "1.",
    title: "Product Design and Planning",
    description:
      "The process begins with product design and planning, where the company's engineers create detailed blueprints and specifications.",
    icon: <Cpu className="w-6 h-6 text-[#e8174e]" />,
  },
  {
    number: "2.",
    title: "Component Sourcing and Procurement",
    description:
      "Once the design is finalized, the company identifies the required electronic components and precision materials.",
    icon: <Layers className="w-6 h-6 text-[#e8174e]" />,
  },
  {
    number: "3.",
    title: "Testing and Quality Control",
    description:
      "After PCB assembly, the electronic devices undergo rigorous testing and quality control for certified performance.",
    icon: <CheckCircle className="w-6 h-6 text-[#e8174e]" />,
  },
  {
    number: "4.",
    title: "Final Assembly and Integration",
    description:
      "In this stage, the electronic components are integrated into the device enclosure and verified for global delivery.",
    icon: <PackageCheck className="w-6 h-6 text-[#e8174e]" />,
  },
];

export const WorkingProcess = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-none bg-[#111111] border border-white/10 hover:border-[#e8174e]/60 transition-all duration-300 group flex flex-col justify-between min-h-[300px]"
            >
              <div>
                {/* Step Top: Icon & Step Number */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#e8174e] group-hover:border-[#e8174e] transition-all duration-300">
                    <span className="group-hover:text-white transition-colors">
                      {step.icon}
                    </span>
                  </div>
                  <span className="font-heading text-3xl font-black text-white/30 group-hover:text-[#e8174e] transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-white mb-3 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom accent indicator bar */}
              <div className="mt-8 h-0.5 w-0 bg-[#e8174e] group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
