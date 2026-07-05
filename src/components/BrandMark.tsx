import Image from "next/image";

export default function BrandMark({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-full ${className ?? ""}`}>
      <Image src="/images/logo.jpeg" alt="Hezb El Nas" fill className="object-cover" />
    </div>
  );
}
