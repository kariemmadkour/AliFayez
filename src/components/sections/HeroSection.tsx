"use client";

import { useTranslations } from "next-intl";
import { Users, Shield, Handshake, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");

  const stats = [
    { icon: Users, num: t("stat1Num"), label: t("stat1Label") },
    { icon: Shield, num: t("stat2Num"), label: t("stat2Label") },
    { icon: Handshake, num: t("stat3Num"), label: t("stat3Label") },
  ];

  return (
    <header
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-36 pb-20 text-center"
      style={{
        background:
          "radial-gradient(circle at 20% 15%, rgba(201,168,39,.12), transparent 45%), radial-gradient(circle at 85% 80%, rgba(201,168,39,.08), transparent 50%), linear-gradient(180deg, #0a1338, #0d1b4c 60%, #0a1338)",
      }}
    >
      <p className="fade-in-up text-sm tracking-[0.25em] text-[#c9a827] uppercase" style={{ animationDelay: "0.1s" }}>
        {t("eyebrow")}
      </p>

      <h1 className="my-4 font-[family-name:var(--font-cormorant)] text-6xl leading-none font-bold text-white sm:text-7xl lg:text-8xl">
        <span className="fade-in-up block" style={{ animationDelay: "0.25s" }}>
          {t("title1")}
        </span>
        <span className="fade-in-up block text-[#c9a827]" style={{ animationDelay: "0.4s" }}>
          {t("title2")}
        </span>
      </h1>

      <span
        className="fade-in-up mb-6 inline-block rounded-full border border-[#c9a827] px-4 py-1 text-[0.68rem] tracking-widest text-[#c9a827] uppercase"
        style={{ animationDelay: "0.45s" }}
      >
        {t("status")}
      </span>

      <p className="fade-in-up mb-8 max-w-xl text-lg text-[#b9bdc9] sm:text-xl" style={{ animationDelay: "0.55s" }}>
        {t("sub")}
      </p>

      <div className="fade-in-up mb-16 flex flex-wrap justify-center gap-4" style={{ animationDelay: "0.7s" }}>
        <a
          href="#party"
          className="inline-flex items-center gap-2 rounded-full bg-[#c9a827] px-8 py-3.5 text-sm font-semibold text-[#0a1338] transition-transform hover:-translate-y-0.5 hover:bg-[#e0c565]"
        >
          {t("cta1")}
          <ArrowRight size={16} />
        </a>
        <a
          href="https://www.facebook.com/share/18TyR4LaDF/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#c9a827] hover:text-[#e0c565]"
        >
          {t("cta2")}
        </a>
      </div>

      <div className="fade-in-up flex flex-wrap justify-center gap-10" style={{ animationDelay: "0.9s" }}>
        {stats.map(({ icon: Icon, num, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <Icon size={22} className="mb-1 text-[#c9a827]" />
            <strong className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-white">
              {num}
            </strong>
            <span className="text-xs text-[#b9bdc9]">{label}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
