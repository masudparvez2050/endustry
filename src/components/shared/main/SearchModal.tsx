"use client";

import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onClose();
      router.push(`/projects?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Close search"
      >
        <X className="w-7 h-7" />
      </button>

      <div className="w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type your search query and press Enter..."
            autoFocus
            className="w-full px-6 py-5 pr-14 text-lg md:text-2xl text-white bg-transparent border-b-2 border-gray-600 focus:border-[#e8174e] focus:outline-none placeholder-gray-500 font-sans tracking-wide transition-colors"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#e8174e] transition-colors"
            aria-label="Submit search"
          >
            <Search className="w-6 h-6" />
          </button>
        </form>

        <div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
          <span>Popular searches:</span>
          <button
            onClick={() => {
              setSearchTerm("Engineering");
              router.push("/services");
              onClose();
            }}
            className="text-gray-300 hover:text-[#e8174e] underline underline-offset-4"
          >
            Engineering
          </button>
          <button
            onClick={() => {
              setSearchTerm("Construction");
              router.push("/projects");
              onClose();
            }}
            className="text-gray-300 hover:text-[#e8174e] underline underline-offset-4"
          >
            Construction
          </button>
          <button
            onClick={() => {
              setSearchTerm("Renewable Energy");
              router.push("/services");
              onClose();
            }}
            className="text-gray-300 hover:text-[#e8174e] underline underline-offset-4"
          >
            Energy
          </button>
        </div>
      </div>
    </div>
  );
};
