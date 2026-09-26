"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[650px] overflow-hidden bg-surface flex flex-col justify-end">
      {/* Full Bleed Atmospheric Imagery with Warm Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[0.98]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8YIoXSPA1oj6D3_moT01-mGgoz3R1gk_lZ8PHVPSaWlX-fQJYPdwZkCq79_8l3mPXsAAMEJU-2Cw5fXreq52XUS0LKRG8oTLS03fLsHIK3ivRrTjXg3WqAMpHkjTKwAKzPIhDkKoImyC48Qai_ziHEYMPui5fYcfi0eFejg44D1Zox0StPWypayymjAy1MbnR2Q2FgspK5jXeaM9acod4CCICpeF7L382Op1a-t6d92NXnbneyU9X"
          alt="Warm cafe interior"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-primary/25"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/30 to-transparent"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-margin-mobile md:px-margin pt-28 pb-8 md:pb-12 flex flex-col justify-end">
        <div className="max-w-2xl flex flex-col items-start space-y-space-md text-surface-bright">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-3">
                <span className="w-6 h-[1px] bg-secondary-fixed"></span>
                <span className="font-label-sm text-label-sm tracking-[0.3em] uppercase text-tertiary-fixed">Senja Coffee</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="font-display text-headline-xl-mobile md:text-display tracking-tight text-surface-bright leading-none">
                Where coffee, <span className="italic font-normal text-secondary-fixed">stories</span>, and memories meet.
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="font-body-lg text-body-lg text-tertiary-fixed-dim font-light max-w-xl leading-relaxed">
                A cozy coffee space crafted for meaningful conversations, creative moments, and everyday escapes in the highlands of Bandung.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} className="flex flex-wrap items-center gap-4 pt-space-sm">
              <a
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary-container text-surface-bright font-label-md text-label-md tracking-wider uppercase hover:bg-secondary transition-all duration-300 shadow-md"
                href="#menu"
              >
                Explore Menu
              </a>
              <a
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-surface-bright/10 backdrop-blur-sm text-surface-bright border border-surface-bright/40 font-label-md text-label-md tracking-wider uppercase hover:bg-surface-bright hover:text-primary transition-all duration-300"
                href="#location"
              >
                Visit Us
              </a>
            </FadeIn>
          </div>
          
          {/* Ambient Metadata Strip */}
          <FadeIn delay={0.5}>
            <div className="mt-space-xl pt-space-md border-t border-surface-bright/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-tertiary-fixed-dim font-label-sm text-label-sm tracking-wider uppercase">
              <div>
                <span className="block text-surface-bright/50 text-[10px]">Altitude</span>
                <span className="text-surface-bright">1,200m — Dago Pakar</span>
              </div>
              <div>
                <span className="block text-surface-bright/50 text-[10px]">Philosophy</span>
                <span className="text-surface-bright">Slow Drip • Hygge Comfort</span>
              </div>
              <div>
                <span className="block text-surface-bright/50 text-[10px]">Curated Roast</span>
                <span className="text-surface-bright">West Java Single Origin</span>
              </div>
              <div>
                <span className="block text-surface-bright/50 text-[10px]">Open Daily</span>
                <span className="text-surface-bright">08.00 — 22.00 WIB</span>
              </div>
            </div>
          </FadeIn>
      </div>
    </section>
  );
}
