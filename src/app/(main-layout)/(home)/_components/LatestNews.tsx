import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  image: string;
}

export const articlesData: ArticleItem[] = [
  {
    id: "robotics-metallurgy",
    title: "The Evolution of Automated Robotics in High-Tolerance Metallurgy",
    category: "Automation & Robotics",
    date: "March 15, 2025",
    author: "Dr. Alistair Kane",
    readTime: "5 min read",
    excerpt:
      "How multi-axis autonomous robotic cells and thermal camera diagnostics are redefining metallurgical reliability and minimizing scrap waste.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "offshore-wind-integration",
    title: "Overcoming Grid Synchronicity in Next-Gen Offshore Wind Projects",
    category: "Renewable Energy",
    date: "February 28, 2025",
    author: "Samantha Ward, PE",
    readTime: "7 min read",
    excerpt:
      "Technical deep-dive into high-voltage direct current (HVDC) subsea links and dynamic reactive power compensation for maritime turbine installations.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "green-hydrogen-refining",
    title: "Scaling Green Hydrogen to Decarbonize Heavy Chemical Refining",
    category: "Chemical Engineering",
    date: "January 19, 2025",
    author: "Julian Thorne",
    readTime: "6 min read",
    excerpt:
      "Examining proton exchange membrane (PEM) electrolyzer installations at industrial petrochemical hubs and their life-cycle emissions reduction.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "smart-factory-iot",
    title: "Designing Resilient Sensor Fabrics for Industry 4.0 Facilities",
    category: "Smart Factory",
    date: "December 12, 2024",
    author: "Vikram Malhotra",
    readTime: "4 min read",
    excerpt:
      "Industrial IoT architectures capable of surviving high electromagnetic interference, toxic atmospheres, and extreme heat cycles.",
    image:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "seismic-civil-structures",
    title: "Advanced Seismic Dampers in Mega-Infrastructure Projects",
    category: "Civil Engineering",
    date: "November 30, 2024",
    author: "Elena Vasquez",
    readTime: "8 min read",
    excerpt:
      "A review of elastomeric and viscous fluid dampers implemented across recent suspension bridges and deep-soil industrial towers.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ev-chassis-materials",
    title: "Lightweight Composite Alloys in Modern Automotive Body Shops",
    category: "Automotive",
    date: "October 22, 2024",
    author: "Marcus Vance",
    readTime: "5 min read",
    excerpt:
      "How automotive manufacturers are blending aerospace carbon fiber with micro-alloyed steel to satisfy stringent EV safety and range demands.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  },
];

export const LatestNews = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#e8174e]">
              <span className="w-6 h-0.5 bg-[#e8174e]" />
              Industry Insights
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#203556] tracking-tight">
              Latest News, Articles & Research
            </h2>
            <p className="text-base text-gray-600 font-sans">
              Stay at the forefront of manufacturing breakthroughs, sustainable engineering, and infrastructure advancements.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#e8174e] text-[#203556] hover:text-white text-xs font-bold uppercase tracking-wider border border-gray-200 hover:border-[#e8174e] transition-all shadow-sm group"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Featured News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="bg-white border border-gray-200/80 hover:border-[#e8174e]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#e8174e] text-white text-[11px] font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#e8174e]" />
                      <span>{article.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#e8174e]" />
                      <span>{article.author}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#203556] group-hover:text-[#e8174e] transition-colors leading-snug">
                    <Link href="/news">{article.title}</Link>
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed font-sans line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-2">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#203556] group-hover:text-[#e8174e] transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
