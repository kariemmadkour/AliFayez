"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isAr = locale === "ar";
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#party", label: t("party") },
    { href: "#fayez", label: t("fayez") },
    { href: "#initiatives", label: t("initiatives") },
    { href: "#gallery", label: t("gallery") },
    { href: "#contact", label: t("contact") },
  ];

  const restOfPath = pathname.replace(/^\/(ar|en)/, "") || "";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-[#0a1338]/90 backdrop-blur-md shadow-lg py-3" : ""
      }`}
    >
      <a href="#main" className="skip-link">
        {isAr ? "انتقل للمحتوى" : "Skip to content"}
      </a>

      <Link href={`/${locale}`} className="flex items-center gap-2.5" aria-label="Hezb El Nas">
        <BrandMark className="h-10 w-10 shrink-0" />
        <span className="flex flex-col leading-tight">
          <span className="heading-serif text-lg font-bold text-white">
            {isAr ? "حزب الناس" : "Hezb El Nas"}
          </span>
          <span className="text-[0.62rem] tracking-wider text-[#c9a827]">
            {isAr ? "لكل المصريين" : "For All Egyptians"}
          </span>
        </span>
      </Link>

      <ul className="hidden gap-8 lg:flex">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-sm text-[#b9bdc9] transition-colors hover:text-[#e0c565]">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden items-center gap-4 lg:flex">
        <a
          href="https://www.facebook.com/share/18TyR4LaDF/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener"
          className="rounded-full border border-[#c9a827] px-5 py-2 text-sm font-semibold text-[#e0c565] transition-colors hover:bg-[#c9a827]/10"
        >
          {t("cta")}
        </a>
        <div className="flex items-center gap-1 rounded-full border border-white/20 p-1">
          <Link
            href={`/en${restOfPath}`}
            className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
              !isAr ? "bg-[#c9a827] text-[#0a1338]" : "text-[#b9bdc9]"
            }`}
          >
            EN
          </Link>
          <Link
            href={`/ar${restOfPath}`}
            className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
              isAr ? "bg-[#c9a827] text-[#0a1338]" : "text-[#b9bdc9]"
            }`}
          >
            AR
          </Link>
        </div>
      </div>

      <button
        className="text-white lg:hidden"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {open && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#0a1338] lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xl text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.facebook.com/share/18TyR4LaDF/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener"
            className="rounded-full bg-[#c9a827] px-6 py-2.5 font-semibold text-[#0a1338]"
          >
            {t("cta")}
          </a>
          <div className="flex items-center gap-1 rounded-full border border-white/20 p-1">
            <Link
              href={`/en${restOfPath}`}
              onClick={() => setOpen(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-bold ${!isAr ? "bg-[#c9a827] text-[#0a1338]" : "text-[#b9bdc9]"}`}
            >
              EN
            </Link>
            <Link
              href={`/ar${restOfPath}`}
              onClick={() => setOpen(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-bold ${isAr ? "bg-[#c9a827] text-[#0a1338]" : "text-[#b9bdc9]"}`}
            >
              AR
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
