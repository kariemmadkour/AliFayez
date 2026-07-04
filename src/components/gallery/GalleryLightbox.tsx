"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import type { GalleryImage } from "./gallery-data";

function LightboxImage({
  image,
  locale,
  placeholderNote,
}: {
  image: GalleryImage;
  locale: "ar" | "en";
  placeholderNote: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center"
        style={{
          background: "linear-gradient(135deg, #142660, #0d1b4c 60%, rgba(201,168,39,.14))",
        }}
      >
        <ImageOff size={36} className="text-[#c9a827]/70" />
        <span className="text-base font-medium text-white">{image.caption[locale]}</span>
        <span className="text-sm text-[#8a8f9e]">{placeholderNote}</span>
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt[locale]}
      fill
      sizes="90vw"
      className="object-contain bg-[#0d1b4c]"
      onError={() => setFailed(true)}
    />
  );
}

export default function GalleryLightbox({
  images,
  activeId,
  locale,
  isAr,
  labels,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  activeId: string;
  locale: "ar" | "en";
  isAr: boolean;
  labels: { close: string; prev: string; next: string; placeholder: string };
  onClose: () => void;
  onNavigate: (id: string) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const index = images.findIndex((img) => img.id === activeId);
  const image = images[index];

  const goPrev = () => onNavigate(images[(index - 1 + images.length) % images.length].id);
  const goNext = () => onNavigate(images[(index + 1) % images.length].id);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") (isAr ? goNext : goPrev)();
      if (e.key === "ArrowRight") (isAr ? goPrev : goNext)();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, isAr]);

  if (!image) return null;
  const PrevIcon = isAr ? ChevronRight : ChevronLeft;
  const NextIcon = isAr ? ChevronLeft : ChevronRight;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={image.caption[locale]}
      tabIndex={-1}
      className="fade-in-up fixed inset-0 z-[100] flex items-center justify-center bg-[#0a1338]/92 p-4 backdrop-blur-md focus:outline-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        onClick={onClose}
        aria-label={labels.close}
        className="absolute end-5 top-5 rounded-full border border-white/20 p-2.5 text-white transition-colors hover:border-[#c9a827] hover:text-[#c9a827]"
      >
        <X size={22} />
      </button>

      <button
        onClick={goPrev}
        aria-label={labels.prev}
        className="absolute start-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 p-2.5 text-white transition-colors hover:border-[#c9a827] hover:text-[#c9a827] sm:start-6"
      >
        <PrevIcon size={24} />
      </button>
      <button
        onClick={goNext}
        aria-label={labels.next}
        className="absolute end-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 p-2.5 text-white transition-colors hover:border-[#c9a827] hover:text-[#c9a827] sm:end-6"
      >
        <NextIcon size={24} />
      </button>

      <motion.div
        layoutId={`gallery-${image.id}`}
        className="relative max-h-[75vh] w-full max-w-3xl overflow-hidden rounded-2xl"
        style={{ aspectRatio: image.aspect }}
        onClick={(e) => e.stopPropagation()}
      >
        <LightboxImage key={image.id} image={image} locale={locale} placeholderNote={labels.placeholder} />
      </motion.div>

      <div className="absolute inset-x-0 bottom-6 text-center">
        <span className="mb-1 block text-xs tracking-widest text-[#c9a827] uppercase">
          {image.category[locale]}
        </span>
        <span className="text-sm font-medium text-white">{image.caption[locale]}</span>
      </div>
    </div>
  );
}
