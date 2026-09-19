"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Alisson Taylor",
    role: "Team Manager",
    image:
      "/images/handsome-young-businessman-shirt-eyeglasses-e1687360303140.jpg",
  },
  {
    name: "Roger Craig",
    role: "CEO",
    image:
      "/images/portrait-businessman-with-folded-arms-looking-camera-e1687360182335.jpg",
  },
  {
    name: "Allan Cooper",
    role: "CTO",
    image:
      "/images/i-know-secret-success-studio-shot-businessman-grey-suit-posing-against-grey-background-e1687360425231.jpg",
  },
];

export const TeamPioneers = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              Meet the Industry Pioneers
            </h2>
            <p className="mt-3 text-lg sm:text-xl text-neutral-400 font-normal">
              Stronger Together, Innovating Forever
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group bg-[#111111] border border-white/10 rounded-sm overflow-hidden hover:border-[#e8174e]/60 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Member Details */}
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#e8174e] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-neutral-400 text-sm mt-0.5">
                    {member.role}
                  </p>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-3 text-neutral-400">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="hover:text-[#e8174e] transition-colors"
                  >
                    <FaFacebookF className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="hover:text-[#e8174e] transition-colors"
                  >
                    <FaXTwitter className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="hover:text-[#e8174e] transition-colors"
                  >
                    <FaInstagram className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="mailto:info@endustry.com"
                    aria-label="Email"
                    className="hover:text-[#e8174e] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
