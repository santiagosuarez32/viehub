"use client";

import React, { createContext, useContext, useMemo } from "react";
import { dictionaries, SupportedLocale, getDictionarySync } from "./dictionaries";

// Re-export for backwards compatibility with server components
export type { SupportedLocale };
export const getDictionary = getDictionarySync;

// Type for dictionaries structure
type Dictionaries = Record<string, Record<string, string>>;

// I18n context and provider
export type I18nContextType = {
  locale: SupportedLocale;
  dict: Dictionaries;
  t: (ns: string, key: string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: SupportedLocale;
}) {
  const dict = getDictionarySync(locale);

  const t = useMemo(
    () =>
      ((ns: string, key: string) => {
        const nsDict = dict?.[ns] as Record<string, string> | undefined;
        return nsDict?.[key] ?? dictionaries.en[ns as keyof typeof dictionaries.en]?.[key] ?? key;
      }) as I18nContextType["t"],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale]
  );

  const value = useMemo<I18nContextType>(
    () => ({ locale, dict, t }),
    [locale, dict, t]
  );

  return React.createElement(I18nContext.Provider, { value }, children);
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
