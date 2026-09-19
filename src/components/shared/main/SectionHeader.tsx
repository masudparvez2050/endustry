"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SectionHeaderProps {
  badge?: string;
  badgeHref?: string;
  superTitle: string;
  heading?: string;
  actionText?: string;
  actionHref?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeHref,
  superTitle,
  heading,
  actionText,
  actionHref,
  align = "left",
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 ${
        align === "center" ? "text-center md:items-center" : ""
      } ${className}`}
    >
      <div className="space-y-3 max-w-2xl">
        {/* Optional pill badge */}
        {badge && (
          <div className="inline-block">
            {badgeHref ? (
              <Link
                href={badgeHref}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-[#e8174e] transition-colors"
              >
                <span>{badge}</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white/80">
                {badge}
              </span>
            )}
          </div>
        )}

        {/* Super title */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
          {superTitle}
        </h2>

        {/* Subtitle / Description heading */}
        {heading && (
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-normal">
            {heading}
          </p>
        )}
      </div>

      {/* Action link */}
      {actionText && actionHref && (
        <div className="shrink-0">
          <Link
            href={actionHref}
            className="group inline-flex items-center gap-2 text-sm font-semibold font-heading uppercase tracking-wider text-white hover:text-[#e8174e] transition-colors"
          >
            <span>{actionText}</span>
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#e8174e] group-hover:bg-[#e8174e] group-hover:text-white transition-all">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};
