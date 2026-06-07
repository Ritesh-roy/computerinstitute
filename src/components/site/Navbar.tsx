import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { openAdmission } from "@/lib/admission-modal";
import { whatsappChatUrl } from "@/lib/whatsapp";
import { useT } from "@/lib/i18n";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.courses"), to: "/courses" },
    { label: t("nav.academy"), to: "/academy-programs" },
    { label: t("nav.paramedical"), to: "/paramedical" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.experience"), to: "/experience" },
    { label: t("nav.contact"), to: "/contact" },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border soft-shadow" : "bg-background/60 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 lg:px-6">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>

        {/* Desktop nav */}
        <nav className="hidden xl:flex flex-1 items-center justify-center gap-4 2xl:gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="whitespace-nowrap text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full data-[status=active]:text-primary data-[status=active]:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden xl:flex shrink-0 items-center gap-2">
          <LanguageSwitcher />
          <a
            href={whatsappChatUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-whatsapp px-3.5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" /> {t("nav.whatsapp")}
          </a>
          <button
            onClick={openAdmission}
            className="whitespace-nowrap rounded-full hero-gradient px-4 py-2 text-sm font-semibold text-primary-foreground hover:scale-[1.03] transition-transform soft-shadow"
          >
            {t("nav.apply")}
          </button>
        </div>

        {/* Mobile / tablet controls */}
        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <a
            href={whatsappChatUrl()}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-whatsapp px-3.5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" /> {t("nav.whatsapp")}
          </a>
          <button
            className="p-2 rounded-md text-foreground hover:bg-secondary transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        className={`xl:hidden overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/85 hover:bg-secondary hover:text-primary transition data-[status=active]:text-primary data-[status=active]:bg-secondary"
            >
              {l.label}
            </Link>
          ))}
          <div className="sm:hidden pt-2">
            <LanguageSwitcher />
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <a
              href={whatsappChatUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> {t("nav.whatsapp")}
            </a>
            <button
              onClick={() => {
                setOpen(false);
                openAdmission();
              }}
              className="rounded-full hero-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              {t("nav.apply")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
