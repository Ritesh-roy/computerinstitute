import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Navigation, ExternalLink } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { CTA } from "@/components/site/Sections";
import {
  PHONE_NUMBER, PHONE_DISPLAY, CONTACT_EMAIL, whatsappChatUrl,
  MAP_QUERY, MAP_EMBED_URL, MAP_DIRECTIONS_URL, MAP_PLACE_URL,
} from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | SK Institute" },
      { name: "description", content: "Contact SK Institute — call +91 99715 41416, email Qurbisecom1@gmail.com, or send your inquiry directly via WhatsApp. Find us on the map and get directions." },
      { property: "og:title", content: "Contact Us | SK Institute" },
      { property: "og:description", content: "Call, email or WhatsApp SK Institute. Find us on the map and get directions." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://sk-institute-quest.lovable.app/contact" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "SK Institute",
        telephone: PHONE_DISPLAY,
        email: CONTACT_EMAIL,
        address: { "@type": "PostalAddress", streetAddress: MAP_QUERY },
      }),
    }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { icon: Phone, t: "Phone", d: PHONE_DISPLAY, sub: "Mon–Sat, 9 AM – 7 PM", href: `tel:${PHONE_NUMBER}` },
    { icon: MessageCircle, t: "WhatsApp", d: PHONE_DISPLAY, sub: "Quickest response", href: whatsappChatUrl() },
    { icon: Mail, t: "Email", d: CONTACT_EMAIL, sub: "Reply within 24h", href: `mailto:${CONTACT_EMAIL}` },
    { icon: MapPin, t: "Address", d: "SK Institute", sub: MAP_QUERY, href: MAP_PLACE_URL },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden hero-gradient text-primary-foreground">
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24 text-center animate-fade-in">
          <div className="inline-block text-xs font-bold uppercase tracking-[0.2em] opacity-90 mb-3">Contact Us</div>
          <h1 className="text-4xl md:text-6xl font-bold">Let's talk about your future</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg opacity-90">
            Reach out to choose the right course. We usually respond within an hour.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 items-start">
            {/* Info + form */}
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {cards.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.t}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="block rounded-2xl bg-card border border-border p-5 hover:border-primary/40 hover:soft-shadow hover:-translate-y-1 transition-all"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl hero-gradient text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-3">{c.t}</div>
                      <div className="font-semibold text-foreground mt-0.5 break-words">{c.d}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{c.sub}</div>
                    </a>
                  );
                })}
              </div>
              <ContactForm />
            </div>

            {/* Map + location card */}
            <div className="space-y-4 lg:sticky lg:top-24">
              <div className="rounded-2xl overflow-hidden border border-border soft-shadow">
                <iframe
                  title="SK Institute location"
                  src={MAP_EMBED_URL}
                  className="h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="rounded-2xl bg-card border border-border p-6 soft-shadow">
                <div className="text-xs font-bold uppercase tracking-wider text-primary">Our Location</div>
                <h3 className="text-xl font-bold text-foreground mt-1">SK Institute</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                    <span className="text-foreground/80">{MAP_QUERY}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <a href={`tel:${PHONE_NUMBER}`} className="text-foreground/80 hover:text-primary">{PHONE_DISPLAY}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground/80 hover:text-primary break-all">{CONTACT_EMAIL}</a>
                  </li>
                </ul>
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={MAP_DIRECTIONS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full hero-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] transition-all soft-shadow"
                  >
                    <Navigation className="h-4 w-4" /> Get Directions
                  </a>
                  <a
                    href={MAP_PLACE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition"
                  >
                    <ExternalLink className="h-4 w-4" /> Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
