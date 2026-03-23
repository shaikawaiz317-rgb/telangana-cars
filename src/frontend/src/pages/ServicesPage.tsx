import {
  Car,
  CheckCircle,
  CreditCard,
  FileText,
  RefreshCw,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Car,
    title: "Car Sales (New & Used)",
    description:
      "Explore our wide range of new and certified pre-owned vehicles from top brands like Maruti, Hyundai, Tata, Kia, and more. Every car is inspected and priced fairly.",
    benefits: [
      "Latest models from top brands",
      "Certified pre-owned vehicles",
      "Test drives available",
      "Best price guarantee",
    ],
  },
  {
    icon: CreditCard,
    title: "Car Finance Assistance",
    description:
      "We make car financing easy and stress-free. Our finance experts work with leading banks and NBFCs to secure the best loan for you at the lowest interest rates.",
    benefits: [
      "Low interest rates from leading banks",
      "Flexible EMI options",
      "Quick loan approval (24 hrs)",
      "Minimal documentation",
    ],
  },
  {
    icon: RefreshCw,
    title: "Car Exchange",
    description:
      "Want to upgrade your car? Trade in your existing vehicle and get the best market value for it. Our fair evaluation process ensures you get maximum returns.",
    benefits: [
      "Fair market valuation",
      "Instant price estimate",
      "Hassle-free paperwork",
      "Top-up finance available",
    ],
  },
  {
    icon: FileText,
    title: "Documentation Support",
    description:
      "Skip the paperwork stress. Our team handles all legal documentation including RC transfer, insurance, hypothecation removal, and more.",
    benefits: [
      "RC transfer assistance",
      "Insurance facilitation",
      "Form 35 & NOC processing",
      "End-to-end support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20 min-h-screen bg-background">
      {/* Banner */}
      <section
        className="py-20 text-white text-center"
        style={{ backgroundColor: "oklch(0.08 0.006 265)" }}
        data-ocid="services.section"
      >
        <h1 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight">
          Our Services
        </h1>
        <p className="text-gray-400 mt-2">
          Everything you need for your car journey
        </p>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              data-ocid={`services.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-card flex flex-col md:flex-row gap-6"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "oklch(0.96 0.01 25)" }}
              >
                <service.icon
                  className="w-8 h-8"
                  style={{ color: "oklch(0.45 0.195 25)" }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle
                        className="w-4 h-4 shrink-0"
                        style={{ color: "oklch(0.45 0.195 25)" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: "#F6F6F7" }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Need Any of These Services?
          </h2>
          <p className="text-gray-500 mb-8">
            Call us or visit our showroom in Madhavanagar, Nizamabad. We're here
            to help Mon–Sat 9am to 7pm.
          </p>
          <a
            href="tel:+919700307460"
            data-ocid="services.primary_button"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
          >
            Call +91 97003 07460
          </a>
        </div>
      </section>
    </main>
  );
}
