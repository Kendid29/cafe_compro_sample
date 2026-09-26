"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function GallerySection() {
  return (
    <section className="w-full py-space-3xl bg-surface" id="gallery">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-4">
          <FadeIn>
            <span className="font-label-sm text-label-sm tracking-[0.25em] text-secondary uppercase font-semibold">Visual Trust</span>
            <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary tracking-tight">Moments at Senja</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              A visual record of quiet mornings, deliberate pours, and the people that breathe life into our sanctuary.
            </p>
          </FadeIn>
        </div>
        
        {/* Masonry Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Large Left Feature (7 Cols) */}
          <div className="md:col-span-7 group relative rounded-lg overflow-hidden h-[460px] bg-surface-container shadow-sm">
            <FadeIn direction="none" className="w-full h-full">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Cinematic wide architectural shot of Senja Coffee interior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClrsgvZXYU0iq3S2OZCOYAejTKtZ6hw4BJ7cdpv3aWCkSmZ65f8yNh-JLOs5EKzRRkMxNtwnquPjFVYwwHpd92US5bPRft7w8nrUeLo1ycUUDJBzG5DPRSPVX0_tCA8bJtNXNMxNi2Qb1NKJrLI0HmxHY2ZkwhT6Gnpf5kA4O3U6HBMezfhRkDBWt5hFmmv6UsrXY6oyi4TyU6INPk-SJFV2BgjMcrz8aToaiG-73ElFExJRsoMbJ3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-6 left-6 text-surface-bright">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">Interior Space</p>
                <p className="font-headline-sm text-headline-sm text-surface-bright">The Minimalist Main Hall</p>
              </div>
            </FadeIn>
          </div>
          
          {/* Stacked Right (5 Cols) */}
          <div className="md:col-span-5 flex flex-col gap-gutter">
            <FadeIn delay={0.1} direction="none" className="group relative rounded-lg overflow-hidden h-[218px] bg-surface-container shadow-sm">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Editorial top-down view of steaming pour over kettle"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSNYza5uN2iSJZZuIRxxRwmc-oG8Q9sejfhwiYrZAmzYYpJj-F97s75dQpZP9ibQtUHJZs7Rd_2cDf2gOfEm4uav7fyRweaUsRadqWSVZ9qDN9JCHPTp5XOj0LLX7p24wbjU-UbEXrmyCq-sGCmBX__DliRbTdCc_STdjsoK57nAv7PwZRXokZDoczto8MgeiJJeA1E-V5Yww-N2AoWKyu-jKc_XvQA1rdNYZ069cwopdragIaEKiA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 text-surface-bright">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">Craft</p>
                <p className="font-headline-sm text-headline-sm text-surface-bright">V60 Precision Brewing</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="none" className="group relative rounded-lg overflow-hidden h-[218px] bg-surface-container shadow-sm">
              <img
                alt="Pastry at Senja Coffee"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDWg37tkYTM3r9ybH_aOgGmU7UH-Nn-472ub8miJLslave_7dV5HAznTJOZqxrRJ1G_4EoaqjwYQdxWBIaiKPr5q4udc1LUY7qx2DPrxbDtf6h0-81fIXAAWH-vN6-gfpFk-3iustKHMq_CbjmQHqQPjRBDKMnz8XCbrJVbGNctLq64SGCktJbH_bA-ndK0WIkT1T-K4GhJMS3BTvjEfQ6ksn4wIDrawadb3dOSEN7xKMLEKjsrTJ3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 text-surface-bright">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">Fresh Bake</p>
                <p className="font-headline-sm text-headline-sm text-surface-bright">Morning Flaky Croissant</p>
              </div>
            </FadeIn>
          </div>
          
          {/* 3 Horizontal Grid Tiles Below */}
          <FadeIn delay={0.3} direction="none" className="md:col-span-4 group relative rounded-lg overflow-hidden h-[280px] bg-surface-container shadow-sm">
            <img
              alt="Senja Latte Close Up"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIfFl7-LRtxXtpb0p0_QldWNGsJc1XhS7HxBPaX3apLq_We0RkIKjHkO0TNwneI1LELnc-OuKlZA0UaKLR8JZe8z0514uFndn71jqzPG7zY9Su0o5V5ZB8vK-jbZY0PJwhrgvb5iM5CnTgVxvTWpb-ZzXBcmPFyEDk2UzZ3QKiiCrwPBK8PxRYR1u4yJJqqVlKktnqlpcVomJg6cJrxBmh1oxTxBrcVvMkGRmtWOgpPUOdQCf4BtED"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 text-surface-bright">
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">Signature Drink</p>
              <p className="font-headline-sm text-headline-sm text-surface-bright">Iced Senja Latte</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4} direction="none" className="md:col-span-4 group relative rounded-lg overflow-hidden h-[280px] bg-surface-container shadow-sm">
            <img
              alt="Lifestyle interactions"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvChMuE0tFZXi-jt1e1zIrL_ethHxS_AT9WN28KiZ2ZqnF2RW2IDnrK1_nB4FqAd_JxUsnxWEun3MNwo3joBUrQq03czNb9-wWT6MH4C5AbvCj4fEviWUqjSsAWgJMDPlwl_nadB3FLet_PGUMOqW5rhSiXH-FUlSiHjoqKvdhvA6QcUYs4TyEXRX8OLoIa-0tfh8q03zHbEdh3ldjlUcoLX8kBaNvBExOKdDqCsrgy13X57WP1bgE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 text-surface-bright">
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">Lifestyle</p>
              <p className="font-headline-sm text-headline-sm text-surface-bright">Warm Connection</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.5} direction="none" className="md:col-span-4 group relative rounded-lg overflow-hidden h-[280px] bg-surface-container shadow-sm">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Editorial portrait of barista carefully selecting green roasted coffee beans"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8lELEAQjYA1s-vY4032m7FjKeCow77flNzqiSM0PytYeULHSrSEesLdQAkGdr9Qx4xVc77c7qhvwe-tNWyB82PGhtynitR0xESexm7czvhSlQthTt2ATI_2lSkUdjQbZKS4w1coeP9GAcn9O6Dx1FLFCFWFbp3bSGcSkiysHjbM0UKeXKE-W15UB_1O1lavRqZa4bLJn_z5Ta2M8M9aTTpi1tA3aL3yo_7Q7_aWB5f7NaQeHjAiuy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 text-surface-bright">
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">Dedication</p>
              <p className="font-headline-sm text-headline-sm text-surface-bright">Origins &amp; Cupping</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
