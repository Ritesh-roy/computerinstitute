import { Globe } from "lucide-react";
import { useT, type Lang } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useT();

  const toggle = (next: Lang) => setLang(next);

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-border bg-card/70 p-0.5 ${className}`}
    >
      <Globe className="ml-2 h-3.5 w-3.5 text-muted-foreground" aria-hidden />
      {(["en", "hi"] as const).map((l) => (
        <button
          key={l}
          onClick={() => toggle(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
            lang === l
              ? "hero-gradient text-primary-foreground"
              : "text-foreground/70 hover:text-primary"
          }`}
        >
          {l === "en" ? "EN" : "हिं"}
        </button>
      ))}
    </div>
  );
}
