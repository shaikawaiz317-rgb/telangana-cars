import { Link } from "@tanstack/react-router";
import { ChevronDown, Phone, Star } from "lucide-react";
import { motion } from "motion/react";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";

const testimonials = [
  {
    name: "Ramesh Kumar",
    initials: "RK",
    rating: 5,
    text: "Excellent service! Got a great deal on my Hyundai Creta. The team at Telangana Cars was very transparent with pricing. Highly recommended!",
  },
  {
    name: "Priya Reddy",
    initials: "PR",
    rating: 5,
    text: "I was nervous buying my first car, but the staff guided me through every step. Got the best finance deal too. Thank you Telangana Cars!",
  },
  {
    name: "Sanjay Rao",
    initials: "SR",
    rating: 5,
    text: "Traded in my old car and got a fair value. Documentation was handled completely. Smooth and hassle-free experience. Will come back again!",
  },
];

const stats = [
  { label: "Happy Customers", value: "500+" },
  { label: "Years of Trust", value: "10+" },
  { label: "Cars Sold", value: "1000+" },
];

const STAR_KEYS = ["star-1", "star-2", "star-3", "star-4", "star-5"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url('/assets/generated/showroom-hero.dim_1200x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-ocid="home.section"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 text-white"
              style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
            >
              Nizamabad's #1 Car Showroom
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Best Car Deals
              <br />
              in{" "}
              <span style={{ color: "oklch(0.62 0.195 25)" }}>Nizamabad</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Telangana's Most Trusted Car Showroom. New & certified pre-owned
              cars with easy finance, transparent pricing, and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/cars"
                data-ocid="hero.primary_button"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
              >
                Explore Cars
              </Link>
              <Link
                to="/contact"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white font-semibold text-sm border-2 border-white/60 hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Stats bar */}
      <section
        style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
        className="py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            {stats.map(({ label, value }) => (
              <div key={label} className="text-white">
                <div className="text-2xl sm:text-3xl font-bold">{value}</div>
                <div className="text-xs sm:text-sm text-white/80">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section
        className="py-16 lg:py-24 bg-background"
        data-ocid="featured_cars.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "oklch(0.45 0.195 25)" }}
            >
              Our Collection
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 uppercase tracking-tight">
              Featured Cars
            </h2>
            <div
              className="w-12 h-1 mx-auto mt-3 rounded"
              style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
            />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.slice(0, 6).map((car, i) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <CarCard car={car} index={i} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/cars"
              data-ocid="featured_cars.primary_button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
            >
              View All Cars
            </Link>
          </div>
        </div>
      </section>

      {/* About intro */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "#F6F6F7" }}
        data-ocid="about_intro.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-card"
            >
              <img
                src="/assets/generated/showroom-hero.dim_1200x600.jpg"
                alt="Telangana Cars Showroom"
                className="w-full h-72 lg:h-96 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "oklch(0.45 0.195 25)" }}
              >
                About Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Telangana's Most Trusted Car Showroom
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Since 2010, Telangana Cars has been the go-to destination for
                car buyers in Nizamabad and surrounding regions. We offer a wide
                selection of new and certified pre-owned vehicles at honest
                prices.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 500+ happy customers, we pride ourselves on
                transparency, expert guidance, and after-sales support that
                keeps our customers coming back.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { v: "10+", l: "Years Experience" },
                  { v: "500+", l: "Happy Customers" },
                  { v: "1000+", l: "Cars Sold" },
                  { v: "100%", l: "Transparent Pricing" },
                ].map(({ v, l }) => (
                  <div key={l} className="bg-white rounded-xl p-4 shadow-sm">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "oklch(0.45 0.195 25)" }}
                    >
                      {v}
                    </div>
                    <div className="text-sm text-gray-500">{l}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                data-ocid="about_intro.primary_button"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-16 lg:py-24 bg-background"
        data-ocid="testimonials.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "oklch(0.45 0.195 25)" }}
            >
              What People Say
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 uppercase tracking-tight">
              Customer Testimonials
            </h2>
            <div
              className="w-12 h-1 mx-auto mt-3 rounded"
              style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                data-ocid={`testimonials.item.${i + 1}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <div className="flex gap-1 mb-3">
                  {STAR_KEYS.slice(0, t.rating).map((k) => (
                    <Star
                      key={k}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      Verified Customer
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-16"
        style={{ backgroundColor: "oklch(0.08 0.006 265)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-gray-400 mb-8">
            Visit us today or call us for a free consultation. Best deals in
            Nizamabad guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919700307460"
              data-ocid="cta.primary_button"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
            >
              <Phone className="w-4 h-4" /> Call Now: +91 97003 07460
            </a>
            <Link
              to="/contact"
              data-ocid="cta.secondary_button"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white font-semibold text-sm border-2 border-white/30 hover:bg-white/10 transition-all"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
