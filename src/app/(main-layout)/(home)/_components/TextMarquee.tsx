"use client";

import React from "react";

const marqueeItems = [
  "Supply Chain Management",
  "Quality Assurance & Testing",
  "Product Design & Development",
  "Training & Skill Development",
];

export const TextMarquee = () => {
  return (
    <div className="w-full bg-[#0a0a0a] py-8 overflow-hidden border-b border-white/10 select-none">
      <div className="flex w-max animate-marquee space-x-12">
        {/* First repetition */}
        <div className="flex items-center space-x-12 shrink-0">
          {marqueeItems.map((item, idx) => (
            <div key={`a-${idx}`} className="flex items-center space-x-12">
              <span className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] hover:text-white hover:[-webkit-text-stroke:0px] transition-colors cursor-default whitespace-nowrap">
                {item}
              </span>
              <span className="w-3 h-3 rounded-full bg-[#e8174e] shrink-0" />
            </div>
          ))}
        </div>

        {/* Second repetition for seamless loop */}
        <div className="flex items-center space-x-12 shrink-0">
          {marqueeItems.map((item, idx) => (
            <div key={`b-${idx}`} className="flex items-center space-x-12">
              <span className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] hover:text-white hover:[-webkit-text-stroke:0px] transition-colors cursor-default whitespace-nowrap">
                {item}
              </span>
              <span className="w-3 h-3 rounded-full bg-[#e8174e] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
