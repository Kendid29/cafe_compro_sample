"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-surface-bright pt-space-3xl pb-space-2xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-space-3xl">
          <div className="md:col-span-5 flex flex-col justify-between space-y-space-md">
            <FadeIn className="space-y-space-sm">
              <div className="flex items-center gap-3">
                <img
                  alt="Senja Coffee Logo"
                  className="h-11 w-11 rounded-full object-contain drop-shadow-md ring-1 ring-white/20"
                  src="/logo.png"
                />
                <span className="font-headline-md text-headline-md tracking-tight text-surface-bright">Senja</span>
              </div>
              <p className="font-body-sm text-body-sm text-tertiary-fixed-dim max-w-sm font-light">
                Kissaten precision intertwined with Nordic warmth. Slow drips, artisanal roasts, and quiet lingering moments in the hills of West Java.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="pt-space-sm">
              <a className="inline-flex items-center gap-2 font-label-md text-label-md text-surface-bright hover:text-secondary-fixed transition-colors" href="https://instagram.com/senjacoffee" rel="noopener noreferrer" target="_blank">
                <span className="material-symbols-outlined text-[18px]">alternate_email</span>
                <span>senjacoffee</span>
              </a>
            </FadeIn>
          </div>
          
          <div className="md:col-span-3 space-y-space-sm">
            <FadeIn delay={0.2}>
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed-dim">Sanctuary &amp; Hours</p>
              <div className="space-y-1 text-surface-bright font-body-sm text-body-sm">
                <p className="font-medium">Jl. Dago Pakar Utara No. 42</p>
                <p className="text-tertiary-fixed-dim">Ciburial, Bandung, Jawa Barat 40198</p>
              </div>
              <div className="pt-space-xs space-y-0.5 text-tertiary-fixed-dim font-body-sm text-body-sm">
                <p>Tuesday – Sunday: 07:30 – 21:00</p>
                <p>Closed on Mondays for roasting</p>
              </div>
            </FadeIn>
          </div>
          
          <div className="md:col-span-4 space-y-space-sm">
            <FadeIn delay={0.3}>
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed-dim">Editorial Navigation</p>
              <div className="flex flex-col space-y-2">
                <a className="font-body-sm text-body-sm text-surface-bright hover:text-secondary-fixed transition-colors duration-200" href="#story">The Kissaten Heritage</a>
                <a className="font-body-sm text-body-sm text-surface-bright hover:text-secondary-fixed transition-colors duration-200" href="#menu">Single Origin Reserve</a>
                <a className="font-body-sm text-body-sm text-surface-bright hover:text-secondary-fixed transition-colors duration-200" href="#experience">Ceremonial Pour Over</a>
                <a className="font-body-sm text-body-sm text-surface-bright hover:text-secondary-fixed transition-colors duration-200" href="#gallery">Atmosphere &amp; Space</a>
                <a className="font-body-sm text-body-sm text-surface-bright hover:text-secondary-fixed transition-colors duration-200" href="#location">Directions &amp; Map</a>
              </div>
            </FadeIn>
          </div>
        </div>
        
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-4 border-t border-surface-bright/10">
          <FadeIn delay={0.4} direction="none">
            <p className="font-label-sm text-label-sm text-tertiary-fixed-dim tracking-wider uppercase">© 2024 Senja Coffee K.K. All rights reserved.</p>
          </FadeIn>
          <FadeIn delay={0.5} direction="none">
            <p className="font-label-sm text-label-sm text-tertiary-fixed-dim tracking-wider uppercase">Crafted with slowness &amp; presence</p>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
