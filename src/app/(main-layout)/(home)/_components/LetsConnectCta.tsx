"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

const greetings = ["Bonjour", "Hello", "Hola", "Ciao", "Namaste"];

interface Office {
  city: string;
  phone: string;
  email: string;
  address: string;
}

const offices: Office[] = [
  {
    city: "New York Office",
    phone: "555-1296",
    email: "info@endustry.com",
    address: "123 Main Street, Suite 200 City: Anytown State: StateName",
  },
  {
    city: "Paris Office",
    phone: "+33 1 23 45 9966",
    email: "info@endustryparis.com",
    address: "123 Rue de la Paix, 75002 Paris, France",
  },
  {
    city: "Berlin Office",
    phone: "+49 30 12343693",
    email: "info@endustryberlin.com",
    address: "Mauerstrasse 45, 10117 Berlin, Germany",
  },
];

export const LetsConnectCta = () => {
  const [greetingIdx, setGreetingIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGreetingIdx((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-block mb-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-[#e8174e] transition-colors"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              Let&apos;s Connect
            </h2>
            <p className="mt-3 text-lg sm:text-xl text-neutral-400 font-normal">
              Industry Solutions Start with a Simple Contact
            </p>
          </div>
        </div>

        {/* Big Interactive Typewriter Box */}
        <div className="py-20 border-b border-white/10 flex flex-col items-center justify-center text-center space-y-8">
          <div className="space-y-4">
            <p className="font-heading text-2xl sm:text-4xl md:text-5xl font-light text-neutral-400">
              Have a project in mind?
            </p>
            <h3 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-white">
              Do not hesitate to say{" "}
              <span className="text-[#e8174e] underline decoration-[#e8174e]/40 transition-all">
                {greetings[greetingIdx]}
              </span>
            </h3>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#e8174e] hover:bg-white text-white hover:text-[#0a0a0a] font-heading font-bold text-sm uppercase tracking-widest transition-all duration-300 -skew-x-12 shadow-2xl group"
          >
            <span className="skew-x-12 inline-flex items-center gap-2">
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>

        {/* 3 Global Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          {offices.map((office, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#111111] border border-white/10 rounded-sm hover:border-[#e8174e]/60 transition-all duration-300 group"
            >
              <h5 className="font-heading text-xl font-bold uppercase tracking-tight text-white mb-6 group-hover:text-[#e8174e] transition-colors">
                {office.city}
              </h5>

              <ul className="space-y-4 text-sm text-neutral-400">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#e8174e] shrink-0" />
                  <a
                    href={`tel:${office.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {office.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#e8174e] shrink-0" />
                  <a
                    href={`mailto:${office.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {office.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#e8174e] shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
