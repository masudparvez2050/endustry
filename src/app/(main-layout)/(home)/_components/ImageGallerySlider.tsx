"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "/images/cool-triangular-shaped-illustration-with-futuristic-sci-fi-techno-lights-background.jpg",
    alt: "Sci-Fi Techno Lights",
  },
  {
    src: "/images/metaverse-concept-collage-design.jpg",
    alt: "Metaverse Concept Collage",
  },
  {
    src: "/images/manager-engineer-check-control-automation-robot-arms-machine-industrial-welding-robotics.jpg",
    alt: "Automation Robot Arms Welding",
  },
  {
    src: "/images/male-electrician-protective-helmet-generative-al.jpg",
    alt: "Electrician Protective Helmet",
  },
  {
    src: "/images/industrial-furnace-heat-exchanger-cracking-hydrocarbons-factory-sky-sunset-close-up-equipment-petrochemical-plant.jpg",
    alt: "Industrial Furnace Petrochemical Plant",
  },
  {
    src: "/images/container-truck-ship-port-ai-generated-image.jpg",
    alt: "Container Port Logistics",
  },
];

export const ImageGallerySlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const prev = () => {
    setStartIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Re-order images to display 3 or 4 visible in slider
  const visibleItems = [
    galleryImages[startIndex],
    galleryImages[(startIndex + 1) % galleryImages.length],
    galleryImages[(startIndex + 2) % galleryImages.length],
    galleryImages[(startIndex + 3) % galleryImages.length],
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Slider Controls */}
        <div className="flex justify-between items-center mb-8 px-2">
          <span className="text-xs uppercase font-heading font-semibold tracking-widest text-neutral-400">
            Industrial Photo Highlights
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-[#e8174e] hover:border-[#e8174e] text-white flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-[#e8174e] hover:border-[#e8174e] text-white flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleItems.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImg(img.src)}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer border border-white/10 bg-[#141414]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#e8174e] text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white hover:text-[#e8174e] p-2"
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative w-full max-w-5xl h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImg}
              alt="Enlarged gallery photo"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
};
