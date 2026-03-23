import { ChevronRight, Gauge, Timer, Zap } from "lucide-react";
import { motion } from "motion/react";

const spotlightCar = {
  name: "FERRARI LAFERRARI APERTA",
  tagline: "SPOTLIGHT",
  horsepower: "963 HP",
  topSpeed: "217 MPH",
  zeroToSixty: "2.4s",
  description:
    "The LaFerrari Aperta represents the pinnacle of Ferrari's engineering mastery — a limited-production open-top hypercar combining a naturally aspirated V12 with a kinetic energy recovery system. Only 210 units were ever created.",
  highlights: [
    "Handcrafted carbon fiber monocoque chassis",
    "Active aerodynamics with adaptive underbody diffuser",
    "Ferrari's HY-KERS hybrid system with 163 HP electric motor",
    "One of 210 units ever produced worldwide",
  ],
};

export default function SpotlightSection() {
  return (
    <section
      id="spotlight"
      className="py-24"
      style={{
        background:
          "linear-gradient(180deg, #0B1217 0%, #0D1620 50%, #0B1217 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-[10px] font-semibold tracking-[0.35em] mb-4"
            style={{ color: "rgba(93,143,255,0.9)" }}
          >
            FEATURED MASTERPIECE
          </p>
          <h2
            className="font-display font-bold uppercase text-white"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              letterSpacing: "0.05em",
            }}
          >
            SPOTLIGHT MODEL
          </h2>
          <div
            className="mx-auto mt-4"
            style={{
              width: "48px",
              height: "2px",
              background: "linear-gradient(90deg, #1E63FF, #0F4FD6)",
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div
              className="absolute -inset-1 rounded-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30,99,255,0.3), transparent 60%)",
                filter: "blur(12px)",
              }}
            />
            <div
              className="relative overflow-hidden rounded-lg"
              style={{ border: "1px solid rgba(30,99,255,0.2)" }}
            >
              <img
                src="/assets/generated/car-ferrari-spotlight.dim_800x600.jpg"
                alt="Ferrari LaFerrari Aperta"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ height: "420px" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, transparent 60%, rgba(11,18,23,0.6) 100%)",
                }}
              />
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span
                className="text-[10px] font-bold tracking-[0.35em]"
                style={{ color: "rgba(93,143,255,0.9)" }}
              >
                {spotlightCar.tagline}
              </span>
              <h3
                className="font-display font-bold uppercase text-white mt-2"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  letterSpacing: "0.04em",
                  lineHeight: 1.1,
                }}
              >
                {spotlightCar.name}
              </h3>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  icon: Zap,
                  label: "HORSEPOWER",
                  value: spotlightCar.horsepower,
                },
                {
                  icon: Gauge,
                  label: "TOP SPEED",
                  value: spotlightCar.topSpeed,
                },
                {
                  icon: Timer,
                  label: "0 – 60 MPH",
                  value: spotlightCar.zeroToSixty,
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 p-4 rounded"
                  style={{
                    background: "rgba(21,31,38,0.8)",
                    border: "1px solid rgba(34,50,61,0.8)",
                  }}
                >
                  <Icon size={16} style={{ color: "#5d8fff" }} />
                  <span
                    className="font-display font-bold text-white"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-[9px] font-semibold tracking-[0.15em]"
                    style={{ color: "rgba(169,180,189,0.6)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(169,180,189,0.8)" }}
            >
              {spotlightCar.description}
            </p>

            <ul className="flex flex-col gap-2.5">
              {spotlightCar.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "rgba(169,180,189,0.8)" }}
                >
                  <ChevronRight
                    size={14}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#5d8fff" }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="self-start text-sm font-semibold tracking-[0.12em] px-7 py-3.5 text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #1E63FF, #0F4FD6)",
                borderRadius: "100px",
                boxShadow: "0 4px 20px rgba(30,99,255,0.3)",
              }}
              data-ocid="spotlight.primary_button"
            >
              DISCOVER MORE
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
