"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function ExperienceSection() {
  return (
    <section className="w-full py-space-3xl bg-surface" id="experience">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Text Narrative (5 Cols) */}
          <div className="lg:col-span-5 space-y-space-md order-2 lg:order-1">
            <FadeIn>
              <span className="font-label-sm text-label-sm tracking-[0.25em] text-secondary uppercase font-semibold">Atmosphere &amp; Space</span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary tracking-tight leading-tight">
                A place for every moment.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
                Whether you are working quietly, meeting friends, or enjoying a peaceful afternoon, Senja Coffee is designed to feel like home.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-symbols-outlined text-[20px]">sunny</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary">Morning Stillness</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Sunlight pools across raw teak tables as slow jazz sets the rhythm for focused work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-symbols-outlined text-[20px]">nights_stay</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary">Twilight Conversations</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">As dusk settles, ambient pendant lighting warms the room for intimate shared reflections.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="pt-space-xs">
                <span className="italic font-headline-sm text-headline-sm text-secondary block">
                  “Moments shared over warm porcelain.”
                </span>
              </div>
            </FadeIn>
          </div>
          
          {/* Visual Mosaic (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <FadeIn direction="none">
              <div className="relative rounded-lg overflow-hidden bg-surface-container shadow-lg">
                <img
                  alt="Two friends enjoying coffee together in Senja Coffee"
                  className="w-full h-[480px] object-cover object-center"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvChMuE0tFZXi-jt1e1zIrL_ethHxS_AT9WN28KiZ2ZqnF2RW2IDnrK1_nB4FqAd_JxUsnxWEun3MNwo3joBUrQq03czNb9-wWT6MH4C5AbvCj4fEviWUqjSsAWgJMDPlwl_nadB3FLet_PGUMOqW5rhSiXH-FUlSiHjoqKvdhvA6QcUYs4TyEXRX8OLoIa-0tfh8q03zHbEdh3ldjlUcoLX8kBaNvBExOKdDqCsrgy13X57WP1bgE"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-surface/90 backdrop-blur-md p-4 rounded-md shadow-sm border border-surface-container-highest">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Living Space</p>
                      <p className="font-headline-sm text-headline-sm text-primary">The Window Nook, Section B</p>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant italic">Natural daylight • 08:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
