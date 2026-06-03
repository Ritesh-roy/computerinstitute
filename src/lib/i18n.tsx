import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { en } from "@/translations/en";
import { hi } from "@/translations/hi";

export type Lang = "en" | "hi";

const dictionaries = { en, hi } as const;

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (path: string) => string;
};

const I18nContext = createContext<I18nContextValue>({
  lang: "en",
  setLang: () => {},
  t: (path) => path,
});

function resolve(obj: unknown, path: string): string | undefined {
  const value = path
    .split(".")
    .reduce<unknown>((acc, key) => (acc && typeof acc === "object" ? (acc as Record<string, unknown>)[key] : undefined), obj);
  return typeof value === "string" ? value : undefined;
}

const STORAGE_KEY = "sk-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "hi") setLangState(stored);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    }
  };

  const t = (path: string): string =>
    resolve(dictionaries[lang], path) ?? resolve(dictionaries.en, path) ?? path;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useT() {
  return useContext(I18nContext);
}
