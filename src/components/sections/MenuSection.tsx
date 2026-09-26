"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const menuItems = [
  {
    category: "coffee",
    name: "Senja Latte",
    price: "35K",
    description: "A smooth espresso blend with creamy milk and a gentle caramel finish.",
    specs: "Espresso Blend",
    icon: "local_cafe",
    detail: "RP 35.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIfFl7-LRtxXtpb0p0_QldWNGsJc1XhS7HxBPaX3apLq_We0RkIKjHkO0TNwneI1LELnc-OuKlZA0UaKLR8JZe8z0514uFndn71jqzPG7zY9Su0o5V5ZB8vK-jbZY0PJwhrgvb5iM5CnTgVxvTWpb-ZzXBcmPFyEDk2UzZ3QKiiCrwPBK8PxRYR1u4yJJqqVlKktnqlpcVomJg6cJrxBmh1oxTxBrcVvMkGRmtWOgpPUOdQCf4BtED",
    tag: "Signature",
    tagColor: "bg-primary/85",
  },
  {
    category: "coffee",
    name: "Espresso Tonic",
    price: "38K",
    description: "A refreshing combination of espresso and sparkling citrus notes.",
    specs: "Sparkling Citrus",
    icon: "arrow_back_ios_new",
    detail: "RP 38.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSlQ4p9O1i18wQM7iknPh5TaANmAZgwi4kSzh4yDRXO0g-aDtZpeTNshzSkHn2NDTf-AxZhSd_NFm8R3HTpsKxiUv7ai-3BrFaYUWcORJrljWM13WmRp_oYSKuIkK6jF88bTPSEUKodeFWeH8TRf3n5njLP7vtUgiCkudr92Hrqk_Go7bHixokbZunZbIPxyEUAxEkRkrOJO4Pxx3DGHma-zg6VQ445L6b89xT9cBS5HxahrGxDOoS",
  },
  {
    category: "coffee",
    name: "Brown Sugar Coffee",
    price: "32K",
    description: "Bold espresso balanced with rich brown sugar sweetness.",
    specs: "Aren Nectar",
    icon: "water_drop",
    detail: "RP 32.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5MX8Ol0xkWQyZ3na-d4zugNRuxeBOGUaR1f-pINYpRnkeEr7toRGYN9GBN05cRK4IOxaZx8BE4ruP1SZF6trbfPW8EamZ43riT86beIDbaP1Sn5bbuBVMGeG-UjwWXiap3Ck42lSGGHnhnHe3JvI1Sned5N9kSRSF5uDd_X8zVZtTwRYk6D3nUWMZ5BVe68oaN_PoPm0kucFiBEIG83vkhPmqAdxwlsWOoBCRTkCIg4S8HZnLcp7h",
  },
  {
    category: "non-coffee",
    name: "Matcha Cloud",
    price: "35K",
    description: "Creamy premium matcha with a soft and refreshing finish.",
    specs: "Uji Ceremonial",
    icon: "spa",
    detail: "RP 35.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6Vj-VGmhgyhS4PGfY-6jNIYUBZQvy6116EfuuESsm9whY-rjA1m7RWfjfUr9nQDt4rQRrxwvpjDd988Y7PGOYkFl6kpcCr0gwxkfK9CjoY0Cg1tqVb2UC2deFwNxdP-wVtV258JUP5gA_2HdFtpqI3xHVSPTopOfw8vKgpqrdsKRiDhkP9XLmIb21sYsC6g9wkwlkfMNCUaoqSnO4QBan5nh-X7g2uomwG5qWSaASF7SE8U4Rj33n",
  },
  {
    category: "non-coffee",
    name: "Chocolate Velvet",
    price: "33K",
    description: "A rich chocolate drink crafted for slow afternoon moments.",
    specs: "70% Dark Cacao",
    icon: "favorite",
    detail: "RP 33.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCduwRL4srO9TO26asnV3KzBd6pMQwQiij6S7uDW0L7-NZfk0BbqjB5mMWzz5htSXV-rNqO9iOjY2QYS0Mc6L6ROUEMgmKoBH-sD-WAzlzvscaj4OlhjVhAYbzjALHV2DTp7PCuVgfYL7gxvzDRb66Ha8nG7y_9MLk7lcNLQr3ig7ja22jAjPdnEj-ujfOmQ8dn0jpWFEZvNcMUlbAB-1pAaSKOj3ueDbtepdJ4j4jvFpU8gFdF303f",
  },
  {
    category: "food",
    name: "Butter Croissant",
    price: "28K",
    description: "Flaky, buttery pastry perfect with your morning coffee.",
    specs: "French Butter",
    icon: "bakery_dining",
    detail: "RP 28.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDWg37tkYTM3r9ybH_aOgGmU7UH-Nn-472ub8miJLslave_7dV5HAznTJOZqxrRJ1G_4EoaqjwYQdxWBIaiKPr5q4udc1LUY7qx2DPrxbDtf6h0-81fIXAAWH-vN6-gfpFk-3iustKHMq_CbjmQHqQPjRBDKMnz8XCbrJVbGNctLq64SGCktJbH_bA-ndK0WIkT1T-K4GhJMS3BTvjEfQ6ksn4wIDrawadb3dOSEN7xKMLEKjsrTJ3",
    tag: "Fresh Bake",
    tagColor: "bg-secondary",
  }
];

