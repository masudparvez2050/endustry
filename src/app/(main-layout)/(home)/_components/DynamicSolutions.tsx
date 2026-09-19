"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Plus, ArrowUpRight } from "lucide-react";

interface ServiceColumn {
  services: string[];
}

const serviceColumns: ServiceColumn[] = [
  {
    services: [
      "Manufacturing Solutions",
      "Industrial Automation",
      "Research and Development",
    ],
  },
  {
    services: [
      "Outsourcing Solutions",
      "Asset Management",
      "Project Management",
    ],
  },
  {
    services: [
      "Energy Efficiency",
      "Material Sourcing",
      "International Trade",
    ],
  },
];

const counters = [
  { target: 89, label: "Product Development" },
  { target: 65, label: "Market Expansion" },
  { target: 95, label: "Quality Certifications" },
];

export const DynamicSolutions = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          counters.forEach((c, idx) => {
            let start = 0;
            const end = c.target;
            const duration = 1500;
            const stepTime = Math.abs(Math.floor(duration / end));
            const timer = setInterval(() => {
              start += 1;
              setCounts((prev) => {
                const next = [...prev];
                next[idx] = start;
                return next;
              });
              if (start >= end) clearInterval(timer);
            }, stepTime);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#0a0a0a] text-white border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              Dynamic Solutions
            </h2>
            <p className="mt-3 text-lg sm:text-xl text-neutral-400 font-normal">
              Precision Engineering for a Better World
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold font-heading uppercase tracking-wider text-white hover:text-[#e8174e] transition-colors"
            >
              <span>All Services</span>
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#e8174e] group-hover:bg-[#e8174e] group-hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* 3 Columns Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-b border-white/10">
          {serviceColumns.map((col, colIdx) => (
            <div key={colIdx} className="space-y-5">
              {col.services.map((service, itemIdx) => (
                <Link
                  key={itemIdx}
                  href="/services"
                  className="group flex items-center gap-3 text-neutral-300 hover:text-white transition-colors"
                >
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-neutral-400 group-hover:text-[#e8174e] transition-colors">
                    <Plus className="w-4 h-4 group-hover:scale-125 transition-transform" />
                  </span>
                  <span className="text-base sm:text-lg font-medium tracking-wide">
                    {service}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* 3 Counter Metric Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16">
          {counters.map((counter, idx) => (
            <div key={idx} className="group relative">
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.45)] group-hover:text-white transition-all duration-300">
                  {counts[idx]}
                </span>
                <span className="font-heading text-4xl sm:text-5xl font-bold text-[#e8174e]">
                  %
                </span>
              </div>
              <div className="w-12 h-[2px] bg-[#e8174e] my-4 transition-all duration-300 group-hover:w-20" />
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white uppercase tracking-wider">
                {counter.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
