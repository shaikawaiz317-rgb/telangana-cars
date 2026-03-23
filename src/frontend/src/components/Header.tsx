import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/cars" as const, label: "Cars" },
  { to: "/services" as const, label: "Services" },
  { to: "/about" as const, label: "About Us" },
  { to: "/contact" as const, label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "oklch(0.08 0.006 265)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            data-ocid="header.link"
          >
            <img
              src="/assets/generated/telangana-cars-logo-transparent.dim_400x100.png"
              alt="Telangana Cars"
              className="h-10 w-auto"
            />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.${link.label.toLowerCase().replace(" ", "_")}.link`}
                activeProps={{ className: "text-white" }}
                inactiveProps={{ className: "text-gray-300 hover:text-white" }}
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="tel:+919700307460"
              data-ocid="header.primary_button"
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="header.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden border-t border-white/10"
          style={{ backgroundColor: "oklch(0.08 0.006 265)" }}
        >
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                data-ocid={`mobile.nav.${link.label.toLowerCase().replace(" ", "_")}.link`}
                activeProps={{
                  className:
                    "block px-4 py-3 rounded-md text-sm font-medium text-white bg-white/10",
                }}
                inactiveProps={{
                  className:
                    "block px-4 py-3 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919700307460"
              data-ocid="mobile.header.primary_button"
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
