"use client";

import { useTranslations } from "next-intl";
import { Shield, Users, Handshake, Check } from "lucide-react";
import Reveal from "@/components/Reveal";

const tierIcons = [Shield, Users, Handshake];

export default function InitiativesSection() {
  const t = useTranslations("initiatives");
  const tiers = t.raw("tiers") as { title: string; sub: string; body: string }[];
  const benefits = t.raw("benefits") as string[];

  return (
    // Copy sourced from the party's official Facebook announcement of the Services Card initiative
    <section id="initiatives" className="px-6 py-24">
      <Reveal className="mx-auto mb-14 max-w-xl text-center">
        <span className="mb-3 block text-sm tracking-[0.22em] text-[#c9a827] uppercase">
          {t("eyebrow")}
        </span>
        <h2 className="mb-4 heading-serif text-4xl font-bold text-white sm:text-5xl">
          {t("title")} <span className="text-[#c9a827]">{t("titleAccent")}</span>
        </h2>
        <p className="mb-3 text-[#b9bdc9]">{t("sub")}</p>
        <p className="text-sm text-[#e0c565]">{t("quote")}</p>
      </Reveal>

      <Reveal className="mx-auto mb-14 grid max-w-5xl gap-7 md:grid-cols-3">
        {tiers.map((tier, i) => {
          const Icon = tierIcons[i];
          return (
            <div
              key={tier.title}
              className="rounded-2xl border border-white/[0.06] bg-[#142660] p-9 transition-all hover:-translate-y-1 hover:border-[#c9a827]"
            >
              <Icon size={30} className="mb-4 text-[#c9a827]" />
              <h3 className="heading-serif text-2xl font-bold text-white">
                {tier.title}
              </h3>
              <span className="mb-3 block text-xs tracking-wide text-[#c9a827]">{tier.sub}</span>
              <p className="text-sm text-[#b9bdc9]">{tier.body}</p>
            </div>
          );
        })}
      </Reveal>

      <Reveal>
        <h4 className="mb-6 text-center text-xs tracking-widest text-[#c9a827] uppercase">
          {t("benefitsTitle")}
        </h4>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-10 gap-y-3.5 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b} className="flex items-start gap-2.5 text-sm text-[#b9bdc9]">
              <Check size={18} className="mt-0.5 shrink-0 text-[#c9a827]" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
