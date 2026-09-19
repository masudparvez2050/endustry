import React from "react";
import { Phone, Mail, Clock } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export const TopBar = () => {
  return (
    <div className="bg-[#12161f] text-gray-300 text-xs border-b border-gray-800/80 hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        {/* Left: Contact info */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-3.5 h-3.5 text-[#e8174e]" />
            <span>+1 (555) 234-5678</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-3.5 h-3.5 text-[#e8174e]" />
            <a href="mailto:info@endustry.org" className="hover:text-white transition-colors">
              info@endustry.org
            </a>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Clock className="w-3.5 h-3.5 text-[#e8174e]" />
            <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Right: Social icons & Quote CTA */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 text-gray-400">
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
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#e8174e] transition-colors"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
          </div>

          <span className="text-gray-700">|</span>

          <Link
            href="/contact"
            className="text-xs font-semibold uppercase tracking-wider text-white hover:text-[#e8174e] transition-colors flex items-center gap-1.5"
          >
            Request A Quote
          </Link>
        </div>
      </div>
    </div>
  );
};
