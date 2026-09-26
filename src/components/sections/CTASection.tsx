"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function CTASection() {
  return (
    <section className="w-full py-space-3xl bg-primary text-surface-bright relative overflow-hidden">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary/15 filter blur-3xl pointer-events-none"></div>
      <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-secondary-container/10 filter blur-3xl pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin text-center relative z-10">
        <div className="max-w-2xl mx-auto space-y-space-md">
          <FadeIn>
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-secondary-fixed"></span>
              <span className="font-label-sm text-label-sm tracking-[0.3em] uppercase text-secondary-fixed">Slow Down With Us</span>
              <span className="w-8 h-[1px] bg-secondary-fixed"></span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-surface-bright tracking-tight leading-tight">
              Ready for your next coffee moment?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="font-body-lg text-body-lg text-tertiary-fixed-dim font-light max-w-lg mx-auto">
              Drop by, take a seat, and enjoy your time at Senja Coffee. Your table by the courtyard is waiting.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3} className="pt-space-sm flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full bg-secondary text-surface-bright font-label-md text-label-md tracking-wider uppercase hover:bg-on-secondary-container transition-colors duration-300 shadow-lg"
              href="#location"
            >
              Visit Us
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full border border-surface-bright/30 text-surface-bright font-label-md text-label-md tracking-wider uppercase hover:bg-surface-bright/10 transition-colors duration-300"
              href="#menu"
            >
              Browse Full Menu
            </a>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="font-label-sm text-label-sm text-tertiary-fixed-dim/60 tracking-wider pt-space-xs uppercase">
              No reservation needed • Walk-ins warmly welcomed
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
