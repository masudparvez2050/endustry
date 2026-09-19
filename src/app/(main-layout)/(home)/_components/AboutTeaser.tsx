import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, ShieldCheck, ArrowRight } from "lucide-react";

export const AboutTeaser = () => {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "540+", label: "Completed Projects" },
    { number: "99.4%", label: "Satisfaction Rate" },
    { number: "85+", label: "Global Patents & Awards" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 w-full overflow-hidden shadow-2xl rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Industrial Engineer working on precision machinery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0a0a0a] text-white p-6 sm:p-8 border-l-4 border-[#e8174e] shadow-2xl max-w-[260px]">
              <div className="flex items-center gap-3">
                <Award className="w-10 h-10 text-[#e8174e] shrink-0" />
                <div>
                  <div className="font-heading text-3xl font-extrabold text-white">25+</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    Years of Industrial Mastery
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#e8174e]">
              <span className="w-6 h-0.5 bg-[#e8174e]" />
              About Endustry
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#203556] tracking-tight leading-tight">
              Innovating Industry Solutions With Modern Engineering & Craftsmanship
            </h2>

            <p className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed">
              For over two decades, Endustry has stood as an international leader in delivering heavy manufacturing, precision civil construction, and renewable energy ecosystems designed to sustain modern global infrastructure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                "Modern Automated Machinery",
                "Certified Industrial Engineers",
                "Strict Safety & ISO Compliance",
                "Sustainable Green Practices",
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#e8174e] shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Counter Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-[#203556]">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#203556] hover:bg-[#12161f] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md group"
              >
                <span>Discover Our Heritage</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
