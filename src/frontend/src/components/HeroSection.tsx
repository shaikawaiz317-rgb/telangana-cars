import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/generated/hero-car.dim_1600x900.jpg')",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,18,23,0.55) 0%, rgba(11,18,23,0.4) 50%, rgba(11,18,23,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[11px] font-semibold tracking-[0.35em] mb-6"
          style={{ color: "rgba(169,180,189,0.8)" }}
        >
          VELOCE AUTOMOTIVE · EST. 2024
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display font-bold uppercase text-foreground leading-[0.95] mb-6"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 4.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          EXPERIENCE
          <br />
          <span style={{ color: "#fff" }}>PURE PERFORMANCE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg mb-10 max-w-xl mx-auto"
          style={{ color: "rgba(169,180,189,0.85)", lineHeight: 1.7 }}
        >
          Curated collection of the world's most extraordinary supercars. Every
          machine engineered to redefine the boundaries of speed and luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#collection"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-[0.12em] text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #1E63FF, #0F4FD6)",
              borderRadius: "100px",
              boxShadow: "0 4px 24px rgba(30,99,255,0.35)",
            }}
            data-ocid="hero.primary_button"
          >
            EXPLORE THE COLLECTION
          </a>
          <a
            href="#spotlight"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-[0.1em] transition-all duration-300 hover:text-white"
            style={{ color: "rgba(169,180,189,0.85)", borderRadius: "100px" }}
            data-ocid="hero.secondary_button"
          >
            SPOTLIGHT CAR
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(169,180,189,0.5)" }}
      >
        <span className="text-[10px] tracking-[0.3em] font-medium">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
