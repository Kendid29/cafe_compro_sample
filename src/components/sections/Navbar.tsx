"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-surface/85 backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(26,18,13,0.06)] border-b border-surface-container-highest/60 py-0"
          : "bg-transparent backdrop-blur-none border-b border-transparent shadow-none py-1 md:py-2"
      )}
    >
      <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              alt="Senja Coffee Logo"
              className={cn(
                "h-11 w-11 md:h-12 md:w-12 rounded-full object-contain transition-all duration-300 group-hover:scale-105",
                !isScrolled
                  ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] ring-2 ring-white/30"
                  : "drop-shadow-sm ring-1 ring-primary/10"
              )}
              src="/logo.png"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#story"
            className={cn(
              "font-label-md text-label-md tracking-wider uppercase transition-colors duration-200 py-1",
              isScrolled
                ? "text-on-surface-variant hover:text-primary"
                : "text-surface-bright/80 hover:text-surface-bright"
            )}
          >
            Story
          </Link>
          <Link
            href="#menu"
            className={cn(
              "font-label-md text-label-md tracking-wider uppercase transition-colors duration-200 py-1",
              isScrolled
                ? "text-on-surface-variant hover:text-primary"
                : "text-surface-bright/80 hover:text-surface-bright"
            )}
          >
            Menu
          </Link>
          <Link
            href="#experience"
            className={cn(
              "font-label-md text-label-md tracking-wider uppercase transition-colors duration-200 py-1",
              isScrolled
                ? "text-on-surface-variant hover:text-primary"
                : "text-surface-bright/80 hover:text-surface-bright"
            )}
          >
            Experience
          </Link>
          <Link
            href="#gallery"
            className={cn(
              "font-label-md text-label-md tracking-wider uppercase transition-colors duration-200 py-1",
              isScrolled
                ? "text-on-surface-variant hover:text-primary"
                : "text-surface-bright/80 hover:text-surface-bright"
            )}
          >
            Gallery
          </Link>
          <Link
            href="#location"
            className={cn(
              "font-label-md text-label-md tracking-wider uppercase transition-colors duration-200 py-1",
              isScrolled
                ? "text-on-surface-variant hover:text-primary"
                : "text-surface-bright/80 hover:text-surface-bright"
            )}
          >
            Location
          </Link>
        </nav>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#location"
            className={cn(
              "hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full font-label-md text-label-md tracking-wider uppercase transition-all duration-300",
              isScrolled
                ? "bg-primary text-on-primary hover:bg-secondary shadow-[0_4px_24px_-4px_rgba(26,18,13,0.08)]"
                : "bg-surface-bright/15 backdrop-blur-md text-surface-bright border border-surface-bright/35 hover:bg-surface-bright hover:text-primary shadow-sm"
            )}
          >
            Visit Us
          </Link>
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? "text-primary" : "text-surface-bright"} />
            ) : (
              <Menu className={isScrolled ? "text-primary" : "text-surface-bright"} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl shadow-xl py-6 px-margin-mobile flex flex-col gap-4 border-t border-surface-container-highest">
          <Link
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label-md text-label-md uppercase text-on-surface-variant hover:text-primary py-2 border-b border-surface-container/60"
          >
            Story
          </Link>
          <Link
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label-md text-label-md uppercase text-on-surface-variant hover:text-primary py-2 border-b border-surface-container/60"
          >
            Menu
          </Link>
          <Link
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label-md text-label-md uppercase text-on-surface-variant hover:text-primary py-2 border-b border-surface-container/60"
          >
            Experience
          </Link>
          <Link
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label-md text-label-md uppercase text-on-surface-variant hover:text-primary py-2 border-b border-surface-container/60"
          >
            Gallery
          </Link>
          <Link
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label-md text-label-md uppercase text-on-surface-variant hover:text-primary py-2 border-b border-surface-container/60"
          >
            Location
          </Link>
          <Link
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md tracking-wider uppercase mt-2 shadow-md hover:bg-secondary"
          >
            Visit Us
          </Link>
        </div>
      )}
    </header>
  );
}
