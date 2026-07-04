"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImageOff } from "lucide-react";
import type { GalleryImage } from "./gallery-data";

export default function GalleryItem({
  image,
  index,
  locale,
  placeholderNote,
  onOpen,
}: {
  image: GalleryImage;
  index: number;
  locale: "ar" | "en";
  placeholderNote: string;
  onOpen: (id: string) => void;
}) {
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const caption = image.caption[locale];
  const category = image.category[locale];
  const alt = image.alt[locale];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onOpen(image.id)}
      style={{ transitionDelay: `${Math.min(index * 0.06, 0.36)}s` }}
      className={`reveal group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl text-start transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a827] ${visible ? "visible" : ""}`}
      aria-label={caption}
    >
      <motion.div
        layoutId={`gallery-${image.id}`}
        className="relative w-full overflow-hidden rounded-2xl"
        style={{ aspectRatio: image.aspect }}
      >
        {!failed ? (
          <Image
            src={image.src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center"
            style={{
              background:
                "linear-gradient(135deg, #142660, #0d1b4c 60%, rgba(201,168,39,.14))",
            }}
          >
            <ImageOff size={28} className="text-[#c9a827]/70" />
            <span className="text-sm font-medium text-white">{caption}</span>
            <span className="text-xs text-[#8a8f9e]">{placeholderNote}</span>
          </div>
        )}

        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#0a1338]/90 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="mb-1 text-[0.65rem] tracking-widest text-[#c9a827] uppercase">
            {category}
          </span>
          <span className="text-sm font-medium text-white">{caption}</span>
        </div>
      </motion.div>
    </button>
  );
}
