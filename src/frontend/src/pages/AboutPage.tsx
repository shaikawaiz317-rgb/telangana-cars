import {
  Award,
  CheckCircle,
  MapPin,
  Shield,
  Star,
  ThumbsUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const whyUs = [
  {
    icon: Shield,
    title: "Certified Pre-Owned Cars",
    desc: "Every used car goes through 150-point quality inspection before being listed for sale.",
  },
  {
    icon: Star,
    title: "Easy Finance",
    desc: "We work with leading banks to offer the lowest EMI options. Get approved in as little as 24 hours.",
  },
  {
    icon: ThumbsUp,
    title: "100% Transparent",
    desc: "No hidden charges. No surprises. What you see is what you pay. Honest pricing always.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    desc: "Our trained sales professionals guide you from selection to delivery with patience and expertise.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20 min-h-screen bg-background">
      {/* Banner */}
      <section
        className="relative py-20 text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/showroom-hero.dim_1200x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-ocid="about.section"
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.72)" }}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight">
            About Us
          </h1>
          <p className="text-gray-300 mt-2">
            Serving Nizamabad with pride since 2010
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "oklch(0.45 0.195 25)" }}
              >
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Building Dreams, One Car at a Time
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Telangana Cars was founded in 2010 with a simple mission — to
                make car ownership accessible to every family in Nizamabad. What
                started as a small showroom has grown into one of the most
                trusted automobile dealerships in the region.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We understand that buying a car is one of the biggest decisions
                in a family's life. That's why we put our customers first —
                offering transparent pricing, genuine guidance, and support even
                after the sale.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over 500+ happy families in Nizamabad have driven home in their
                dream cars from Telangana Cars. We are proud to be a local
                business that has earned the trust of this community.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin
                  className="w-4 h-4"
                  style={{ color: "oklch(0.45 0.195 25)" }}
                />
                M44G+7H2, Madhavanagar, Nizamabad, Telangana 503003
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Users, value: "500+", label: "Happy Customers" },
                { icon: Award, value: "10+", label: "Years in Business" },
                { icon: CheckCircle, value: "1000+", label: "Cars Sold" },
                { icon: Star, value: "4.9★", label: "Customer Rating" },
              ].map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-6 shadow-card text-center"
                >
                  <Icon
                    className="w-8 h-8 mx-auto mb-2"
                    style={{ color: "oklch(0.45 0.195 25)" }}
                  />
                  <div className="text-2xl font-bold text-gray-900">
                    {value}
                  </div>
                  <div className="text-sm text-gray-500">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "#F6F6F7" }}
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
              Our Advantage
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 uppercase tracking-tight">
              Why Choose Us
            </h2>
            <div
              className="w-12 h-1 mx-auto mt-3 rounded"
              style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
            />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                data-ocid={`about.why_us.item.${i + 1}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-card"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "oklch(0.96 0.01 25)" }}
                >
                  <item.icon
                    className="w-7 h-7"
                    style={{ color: "oklch(0.45 0.195 25)" }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Trust */}
      <section
        className="py-16 text-white text-center"
        style={{ backgroundColor: "oklch(0.08 0.006 265)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Rooted in Nizamabad</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            We are a local business, born and bred in Nizamabad. Our team
            understands the local market, the needs of Telangana families, and
            the trust that comes with being part of this community for over a
            decade.
          </p>
          <a
            href="tel:+919700307460"
            data-ocid="about.primary_button"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
          >
            Talk to Us Today
          </a>
        </div>
      </section>
    </main>
  );
}
