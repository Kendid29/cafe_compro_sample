"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function FeatureSection() {
  return (
    <section className="w-full py-space-3xl bg-surface-container">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-space-2xl space-y-space-xs">
          <FadeIn>
            <span className="font-label-sm text-label-sm tracking-[0.25em] text-secondary uppercase font-semibold">The Pillars</span>
            <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary tracking-tight">
              Why Senja Coffee
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant font-light mt-4">
              Built on intentional restraint, honest materials, and an obsessive dedication to hospitable warmth.
            </p>
          </FadeIn>
        </div>
        
        {/* 3 Numbered Editorial Columns with Hairline Separation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter relative">
          {/* Column 01 */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col p-8 bg-surface-card rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
              <span className="font-headline-xl text-headline-xl text-secondary-container/40 leading-none mb-4 font-normal">01</span>
              <div className="space-y-3">
                <h3 className="font-headline-md text-headline-md text-primary">Crafted Coffee</h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                  Thoughtfully selected ingredients and carefully prepared drinks. Each single origin roast is dialled daily to highlight terroir.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-surface-container-high flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Micro-lot Sourcing</span>
              </div>
            </div>
          </FadeIn>
          
          {/* Column 02 */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col p-8 bg-surface-card rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
              <span className="font-headline-xl text-headline-xl text-secondary-container/40 leading-none mb-4 font-normal">02</span>
              <div className="space-y-3">
                <h3 className="font-headline-md text-headline-md text-primary">Cozy Space</h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                  A comfortable corner for work, conversations, and rest. Acoustic dampening, ergonomic wood, and organic lighting harmonize.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-surface-container-high flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">chair</span>
                <span>Japanese Oak Design</span>
              </div>
            </div>
          </FadeIn>
          
          {/* Column 03 */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col p-8 bg-surface-card rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
              <span className="font-headline-xl text-headline-xl text-secondary-container/40 leading-none mb-4 font-normal">03</span>
              <div className="space-y-3">
                <h3 className="font-headline-md text-headline-md text-primary">Good Moments</h3>
                <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                  A place where simple visits turn into memorable stories. Unplug from algorithmic hurry and reconnect with the present.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-surface-container-high flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">nature_people</span>
                <span>Presence &amp; Slowness</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
