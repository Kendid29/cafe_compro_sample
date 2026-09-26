"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function StorySection() {
  return (
    <section className="w-full py-space-3xl bg-surface" id="story">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          {/* Left: Editorial Artisan Portrait (5 Cols) */}
          <div className="md:col-span-5 relative">
            <FadeIn direction="none">
              <div className="relative rounded-lg overflow-hidden bg-surface-container shadow-md">
                <img
                  className="w-full h-[520px] object-cover object-center transition-transform duration-700 hover:scale-105"
                  alt="Artisan female barista with apron methodically pouring hot water"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvipZ36egkqdnmElrSVGfq-xWtcuMukoLzsO59C3EGWw7zz1rV6fbXuhjzPn9hEtMTW_-zXdsGa8MYyJ3-ESgJLt9b59pkHMM3Y1P6LlwM5bFRKs_RS1vAiXy0hQujgYX8VuTrXbVUum7IVuTtuDV3gHmafnOtOCcXnYCPEvrfXq2WpPxOtvSR9AF3fCIAZEaO6NU4cQ9oJhLF5dMcJk9eXmeouSE7mPiRB0Lx5kjsj64-2etseAt8"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-primary/80 backdrop-blur-md px-4 py-2.5 rounded-full flex items-center justify-between text-surface-bright">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                    01 / The craft behind each pour
                  </span>
                  <span className="material-symbols-outlined text-secondary-fixed text-[16px]">coffee_maker</span>
                </div>
              </div>
            </FadeIn>
            {/* Decorative Japanese architectural accent label */}
            <div className="hidden lg:block absolute -right-6 top-12 [writing-mode:vertical-rl] font-label-sm text-label-sm tracking-[0.25em] text-on-surface-variant/40 uppercase">
              Slow Living • Hand Brewed
            </div>
          </div>
          
          {/* Right: Story Narrative (7 Cols) */}
          <div className="md:col-span-7 md:pl-space-lg flex flex-col justify-center space-y-space-md mt-12 md:mt-0">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-label-sm tracking-[0.25em] text-secondary font-semibold uppercase">Our Story</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary tracking-tight leading-tight">
                More than coffee.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="space-y-space-sm text-on-surface-variant font-body-lg text-body-lg font-light leading-relaxed">
                <p>
                  Senja Coffee started with a simple idea: creating a place where people can slow down, share stories, and enjoy the little moments.
                </p>
                <p>
                  Every cup is carefully prepared, not only to be enjoyed, but to become part of someone’s day. We honor the quiet discipline of Japanese pour-over rituals while embracing the generous, unhurried warmth of Nordic interiors.
                </p>
              </div>
            </FadeIn>
            
            {/* Philosophical Quote Block */}
            <FadeIn delay={0.4}>
              <div className="mt-space-sm p-space-md bg-surface-container-low rounded-lg border-l-2 border-secondary space-y-2">
                <p className="font-headline-md text-headline-md italic text-primary leading-snug">
                  “A little pause in every cup.”
                </p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                  — Senja Philosophy, est. 2021
                </p>
              </div>
            </FadeIn>
            
            {/* Micro specs strip */}
            <FadeIn delay={0.5}>
              <div className="pt-space-sm flex flex-wrap items-center gap-8 text-on-surface-variant font-body-sm text-body-sm">
                <div>
                  <span className="block font-headline-sm text-headline-sm text-primary">100%</span>
                  <span className="text-on-surface-variant/70">Ethically Sourced</span>
                </div>
                <div className="hidden sm:block w-[1px] h-8 bg-surface-container-highest"></div>
                <div>
                  <span className="block font-headline-sm text-headline-sm text-primary">350ml</span>
                  <span className="text-on-surface-variant/70">Ceramic Pour Standard</span>
                </div>
                <div className="hidden sm:block w-[1px] h-8 bg-surface-container-highest"></div>
                <div>
                  <span className="block font-headline-sm text-headline-sm text-primary">18m</span>
                  <span className="text-on-surface-variant/70">Average Pause Dwell</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
