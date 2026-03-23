import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactPage() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!actor) {
      toast.error("Connecting to server, please try again in a moment.");
      return;
    }
    setLoading(true);
    try {
      await actor.submitInquiry(name.trim(), phone.trim(), message.trim());
      setSubmitted(true);
      setName("");
      setPhone("");
      setMessage("");
      toast.success("Enquiry submitted! We'll contact you shortly.");
    } catch {
      toast.error("Something went wrong. Please try calling us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="pt-20 min-h-screen bg-background">
      <section
        className="py-20 text-white text-center"
        style={{ backgroundColor: "oklch(0.08 0.006 265)" }}
        data-ocid="contact.section"
      >
        <h1 className="text-4xl lg:text-5xl font-bold uppercase tracking-tight">
          Get In Touch
        </h1>
        <p className="text-gray-400 mt-2">We'd love to hear from you</p>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Visit Our Showroom
              </h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "oklch(0.96 0.01 25)" }}
                  >
                    <MapPin
                      className="w-5 h-5"
                      style={{ color: "oklch(0.45 0.195 25)" }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      Address
                    </div>
                    <div className="text-gray-500 text-sm mt-0.5">
                      M44G+7H2, Madhavanagar, Nizamabad, Telangana 503003
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "oklch(0.96 0.01 25)" }}
                  >
                    <Phone
                      className="w-5 h-5"
                      style={{ color: "oklch(0.45 0.195 25)" }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      Phone
                    </div>
                    <a
                      href="tel:+919700307460"
                      className="text-sm mt-0.5 hover:underline"
                      style={{ color: "oklch(0.45 0.195 25)" }}
                    >
                      +91 97003 07460
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "oklch(0.96 0.01 25)" }}
                  >
                    <Clock
                      className="w-5 h-5"
                      style={{ color: "oklch(0.45 0.195 25)" }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      Business Hours
                    </div>
                    <div className="text-gray-500 text-sm mt-0.5">
                      Mon–Sat: 9:00 AM – 7:00 PM
                      <br />
                      Sunday: 10:00 AM – 5:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mb-8">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
                  style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
                >
                  <SiFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
                  style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
                >
                  <SiInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919700307460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30371.39843540001!2d78.06437!3d18.6725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf100cbac9001%3A0x9f5b7de9fc3ef4e4!2sNizamabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Telangana Cars Location"
                />
              </div>

              <a
                href="https://wa.me/919700307460?text=Hi%2C%20I%20am%20interested%20in%20buying%20a%20car%20from%20Telangana%20Cars."
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp.button"
                className="mt-6 flex items-center justify-center gap-3 w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="bg-white rounded-2xl p-8 shadow-card"
                data-ocid="contact.form.panel"
              >
                {submitted ? (
                  <div
                    className="text-center py-12"
                    data-ocid="contact.success_state"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: "oklch(0.96 0.01 25)" }}
                    >
                      <Send
                        className="w-8 h-8"
                        style={{ color: "oklch(0.45 0.195 25)" }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Enquiry Received!
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Thank you! Our team will call you back within a few hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      data-ocid="contact.reset.button"
                      className="text-sm font-medium hover:underline"
                      style={{ color: "oklch(0.45 0.195 25)" }}
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Send Us an Enquiry
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">
                      Fill in your details and we'll get back to you promptly.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <Label
                          htmlFor="contact-name"
                          className="text-sm font-medium text-gray-700 mb-1.5 block"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="contact-name"
                          type="text"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          data-ocid="contact.name.input"
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="contact-phone"
                          className="text-sm font-medium text-gray-700 mb-1.5 block"
                        >
                          Phone Number *
                        </Label>
                        <Input
                          id="contact-phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          data-ocid="contact.phone.input"
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="contact-message"
                          className="text-sm font-medium text-gray-700 mb-1.5 block"
                        >
                          Message *
                        </Label>
                        <Textarea
                          id="contact-message"
                          placeholder="Tell us which car you're interested in..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          rows={4}
                          data-ocid="contact.message.textarea"
                          className="rounded-xl resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={loading}
                        data-ocid="contact.submit_button"
                        className="w-full rounded-xl py-3 text-sm font-semibold text-white h-auto"
                        style={{
                          backgroundColor: "oklch(0.45 0.195 25)",
                          border: "none",
                        }}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" /> Send Enquiry
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
