import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const galleryImages = [
  {
    src: "/assets/generated/car-ferrari.dim_800x500.jpg",
    label: "Ferrari SF90 Stradale",
  },
  {
    src: "/assets/generated/car-lamborghini.dim_800x500.jpg",
    label: "Lamborghini Aventador SVJ",
  },
  {
    src: "/assets/generated/car-mclaren.dim_800x500.jpg",
    label: "McLaren 720S",
  },
  {
    src: "/assets/generated/car-porsche.dim_800x500.jpg",
    label: "Porsche 911 GT3 RS",
  },
  {
    src: "/assets/generated/car-bugatti.dim_800x500.jpg",
    label: "Bugatti Chiron",
  },
  {
    src: "/assets/generated/car-koenigsegg.dim_800x500.jpg",
    label: "Koenigsegg Regera",
  },
  {
    src: "/assets/generated/car-ferrari-spotlight.dim_800x600.jpg",
    label: "Ferrari LaFerrari Aperta",
  },
  {
    src: "/assets/generated/hero-car.dim_1600x900.jpg",
    label: "Coastal Performance",
  },
];

export default function GallerySection() {
  const [active, setActive] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const newIdx =
      dir === "prev"
        ? (active - 1 + galleryImages.length) % galleryImages.length
        : (active + 1) % galleryImages.length;
    setActive(newIdx);
    const el = stripRef.current?.children[newIdx] as HTMLElement;
    el?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <section id="gallery" className="py-24" style={{ background: "#0B1217" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p
              className="text-[10px] font-semibold tracking-[0.35em] mb-3"
              style={{ color: "rgba(93,143,255,0.9)" }}
            >
              VISUAL SHOWCASE
            </p>
            <h2
              className="font-display font-bold uppercase text-white"
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                letterSpacing: "0.05em",
              }}
            >
              GALLERY IN MOTION
            </h2>
            <div
              className="mt-4"
              style={{
                width: "48px",
                height: "2px",
                background: "linear-gradient(90deg, #1E63FF, #0F4FD6)",
              }}
            />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll("prev")}
              className="w-10 h-10 flex items-center justify-center transition-all duration-200"
              style={{
                border: "1px solid rgba(34,50,61,0.9)",
                borderRadius: "4px",
                color: "rgba(169,180,189,0.8)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(30,99,255,0.6)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(34,50,61,0.9)";
                e.currentTarget.style.color = "rgba(169,180,189,0.8)";
              }}
              data-ocid="gallery.pagination_prev"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              className="w-10 h-10 flex items-center justify-center transition-all duration-200"
              style={{
                border: "1px solid rgba(34,50,61,0.9)",
                borderRadius: "4px",
                color: "rgba(169,180,189,0.8)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(30,99,255,0.6)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(34,50,61,0.9)";
                e.currentTarget.style.color = "rgba(169,180,189,0.8)";
              }}
              data-ocid="gallery.pagination_next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Active image */}
        <motion.div
          key={active}
          initial={{ opacity: 0.6, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden mb-6 rounded-lg"
          style={{ border: "1px solid rgba(34,50,61,0.8)", height: "420px" }}
          data-ocid="gallery.canvas_target"
        >
          <img
            src={galleryImages[active].src}
            alt={galleryImages[active].label}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute bottom-0 left-0 right-0 p-6"
            style={{
              background:
                "linear-gradient(to top, rgba(11,18,23,0.85) 0%, transparent 100%)",
            }}
          >
            <p className="text-white font-display font-bold text-lg tracking-wide">
              {galleryImages[active].label}
            </p>
            <p
              className="text-[11px] tracking-[0.1em] mt-1"
              style={{ color: "rgba(169,180,189,0.7)" }}
            >
              {active + 1} / {galleryImages.length}
            </p>
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        <div
          ref={stripRef}
          className="flex gap-3 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {galleryImages.map((img, i) => (
            <button
              key={img.label}
              type="button"
              onClick={() => setActive(i)}
              className="flex-shrink-0 relative overflow-hidden transition-all duration-300"
              style={{
                width: "140px",
                height: "90px",
                borderRadius: "4px",
                border:
                  i === active
                    ? "2px solid #1E63FF"
                    : "2px solid rgba(34,50,61,0.6)",
                opacity: i === active ? 1 : 0.6,
              }}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
