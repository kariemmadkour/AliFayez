"use client";

import { useTranslations, useLocale } from "next-intl";
import BrandMark from "./BrandMark";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const contact = useTranslations("contact");
  const locale = useLocale();

  const links = [
    { href: "#party", label: nav("party") },
    { href: "#fayez", label: nav("fayez") },
    { href: "#initiatives", label: nav("initiatives") },
    { href: "#gallery", label: nav("gallery") },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0a1338] px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-10">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <BrandMark className="h-9 w-9" />
            <span className="heading-serif text-lg font-bold text-white">
              {locale === "ar" ? "حزب الناس" : "Hezb El Nas"}
            </span>
          </div>
          <p className="max-w-xs text-sm text-[#8a8f9e]">{t("tagline")}</p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold tracking-widest text-[#c9a827] uppercase">
            {t("col1")}
          </h4>
          <ul className="space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-[#b9bdc9] transition-colors hover:text-[#e0c565]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold tracking-widest text-[#c9a827] uppercase">
            {t("col2")}
          </h4>
          <ul className="space-y-2.5">
            <li>
              <a
                href="https://www.facebook.com/share/18TyR4LaDF/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener"
                className="text-sm text-[#b9bdc9] transition-colors hover:text-[#e0c565]"
              >
                {contact("fbParty")}
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/alifayez82"
                target="_blank"
                rel="noopener"
                className="text-sm text-[#b9bdc9] transition-colors hover:text-[#e0c565]"
              >
                {contact("fbFayez")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center">
        <p className="text-xs text-[#8a8f9e]">{t("copy")}</p>
        <p className="mt-1 text-xs text-[#8a8f9e]">{t("built")}</p>
      </div>
    </footer>
  );
}
