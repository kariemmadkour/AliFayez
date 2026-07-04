"use client";

import { useTranslations } from "next-intl";
import { Phone, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import FacebookIcon from "@/components/FacebookIcon";

export default function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="bg-[#142660] px-6 py-24">
      <Reveal className="mx-auto mb-12 max-w-xl text-center">
        <span className="mb-3 block text-sm tracking-[0.22em] text-[#c9a827] uppercase">
          {t("eyebrow")}
        </span>
        <h2 className="mb-4 font-[family-name:var(--font-cormorant)] text-4xl font-bold text-white sm:text-5xl">
          {t("title")} <span className="text-[#c9a827]">{t("titleAccent")}</span>
        </h2>
        <p className="text-[#b9bdc9]">{t("sub")}</p>
      </Reveal>

      <Reveal className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
        <a
          href="https://www.facebook.com/share/18TyR4LaDF/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener"
          className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0d1b4c] p-6 transition-all hover:-translate-y-1 hover:border-[#c9a827]"
        >
          <FacebookIcon className="h-8 w-8 shrink-0 text-[#c9a827]" />
          <div>
            <h3 className="font-semibold text-white">{t("fbParty")}</h3>
            <p className="text-sm text-[#b9bdc9]">{t("fbPartySub")}</p>
          </div>
          <span className="ms-auto text-sm font-semibold text-[#c9a827]">{t("linkLabel")}</span>
        </a>

        <a
          href="https://www.facebook.com/alifayez82"
          target="_blank"
          rel="noopener"
          className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0d1b4c] p-6 transition-all hover:-translate-y-1 hover:border-[#c9a827]"
        >
          <FacebookIcon className="h-8 w-8 shrink-0 text-[#c9a827]" />
          <div>
            <h3 className="font-semibold text-white">{t("fbFayez")}</h3>
            <p className="text-sm text-[#b9bdc9]">{t("fbFayezSub")}</p>
          </div>
          <span className="ms-auto text-sm font-semibold text-[#c9a827]">{t("linkLabel")}</span>
        </a>

        <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0d1b4c] p-6">
          <Phone className="h-8 w-8 shrink-0 text-[#c9a827]" />
          <div>
            <h3 className="font-semibold text-white">{t("phoneLabel")}</h3>
            <p className="text-sm text-[#b9bdc9]">{t("phone")}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0d1b4c] p-6">
          <MapPin className="h-8 w-8 shrink-0 text-[#c9a827]" />
          <div>
            <h3 className="font-semibold text-white">{t("locationLabel")}</h3>
            <p className="text-sm text-[#b9bdc9]">{t("location")}</p>
          </div>
        </div>
      </Reveal>

      <p className="mx-auto mt-8 max-w-xl text-center text-sm text-[#8a8f9e]">{t("sub")}</p>
    </section>
  );
}
