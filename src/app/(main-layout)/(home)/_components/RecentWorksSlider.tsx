"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  name: string;
  category: string;
  slug: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "SmartFactoryX",
    category: "Smart Automation",
    slug: "the-petronas-twin-towers",
    image:
      "/images/automobile-production-line-using-robots-work-smart-factories-3d-illustration-1300x650.jpg",
  },
  {
    id: 2,
    name: "InnovProto",
    category: "Innovative Industry",
    slug: "sports-stadiums",
    image:
      "/images/smart-industry-robot-arms-digital-factory-production-technology.jpg",
  },
  {
    id: 3,
    name: "EnergyX",
    category: "Energy Solutions",
    slug: "theme-parks",
    image:
      "/images/oil-refinery-with-pricing-graph-petrochemical-facility-industrial-background-daylight-generative-ai-550x362.jpg",
  },
  {
    id: 4,
    name: "MainTech",
    category: "Modern Manufacturing",
    slug: "museums",
    image:
      "/images/pipes-workshops-petrochemical-industry-factory-against-background-dark-night-sky-550x362.jpg",
  },
  {
    id: 5,
    name: "AI-IndAuto",
    category: "AI Robotics",
    slug: "skyscrapers",
    image: "/images/industrial-40-ai-generated-550x362.jpg",
  },
  {
    id: 6,
    name: "EnerManage",
    category: "Eco-friendly Practices",
    slug: "landmarks",
    image:
      "/images/pipeline-energy-industry-large-factory-production-energy-electricity-550x362.jpg",
  },
];

export const RecentWorksSlider = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => {
    setActiveIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % projects.length);
  };

  const currentProject = projects[activeIdx];

  // 3 thumbnail previews for the bottom strip
  const thumbs = [
    projects[(activeIdx + 1) % projects.length],
    projects[(activeIdx + 2) % projects.length],
    projects[(activeIdx + 3) % projects.length],
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-block mb-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-[#e8174e] transition-colors"
              >
                <span>Latest Projects</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              Recent Works
            </h2>
            <p className="mt-3 text-lg sm:text-xl text-neutral-400 font-normal">
              Innovating Industry, Inspiring Growth
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-[#e8174e] hover:border-[#e8174e] text-white flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-[#e8174e] hover:border-[#e8174e] text-white flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Project Big Stage */}
        <div className="pt-12">
          <div className="relative h-[420px] sm:h-[500px] lg:h-[580px] w-full rounded-sm overflow-hidden border border-white/10 group">
            <Image
              src={currentProject.image}
              alt={currentProject.name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
              sizes="(max-width: 1200px) 100vw, 1180px"
            />
            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Floating Info */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-[#e8174e] text-white text-xs font-semibold uppercase tracking-wider -skew-x-12">
                  <span className="skew-x-12 inline-block">
                    {currentProject.category}
                  </span>
                </span>
                <h3 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                  {currentProject.name}
                </h3>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a0a0a] hover:bg-[#e8174e] hover:text-white font-heading font-semibold text-xs uppercase tracking-widest transition-colors -skew-x-12 shrink-0 group/btn"
              >
                <span className="skew-x-12 inline-flex items-center gap-1.5">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom 3-item Thumbnail Navigation Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {thumbs.map((thumb) => {
              const targetIdx = projects.findIndex((p) => p.id === thumb.id);
              return (
                <div
                  key={thumb.id}
                  onClick={() => setActiveIdx(targetIdx)}
                  className="p-5 rounded-sm bg-[#141414] border border-white/10 hover:border-[#e8174e]/60 transition-all cursor-pointer group flex items-center gap-4"
                >
                  <div className="relative w-16 h-16 rounded-sm overflow-hidden shrink-0 border border-white/10">
                    <Image
                      src={thumb.image}
                      alt={thumb.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-heading text-[#e8174e] font-semibold tracking-wider block">
                      {thumb.category}
                    </span>
                    <h4 className="font-heading text-lg font-bold text-white group-hover:text-[#e8174e] transition-colors">
                      {thumb.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
