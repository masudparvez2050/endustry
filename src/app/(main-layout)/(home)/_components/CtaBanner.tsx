import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export const CtaBanner = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Graphic */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#e8174e]">
              Turnkey Industrial Delivery
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Upgrade Your Industrial Capacity & Infrastructure?
            </h2>
            <p className="text-base text-gray-300 font-sans">
              Speak with our senior structural and mechanical engineering consultants. We provide comprehensive technical audits, turnkey CAD design, and scalable deployment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#e8174e] hover:bg-[#c60035] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-xl group"
            >
              <span>Request A Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:+15552345678"
              className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/20 transition-colors backdrop-blur-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#e8174e]" />
              <span>+1 (555) 234-5678</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
