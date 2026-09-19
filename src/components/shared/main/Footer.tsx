"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#0b0e14] text-gray-400 font-sans border-t border-gray-800/80">
      {/* Newsletter / CTA Banner */}
      <div className="bg-[#121620] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#e8174e]">
                Stay Updated
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">
                Subscribe to Our Industrial Newsletter
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Get latest industry insights, project reports, and engineering trends directly in your inbox.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="w-full md:w-auto flex-1 max-w-md flex flex-col sm:flex-row gap-2"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3.5 bg-[#080a0e] text-white text-sm border border-gray-700 focus:border-[#e8174e] focus:outline-none placeholder-gray-500 rounded-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={subscribed}
                className="px-6 py-3.5 bg-[#e8174e] hover:bg-[#c60035] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 whitespace-nowrap active:scale-95"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1: About Endustry */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Endustry<span className="text-[#e8174e]">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              At the heart of the global landscape, industry stands as a multidimensional force of progress, driving modern economies with precision and sustainable innovation.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-gray-800/80 hover:bg-[#e8174e] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-gray-800/80 hover:bg-[#e8174e] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-800/80 hover:bg-[#e8174e] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-gray-800/80 hover:bg-[#e8174e] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white tracking-wide mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-[#e8174e]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Featured Projects", href: "/projects" },
                { name: "News & Articles", href: "/news" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:translate-x-1.5 transition-all inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#e8174e] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white tracking-wide mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-[#e8174e]">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Mechanical Engineering",
                "Civil Construction",
                "Chemical Research",
                "Power & Energy",
                "Automotive Industry",
                "Industrial Automation",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="hover:text-white hover:translate-x-1.5 transition-all inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#e8174e] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-white tracking-wide mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-[#e8174e]">
              Contact Info
            </h4>
            <div className="flex items-start space-x-3 text-sm">
              <MapPin className="w-5 h-5 text-[#e8174e] shrink-0 mt-0.5" />
              <span>4517 Washington Ave. Manchester, Kentucky 39495, USA</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="w-4 h-4 text-[#e8174e] shrink-0" />
              <span>+1 (555) 234-5678</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="w-4 h-4 text-[#e8174e] shrink-0" />
              <a href="mailto:info@endustry.org" className="hover:text-white transition-colors">
                info@endustry.org
              </a>
            </div>
            <div className="pt-3 border-t border-gray-800 text-xs text-gray-500">
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p>Weekend: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#07090e] border-t border-gray-900 py-6 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Endustry. All Rights Reserved. Built with Precision.</p>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
