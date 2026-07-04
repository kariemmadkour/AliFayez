"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Reveal from "@/components/Reveal";
import { galleryImages } from "./gallery-data";
import GalleryItem from "./GalleryItem";
import GalleryLightbox from "./GalleryLightbox";

export default function GallerySection() {
  const t = useTranslations("gallery");
  const locale = useLocale() as "ar" | "en";
  const isAr = locale === "ar";
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="gallery" className="px-6 py-24">
      <Reveal className="mx-auto mb-14 max-w-xl text-center">
        <span className="mb-3 block text-sm tracking-[0.22em] text-[#c9a827] uppercase">
          {t("eyebrow")}
        </span>
        <h2 className="mb-4 font-[family-name:var(--font-cormorant)] text-4xl font-bold text-white sm:text-5xl">
          {t("title")} <span className="text-[#c9a827]">{t("titleAccent")}</span>
        </h2>
        <p className="text-[#b9bdc9]">{t("sub")}</p>
      </Reveal>

      <div className="mx-auto max-w-6xl columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {galleryImages.map((image, i) => (
          <GalleryItem
            key={image.id}
            image={image}
            index={i}
            locale={locale}
            placeholderNote={t("placeholderNote")}
            onOpen={setActiveId}
          />
        ))}
      </div>

      {activeId && (
        <GalleryLightbox
          images={galleryImages}
          activeId={activeId}
          locale={locale}
          isAr={isAr}
          labels={{
            close: t("closeLabel"),
            prev: t("prevLabel"),
            next: t("nextLabel"),
            placeholder: t("placeholderNote"),
          }}
          onClose={() => setActiveId(null)}
          onNavigate={setActiveId}
        />
      )}
    </section>
  );
}
