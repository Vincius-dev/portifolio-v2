"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("commons");
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const links = ["home", "projects", "experience", "about"] as const;
  return (
    <header className="border-b bg-background">
      <div className="page-shell flex min-h-24 flex-wrap items-center justify-between gap-4 py-4">
        <Link href={`/${locale}/home`} className="font-bold tracking-tight">
          Vinícius
          <span className="text-purple-600 dark:text-purple-400">.dev</span>
        </Link>
        <nav
          aria-label={
            locale === "en" ? "Main navigation" : "Navegação principal"
          }
          className="hidden gap-6 lg:flex"
        >
          {links.map((k) => (
            <Link
              key={k}
              href={`/${locale}/${k}`}
              aria-current={path === `/${locale}/${k}` ? "page" : undefined}
              className={
                path === `/${locale}/${k}`
                  ? "font-semibold underline underline-offset-8"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              {t(k)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="rounded-md border px-3 py-2 text-sm lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? (locale === "en" ? "Close" : "Fechar") : "Menu"}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            className="flex w-full flex-col gap-4 border-t pt-4 lg:hidden"
            aria-label={
              locale === "en" ? "Mobile navigation" : "Navegação móvel"
            }
          >
            {links.map((k) => (
              <Link
                key={k}
                href={`/${locale}/${k}`}
                onClick={() => setOpen(false)}
                aria-current={path === `/${locale}/${k}` ? "page" : undefined}
              >
                {t(k)}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
