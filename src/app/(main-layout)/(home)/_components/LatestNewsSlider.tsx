"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  slug: string;
  image: string;
}

const newsList: NewsItem[] = [
  {
    id: 1,
    title: "Acme Robotics: Next-Gen Automation",
    category: "News",
    date: "May 25, 2023",
    slug: "acme-robotics-next-gen-automation",
    image:
      "/images/automation-industry-concept-with-3d-rendering-robot-assembly-line-factory-550x362.jpg",
  },
  {
    id: 2,
    title: "PrecisionTech Expands Globally",
    category: "Insights",
    date: "May 22, 2023",
    slug: "innovtech-sets-new-standards",
    image:
      "/images/mechanized-industry-robot-arm-factory-worker-double-exposure-550x362.jpg",
  },
  {
    id: 3,
    title: "XpoTech Conference Highlights",
    category: "News",
    date: "May 18, 2023",
    slug: "xpotech-conference-highlights",
    image:
      "/images/modern-production-cars-futuristic-plant-future-generative-ai-550x362.jpg",
  },
  {
    id: 4,
    title: "SmartTech's IoT Platform",
    category: "Insights",
    date: "May 15, 2023",
    slug: "smarttechs-iot-platform",
    image:
      "/images/robot-being-programmed-with-intricate-complex-set-commands-carry-out-mission-550x362.jpg",
  },
  {
    id: 5,
    title: "Industry 4.0 at AlphaManufacturing",
    category: "News",
    date: "May 12, 2023",
    slug: "industry-4-0-at-alphamanufacturing",
    image: "/images/robotic-futuristic-science-550x362.jpg",
  },
  {
    id: 6,
    title: "Global Supply Chain Horizons",
    category: "Insights",
    date: "May 08, 2023",
    slug: "precisiontech-expands-globally",
    image:
      "/images/smart-industry-robot-arms-digital-factory-production-technology-550x362.jpg",
  },
];

export const LatestNewsSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prev) => (prev === 0 ? newsList.length - 1 : prev - 1));
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % newsList.length);
  };

  // 3 visible articles at a time
  const visibleNews = [
    newsList[startIndex],
    newsList[(startIndex + 1) % newsList.length],
    newsList[(startIndex + 2) % newsList.length],
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-block mb-3">
              <Link
                href="/news"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-[#e8174e] transition-colors"
              >
                <span>Latest News</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              Latest News
            </h2>
            <p className="mt-3 text-lg sm:text-xl text-neutral-400 font-normal">
              Today&apos;s News, Tomorrow&apos;s Strategy
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous News"
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-[#e8174e] hover:border-[#e8174e] text-white flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next News"
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-[#e8174e] hover:border-[#e8174e] text-white flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Columns News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {visibleNews.map((item) => (
            <article
              key={item.id}
              className="group bg-[#111111] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#e8174e]/60 transition-all duration-300"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#e8174e] text-white text-xs font-semibold uppercase tracking-wider -skew-x-12">
                      <span className="skew-x-12 inline-block">
                        {item.category}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#e8174e]" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#e8174e] transition-colors leading-snug">
                    <Link href={`/news/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>
                </div>
              </div>

              {/* Bottom Read More Action */}
              <div className="p-6 pt-0 border-t border-white/5">
                <Link
                  href={`/news/${item.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-neutral-300 group-hover:text-[#e8174e] transition-colors pt-4"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
