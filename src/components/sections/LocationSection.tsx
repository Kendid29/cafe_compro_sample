"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function LocationSection() {
  return (
    <section className="w-full py-space-3xl bg-surface-container-low" id="location">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          {/* Left: Styled Map Container with Location Pin (6 cols) */}
          <div className="lg:col-span-6 relative rounded-lg overflow-hidden min-h-[420px] shadow-sm bg-surface-container">
            <FadeIn direction="none" className="w-full h-full">
              {/* Static Location Pipeline Element */}
              <div
                className="w-full h-full min-h-[420px] bg-cover bg-center filter saturate-75"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBE5cFFfw1RPkNtTJIQFmSzVGLGT1A05PRPEOt1fMvIA8GjEjMhEowhDm8mR_dIhHoTvWZu2sZH4TpiPeokwMNoH4ASqt-Uk7JuTEe90p1CMgz5fiVKUlYXlhoK9p5fHrMmiYlANF4ldrqC3eN_xwcJRN3blbtCxI97HbKRoEACmtoegxKplfA3Q_tos9OJl3U8-4_Y67RBJGI9o-omL8X8OwIXMnEe_6Qw5FxiB-v5BNma56XR2BKp')" }}
              ></div>
              {/* Map Overlay Card */}
              <div className="absolute top-6 left-6 right-6 md:right-auto md:max-w-xs bg-surface/95 backdrop-blur-md p-5 rounded-md shadow-md border border-surface-container-highest">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 rounded-full bg-secondary animate-ping"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Senja Sanctuary</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Jl. Progo No. 12, Riau — Bandung</p>
                <p className="text-[12px] text-secondary font-medium mt-1">Free guest parking • High-speed Wi-Fi</p>
              </div>
            </FadeIn>
          </div>
          
          {/* Right: Visit Details (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 md:p-12 bg-surface-card rounded-lg shadow-sm">
            <div className="space-y-space-md">
              <FadeIn delay={0.1}>
                <span className="font-label-sm text-label-sm tracking-[0.25em] text-secondary uppercase font-semibold">Sanctuary Hours</span>
                <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary tracking-tight mt-1">
                  Visit Senja Coffee
                </h2>
              </FadeIn>
              
              {/* Address Group */}
              <FadeIn delay={0.2} className="space-y-1.5 pb-4 border-b border-surface-container">
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/70">Address</p>
                <p className="font-headline-sm text-headline-sm text-primary">
                  Jl. Progo No. 12, Riau
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant font-light">
                  Bandung, West Java, Indonesia 40115
                </p>
              </FadeIn>
              
              {/* Hours Group */}
              <FadeIn delay={0.3} className="space-y-2 pb-4 border-b border-surface-container">
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/70">Opening Hours</p>
                <div className="flex items-center justify-between text-body-md font-body-md">
                  <span className="text-primary font-medium">Monday — Sunday</span>
                  <span className="text-secondary font-semibold">08.00 AM — 10.00 PM</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant/80">
                  Kitchen closes at 09.15 PM. Pour-over bar open all day.
                </p>
              </FadeIn>
              
              {/* Contact & Social Group */}
              <FadeIn delay={0.4} className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/70">WhatsApp / Call</p>
                  <a className="font-body-md text-body-md text-primary hover:text-secondary font-medium transition-colors" href="tel:+6281234567890">
                    +62 812-3456-7890
                  </a>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant/70">Instagram</p>
                  <a className="font-body-md text-body-md text-primary hover:text-secondary font-medium transition-colors" href="https://instagram.com/senjacoffee" target="_blank" rel="noreferrer">
                    @senjacoffee
                  </a>
                </div>
              </FadeIn>
            </div>
            
            {/* Get Directions Button */}
            <FadeIn delay={0.5} className="pt-space-md">
              <a className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-surface-bright font-label-md text-label-md tracking-wider uppercase hover:bg-secondary transition-colors duration-300 shadow-sm" href="https://maps.google.com" rel="noopener noreferrer" target="_blank">
                <span>Get Direction on Google Maps</span>
                <span className="material-symbols-outlined text-[18px]">near_me</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
