export interface GalleryImage {
  id: string;
  src: string;
  aspect: string;
  alt: { ar: string; en: string };
  caption: { ar: string; en: string };
  category: { ar: string; en: string };
}

export const galleryImages: GalleryImage[] = [
  {
    id: "01",
    src: "/images/gallery/gallery-01-cover-brand.jpg",
    aspect: "4/5",
    alt: {
      ar: "شعار حزب الناس بالألوان الكحلي والذهبي",
      en: "Hezb El Nas brand mark in navy and gold",
    },
    caption: { ar: "حزب الناس – لكل المصريين", en: "Hezb El Nas – For All Egyptians" },
    category: { ar: "الهوية البصرية", en: "Brand Identity" },
  },
  {
    id: "02",
    src: "/images/gallery/gallery-02-founders-grid.jpg",
    aspect: "1/1",
    alt: {
      ar: "مجموعة من أعضاء الهيئة التأسيسية لحزب الناس",
      en: "Group of Hezb El Nas founding body members",
    },
    caption: { ar: "أعضاء الهيئة التأسيسية", en: "Founding Body Members" },
    category: { ar: "المؤتمر التأسيسي", en: "Founding Conference" },
  },
  {
    id: "03",
    src: "/images/gallery/gallery-03-deputy-founder.jpg",
    aspect: "3/4",
    alt: {
      ar: "المستشار علي فايز الفرجاني وكيل مؤسسي حزب الناس",
      en: "Counselor Ali Fayez Al-Farjani, Deputy of the Founders of Hezb El Nas",
    },
    caption: {
      ar: "المستشار علي فايز الفرجاني – وكيل المؤسسين",
      en: "Counselor Ali Fayez Al-Farjani – Deputy of the Founders",
    },
    category: { ar: "القيادة", en: "Leadership" },
  },
  {
    id: "04",
    src: "/images/gallery/gallery-04-conference-statement.jpg",
    aspect: "16/10",
    alt: {
      ar: "بيان تأسيس حزب الناس الصادر عن الهيئة التأسيسية",
      en: "Hezb El Nas founding statement issued by the founding body",
    },
    caption: { ar: "بيان تأسيس حزب الناس", en: "Hezb El Nas Founding Statement" },
    category: { ar: "المؤتمر التأسيسي", en: "Founding Conference" },
  },
  {
    id: "05",
    src: "/images/gallery/gallery-05-conference-event.jpg",
    aspect: "4/5",
    alt: {
      ar: "لقطة من فعاليات المؤتمر الأول للهيئة التأسيسية",
      en: "Scene from the first founding-body conference",
    },
    caption: { ar: "من فعاليات المؤتمر التأسيسي", en: "From the Founding Conference" },
    category: { ar: "المؤتمر التأسيسي", en: "Founding Conference" },
  },
];
