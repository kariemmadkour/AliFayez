"use client";

import { useTranslations } from "next-intl";

export default function MarqueeStrip() {
  const t = useTranslations("brand");
  const items = [t("name"), t("slogan"), t("tagline")];
  const track = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#142660] py-3.5">
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {[...track, ...track].map((text, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-[family-name:var(--font-cormorant)] text-lg tracking-wide text-[#e0c565]">
              {text}
            </span>
            <i className="text-[#c9a827] opacity-50">•</i>
          </span>
        ))}
      </div>
    </div>
  );
}
