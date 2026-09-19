"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  num: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    num: "01",
    title: "Your Path to Industry Success",
    description:
      "At the heart of the global landscape, industry stands as a multidimensional force of progress, driving economies.",
    buttonText: "Details",
    buttonLink: "/services",
    image:
      "/images/cnc-laser-plasma-selective-focus-modern-technology-laser-plasma-cutting-metal-process-m.jpg",
  },
  {
    id: 2,
    num: "02",
    title: "A Platform for Industry Excellence",
    description:
      "In the realm of industry, the pursuit of excellence intertwines with the pursuit of progress. Industries, diverse and dynamic.",
    buttonText: "Details",
    buttonLink: "/services",
    image: "/images/grinder-workshopgenerative-ai.jpg",
  },
  {
    id: 3,
    num: "03",
    title: "Your Gateway to Industry Insights",
    description:
      "Industry, as the beating heart of modern economies, plays a pivotal role in driving progress and shaping societies.",
    buttonText: "Details",
    buttonLink: "/services",
    image:
      "/images/sparks-flying-while-industry-machine-grinding-finishing-metal-metallurgical-plant.jpg",
  },
  {
    id: 4,
    num: "04",
    title: "Industry Excellence, One Click Away",
    description:
      "In the interconnected world of today, industry excellence is no longer bound by geographical constraints.",
    buttonText: "Details",
    buttonLink: "/services",
    image:
      "/images/portrait-busy-working-man-his-workplace-metal-factory.jpg",
  },
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[680px] sm:h-[750px] lg:h-[860px] w-full overflow-hidden bg-[#0a0a0a]">
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Ken-Burns animation */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out ${
                isActive ? "scale-110" : "scale-100"
              }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60" />

            {/* Slide Content */}
            <div className="relative z-20 h-full max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-20">
              <div className="max-w-3xl space-y-6">
                <h1
                  className={`font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] transition-all duration-700 delay-100 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.title}
                </h1>

                <p
                  className={`text-lg sm:text-xl text-neutral-300 max-w-xl font-normal transition-all duration-700 delay-200 leading-relaxed ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.description}
                </p>

                <div
                  className={`pt-2 transition-all duration-700 delay-300 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <Link
                    href={slide.buttonLink}
                    className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#e8174e] hover:bg-white text-white hover:text-[#0a0a0a] font-heading font-semibold text-sm uppercase tracking-wider transition-all duration-300 -skew-x-12 group shadow-xl"
                  >
                    <span className="skew-x-12 inline-flex items-center gap-2">
                      <span>{slide.buttonText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Bottom Left Numbered Navigation */}
      <div className="absolute bottom-10 left-6 sm:left-12 lg:left-24 z-30 flex items-center gap-6">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrent(idx)}
            className="group flex flex-col items-start focus:outline-none"
          >
            <span
              className={`font-heading text-sm sm:text-base font-bold transition-colors ${
                current === idx ? "text-white" : "text-white/40 group-hover:text-white/80"
              }`}
            >
              {s.num}
            </span>
            <span
              className={`h-[2px] transition-all duration-300 mt-1 ${
                current === idx ? "w-10 bg-[#e8174e]" : "w-4 bg-white/20 group-hover:bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Bottom Right Controls (Prev / Next) */}
      <div className="absolute bottom-10 right-6 sm:right-12 lg:right-24 z-30 flex items-center gap-2">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-12 h-12 rounded-full border border-white/20 bg-black/40 hover:bg-[#e8174e] hover:border-[#e8174e] text-white flex items-center justify-center transition-all backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-12 h-12 rounded-full border border-white/20 bg-black/40 hover:bg-[#e8174e] hover:border-[#e8174e] text-white flex items-center justify-center transition-all backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
