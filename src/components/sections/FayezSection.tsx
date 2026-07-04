"use client";

import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";

export default function FayezSection() {
  const t = useTranslations("fayez");
  const achievements = t.raw("achievements") as string[];

  return (
    <section id="fayez" className="bg-[#142660] px-6 py-24">
      <Reveal className="mx-auto mb-12 max-w-xl text-center">
        <span className="mb-3 block text-sm tracking-[0.22em] text-[#c9a827] uppercase">
          {t("eyebrow")}
        </span>
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-white sm:text-5xl">
          {t("title")} <span className="text-[#c9a827]">{t("titleAccent")}</span>
        </h2>
      </Reveal>

      <Reveal className="mx-auto grid max-w-4xl gap-10 rounded-3xl border border-white/[0.08] bg-[#0d1b4c] p-8 sm:p-12 md:grid-cols-[auto_1fr]">
        <div className="mx-auto flex h-30 w-30 shrink-0 items-center justify-center rounded-full border-2 border-[#c9a827] bg-[#0a1338] font-[family-name:var(--font-cormorant)] text-4xl text-[#c9a827]">
          AF
        </div>
        <div>
          <span className="mb-1 block text-sm tracking-wide text-[#c9a827]">{t("role")}</span>
          <h3 className="mb-4 font-[family-name:var(--font-cormorant)] text-3xl font-bold text-white">
            {t("title")} <span className="text-[#c9a827]">{t("titleAccent")}</span>
          </h3>
          <p className="mb-3 text-[#b9bdc9]">{t("bio1")}</p>
          <p className="mb-6 text-[#b9bdc9]">{t("bio2")}</p>

          <h4 className="mb-2 text-xs tracking-widest text-[#c9a827] uppercase">
            {t("achTitle")}
          </h4>
          <ul className="flex flex-col gap-2">
            {achievements.map((a) => (
              <li key={a} className="relative ps-6 text-[#b9bdc9]">
                <span className="absolute start-0 text-[#c9a827]">—</span>
                {a}
              </li>
            ))}
          </ul>

          <p className="mt-6 border-t border-white/10 pt-4 text-sm text-[#8a8f9e] md:col-span-2">
            {t("note")}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
