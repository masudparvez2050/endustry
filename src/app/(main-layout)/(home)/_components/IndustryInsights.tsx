"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const sliderImages = [
  "/images/army-robots-futuristic-technology-concept-digital-3d-illustration-1000x1000.jpg",
  "/images/oil-refinery-plant-with-oil-gas-chemical-tank-twilight-1000x1000.jpg",
  "/images/artificial-intelligence-technology-engineering-concept-3d-rendering-abstract-ai-technology-web-background-virtual-concept-neuron-concept-global-network-1000x1000.jpg",
];

const tabsData = [
  {
    id: "history",
    title: "History",
    content:
      "Welcome to Endustry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress for over 65 years. Our diverse team of experts brings together a wealth of knowledge and experience, delivering cutting-edge solutions that redefine industry standards.",
  },
  {
    id: "mission",
    title: "Mission",
    content:
      "At company, Our mission is to revolutionize the Endustry landscape by delivering cutting-edge solutions that exceed expectations and empower our clients for success. We are driven by innovation, committed to precision, and dedicated to enhancing the efficiency and sustainability of industries worldwide.",
  },
  {
    id: "vision",
    title: "Vision",
    content:
      "At company, our vision is to be the undisputed leader in the Endustry, pioneering transformative solutions that drive the industry forward and redefine what's possible. We aspire to be the go-to partner for businesses seeking unparalleled innovation, reliability, and sustainable growth. With a focus on continuous research, development, and cutting-edge technologies, we envision a future where our products and services empower industries to thrive in an ever-changing global landscape.",
  },
];

const progressBars = [
  { label: "Successful Projects Completed", value: 95 },
  { label: "Environmental Impact", value: 85 },
  { label: "Patents or Innovations", value: 75 },
];

export const IndustryInsights = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("history");

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] text-white border-b border-white/10 relative">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-block mb-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-[#e8174e] transition-colors"
              >
                <span>About Us</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              Industry Insights
            </h2>
            <p className="mt-3 text-lg sm:text-xl text-neutral-400 font-normal">
              Empowering Industries, Enriching Lives
            </p>
          </div>
        </div>

        {/* Content Row: Cards Slider on Left, Tabs & Progress Bars on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-center">
          {/* Left Column: Stacked Image Cards Carousel */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-square">
              {sliderImages.map((img, idx) => {
                const isActive = idx === activeImage;
                const isNext = idx === (activeImage + 1) % sliderImages.length;
                return (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 ease-out rounded-lg overflow-hidden border border-white/10 shadow-2xl ${
                      isActive
                        ? "scale-100 z-20 opacity-100 translate-x-0 rotate-0"
                        : isNext
                        ? "scale-95 z-10 opacity-60 translate-x-6 rotate-2"
                        : "scale-90 z-0 opacity-0 -translate-x-6 -rotate-2 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={img}
                      alt="Industry Insight"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 480px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                );
              })}
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={prevImage}
                aria-label="Previous Image"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-[#e8174e] hover:border-[#e8174e] flex items-center justify-center text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm font-heading font-semibold text-neutral-400">
                0{activeImage + 1} / 0{sliderImages.length}
              </span>
              <button
                onClick={nextImage}
                aria-label="Next Image"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-[#e8174e] hover:border-[#e8174e] flex items-center justify-center text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Tabs and Progress Bars */}
          <div className="lg:col-span-6 space-y-10">
            {/* Tabs Navigation */}
            <div>
              <div className="flex items-center gap-8 border-b border-white/10 pb-4">
                {tabsData.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider relative transition-colors focus:outline-none ${
                        isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                      }`}
                    >
                      {tab.title}
                      {isActive && (
                        <span className="absolute left-0 -bottom-[17px] w-full h-[3px] bg-[#e8174e]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="pt-6 min-h-[120px]">
                {tabsData.map((tab) => {
                  if (tab.id !== activeTab) return null;
                  return (
                    <p
                      key={tab.id}
                      className="text-neutral-300 text-base sm:text-lg leading-relaxed animate-fadeIn"
                    >
                      {tab.content}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Horizontal Progress Bars */}
            <div className="space-y-6 pt-4 border-t border-white/10">
              {progressBars.map((bar, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-sm sm:text-base font-heading font-semibold text-white uppercase tracking-wider">
                    <span>{bar.label}</span>
                    <span className="text-[#e8174e] font-bold">{bar.value}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-neutral-200 to-[#e8174e] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${bar.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
