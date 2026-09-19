import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Energy" | "Manufacturing" | "Mechanical" | "Civil" | "Chemical";
  location: string;
  year: string;
  image: string;
  client: string;
  scope: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "offshore-wind",
    title: "Offshore Wind Turbine Complex",
    category: "Energy",
    location: "North Sea, Netherlands",
    year: "2024",
    client: "Nordic CleanPower B.V.",
    scope: "Design, structural steel installation, and offshore electrical grid linkage.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "automotive-plant",
    title: "Automated Automotive Body Assembly",
    category: "Manufacturing",
    location: "Stuttgart, Germany",
    year: "2023",
    client: "Bavaria AutoWerks",
    scope: "Full-line robotic welding, automated conveyor telemetry, and PLC controls.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "cnc-tooling",
    title: "Heavy Metallurgy & CNC Machining",
    category: "Mechanical",
    location: "Detroit, Michigan, USA",
    year: "2024",
    client: "Apex Titan Aerospace",
    scope: "Ultra-high tolerance turbine blades, casing milling, and stress diagnostics.",
    image:
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "chemical-refinery",
    title: "Eco-Polymer Chemical Facility",
    category: "Chemical",
    location: "Antwerp, Belgium",
    year: "2023",
    client: "SinoEuro Synthetics",
    scope: "Reactor vessel engineering, cryogenic piping, and zero-emission scrubbers.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "high-speed-rail",
    title: "Trans-Valley High-Speed Rail Viaduct",
    category: "Civil",
    location: "Lyon to Turin",
    year: "2024",
    client: "Alpine Transit Authority",
    scope: "Pre-stressed concrete spans, seismic seismic dampers, and tunnel boring logistics.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "cleanroom-facility",
    title: "Sub-Micron Semiconductor Fab",
    category: "Manufacturing",
    location: "Austin, Texas, USA",
    year: "2025",
    client: "SilicoDynamics Corp",
    scope: "ISO Class 1 Cleanroom HVAC, vibration isolation floor slabs, and gas distribution.",
    image:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
  },
];

export const FeaturedProjects = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#e8174e]">
              <span className="w-6 h-0.5 bg-[#e8174e]" />
              Portfolio Highlights
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#203556] tracking-tight">
              Landmark Industrial & Infrastructure Projects
            </h2>
            <p className="text-base text-gray-600 font-sans">
              Discover how our multidisciplinary teams solve complex industrial engineering challenges across continents.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#203556] hover:bg-[#12161f] text-white text-xs font-bold uppercase tracking-wider transition-colors group"
          >
            <span>Browse All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, 6).map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#0a0a0a] overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-end min-h-[380px]"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Tag in top-left */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3 py-1 bg-[#e8174e] text-white text-[11px] font-bold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Overlay Content */}
              <div className="relative z-10 p-6 sm:p-7 space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-xs font-medium text-gray-300 flex items-center gap-2">
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans">
                  {project.scope}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-white/20">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">
                    Client: {project.client}
                  </span>
                  <Link
                    href="/projects"
                    className="w-8 h-8 rounded-none bg-white text-black group-hover:bg-[#e8174e] group-hover:text-white flex items-center justify-center transition-colors"
                    aria-label={`View details for ${project.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