export function MenuSection() {
  const [filter, setFilter] = useState("all");

  const filteredItems = filter === "all" ? menuItems : menuItems.filter(item => item.category === filter);

  return (
    <section className="w-full py-space-3xl bg-surface-container-low" id="menu">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-6">
          <FadeIn className="space-y-space-xs max-w-xl">
            <span className="font-label-sm text-label-sm tracking-[0.25em] text-secondary uppercase font-semibold">Curated Offerings</span>
            <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary tracking-tight">Signature Menu</h2>
            <p className="font-body-md text-body-md text-on-surface-variant font-light">Thoughtfully prepared beverages and fresh bakes designed for reflective morning sips and lingering afternoons.</p>
          </FadeIn>
          
          {/* Filter category tags */}
          <FadeIn delay={0.2} className="inline-flex p-1.5 bg-surface rounded-full shadow-sm">
            {[
              { id: "all", label: "All" },
              { id: "coffee", label: "Coffee" },
              { id: "non-coffee", label: "Non-Coffee" },
              { id: "food", label: "Food" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2 rounded-full font-label-md text-label-md tracking-wider uppercase transition-all ${
                  filter === tab.id
                    ? "bg-primary text-surface-bright"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </FadeIn>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredItems.map((item, index) => (
            <FadeIn key={item.name} delay={0.1 * index} className="group bg-surface-card rounded-lg overflow-hidden p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative w-full h-56 rounded-md overflow-hidden mb-5 bg-surface-container">
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.image}
                  />
                  {item.tag && (
                    <span className={`absolute top-3 left-3 ${item.tagColor} text-surface-bright px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider`}>
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">{item.name}</h3>
                  <span className="font-headline-sm text-headline-sm text-secondary font-medium">{item.price}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container-high flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">{item.icon}</span> {item.specs}
                </span>
                <span className="text-secondary tracking-wider font-semibold">{item.detail}</span>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* Menu Footer Note */}
        <FadeIn delay={0.4} className="mt-space-xl p-space-md rounded-lg bg-surface flex flex-col sm:flex-row items-center justify-between gap-4 text-on-surface-variant font-body-sm text-body-sm">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">info</span>
            <span>Plant-based oat milk and almond milk alternatives available upon request (+Rp 6.000).</span>
          </div>
          <a className="inline-flex items-center gap-1.5 font-label-md text-label-md uppercase tracking-wider text-primary hover:text-secondary font-medium" href="#location">
            Dine-In &amp; Takeaway <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
