import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

interface MenuCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  delay?: number;
}

export function MenuCard({ image, name, description, price, delay = 0 }: MenuCardProps) {
  return (
    <FadeIn delay={delay} direction="up" className="group flex flex-col h-full bg-white p-4 rounded-xl">
      <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-lg bg-cream">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="font-heading text-2xl text-coffee">{name}</h3>
          <span className="text-caramel font-semibold whitespace-nowrap">{price}</span>
        </div>
        <p className="text-coffee/70 text-sm leading-relaxed mt-auto">
          {description}
        </p>
      </div>
    </FadeIn>
  );
}
