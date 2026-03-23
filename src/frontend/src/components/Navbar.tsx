import { Menu, Search, User, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "MODELS", href: "#collection" },
  { label: "PERFORMANCE", href: "#spotlight" },
  { label: "SPECIFICATIONS", href: "#collection" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
      style={{
        background: scrolled ? "rgba(8,12,15,0.92)" : "rgba(8,12,15,0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/#"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <div
            className="w-8 h-8 rounded-sm flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #1E63FF, #0F4FD6)" }}
          >
            <span className="text-white text-xs font-bold tracking-widest">
              V
            </span>
          </div>
          <span className="text-white font-display font-bold tracking-[0.2em] text-lg">
            VELOCE
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-semibold tracking-[0.15em] transition-colors duration-200"
              style={{ color: "rgba(169,180,189,0.9)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(169,180,189,0.9)";
              }}
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right icons */}
        <div className="hidden md:flex items-center gap-5">
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Search"
            data-ocid="nav.search_input"
          >
            <Search size={16} />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] border px-4 py-2 transition-colors duration-200"
            style={{
              color: "rgba(169,180,189,0.9)",
              borderColor: "rgba(255,255,255,0.15)",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "rgba(169,180,189,0.9)";
            }}
            data-ocid="nav.button"
          >
            <User size={13} />
            LOGIN
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setMenuOpen((o) => !o)}
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: "rgba(8,12,15,0.97)" }}
            className="md:hidden overflow-hidden"
          >
            <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[12px] font-semibold tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMenuOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                className="mt-2 text-[12px] font-semibold tracking-[0.15em] text-muted-foreground hover:text-foreground flex items-center gap-2"
                data-ocid="nav.button"
              >
                <User size={13} />
                LOGIN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
