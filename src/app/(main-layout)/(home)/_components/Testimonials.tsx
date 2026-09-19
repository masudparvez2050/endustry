import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Vance",
      role: "Operations Director",
      company: "Nordic CleanPower B.V.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Endustry's offshore engineering team completed our 45-turbine foundation phase three weeks ahead of schedule. Their technical rigor, safety compliance, and proactive problem solving are second to none.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "Chief Engineer",
      company: "Bavaria AutoWerks",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      content:
        "The automated robotic welding lines installed by Endustry boosted our cycle output by 34% while reducing structural rejection rates to near zero. An exceptional industrial engineering partner.",
      rating: 5,
    },
    {
      name: "David H. Miller",
      role: "VP of Plant Operations",
      company: "Apex Titan Aerospace",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "When dealing with titanium CNC tolerances under 5 microns, there is no margin for error. Endustry's tooling accuracy and metallurgy diagnostics delivered perfection on every single batch.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#e8174e]">
            <span className="w-6 h-0.5 bg-[#e8174e]" />
            Client Endorsements
            <span className="w-6 h-0.5 bg-[#e8174e]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#203556] tracking-tight">
            Trusted by Global Industry Leaders
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans">
            Hear directly from the engineering executives and plant directors whose operations rely on Endustry.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 sm:p-9 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-[#e8174e]/20 mb-4" />
                
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#e8174e] text-[#e8174e]" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed font-sans italic mb-8">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#e8174e]/30">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-[#203556]">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">{t.role}</p>
                  <p className="text-xs text-[#e8174e] font-semibold">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
