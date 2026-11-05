"use client";
import Navbar from "./NavBar";
export default function TransitionProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link">
        {locale === "en" ? "Skip to content" : "Ir para o conteúdo"}
      </a>
      <Navbar locale={locale} />
      <div className="flex-1">{children}</div>
      <footer className="mt-12 border-t">
        <div className="page-shell flex flex-wrap items-center justify-between gap-5 py-8 text-sm text-muted-foreground">
          <p>Vinícius Gabriel · Java &amp; Spring Boot</p>
          <div className="flex gap-5">
            <a
              href="https://github.com/Vincius-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-8336321b6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="mailto:vinicius.fariascontato@gmail.com">
              {locale === "en" ? "Contact" : "Contato"}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
