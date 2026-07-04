"use client";

import { useTranslations } from "next-intl";
import { Users, Shield, Check, Flag } from "lucide-react";
import Reveal from "@/components/Reveal";
import BrandMark from "@/components/BrandMark";

const icons = [Users, Shield, Check, Flag];

export default function PartySection() {
  const t = useTranslations("party");
  const values = t.raw("values") as { title: string; body: string }[];

  return (
    // Copy sourced from the party's official Facebook founding-conference statement
    <section id="party" className="px-6 py-24">
      <Reveal className="mx-auto mb-16 grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div
          className="relative aspect-square overflow-hidden rounded-3xl border border-[#c9a827]/25"
          style={{
            background:
              "linear-gradient(135deg, #142660, #0d1b4c 50%, rgba(201,168,39,.12))",
          }}
        >
          <BrandMark className="absolute inset-0 h-full w-full opacity-50" />
        </div>
        <div>
          <span className="mb-3 block text-sm tracking-[0.22em] text-[#c9a827] uppercase">
            {t("eyebrow")}
          </span>
          <h2 className="mb-4 font-[family-name:var(--font-cormorant)] text-4xl font-bold text-white sm:text-5xl">
            {t("title")} <span className="text-[#c9a827]">{t("titleAccent")}</span>
          </h2>
          <p className="mb-4 text-[#b9bdc9]">{t("p1")}</p>
          <p className="text-[#b9bdc9]">{t("p2")}</p>
        </div>
      </Reveal>

      <Reveal className="mx-auto grid max-w-6xl grid-cols-2 gap-6 lg:grid-cols-4">
        {values.map((v, i) => {
          const Icon = icons[i];
          return (
            <div
              key={v.title}
              className="rounded-2xl border border-white/[0.06] bg-[#142660] p-7 text-center transition-all hover:-translate-y-1 hover:border-[#c9a827]"
            >
              <Icon size={28} className="mx-auto mb-4 text-[#c9a827]" />
              <h3 className="mb-2 font-[family-name:var(--font-cormorant)] text-xl font-bold text-white">
                {v.title}
              </h3>
              <p className="text-sm text-[#b9bdc9]">{v.body}</p>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
