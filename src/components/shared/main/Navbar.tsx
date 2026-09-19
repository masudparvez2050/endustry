"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { SearchModal } from "./SearchModal";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-[#0a0a0a] border-b border-white/10 ${
          isScrolled ? "shadow-2xl py-3" : "py-5"
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Site Title / Logo */}
          <div className="site-branding">
            <Link href="/" className="inline-block group">
              <span className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-white">
                Endustry<span className="text-[#e8174e]">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center space-x-1 text-sm font-semibold font-heading">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 inline-block transition-colors duration-200 z-10 group ${
                        active ? "text-white" : "text-white/80 hover:text-[#0a0a0a]"
                      }`}
                    >
                      {/* Skew background indicator on hover / active */}
                      <span
                        className={`absolute inset-0 -skew-x-12 rounded-[2px] transition-all duration-200 -z-10 ${
                          active
                            ? "bg-[#e8174e] opacity-100"
                            : "bg-[#e8dad3] opacity-0 group-hover:opacity-100"
                        }`}
                      />
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Search Toggle Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="ml-4 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Social Icons Container */}
            <div className="ml-4 pl-4 border-l border-white/15 flex items-center space-x-3 text-white/70">
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
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-white/70 hover:text-white"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-white hover:text-[#e8174e] focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className="flex flex-col space-y-1.5 w-6">
                <span
                  className={`h-0.5 w-full bg-white transition-transform ${
                    isMobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-white transition-opacity ${
                    isMobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-white transition-transform ${
                    isMobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileOpen && (
          <div className="lg:hidden bg-[#0a0a0a] border-t border-white/10 px-4 py-6 space-y-4">
            <ul className="space-y-2 font-heading font-semibold text-sm">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`block px-4 py-2.5 rounded-sm ${
                        active
                          ? "bg-[#e8174e] text-white"
                          : "text-white/80 hover:bg-white/10 text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-4 border-t border-white/10 flex items-center space-x-4 text-white/80 px-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF className="w-4 h-4 hover:text-[#e8174e]" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="w-4 h-4 hover:text-[#e8174e]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="w-4 h-4 hover:text-[#e8174e]" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
