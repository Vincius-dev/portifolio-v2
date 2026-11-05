import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import TransitionProvider from "@/components/TransitionProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    description:
      locale === "en"
        ? "Java back-end developer working on financial systems, REST APIs and integrations. Explore my experience and personal projects."
        : "Desenvolvedor back-end Java com experiência em sistemas financeiros, APIs REST e integrações. Conheça minha trajetória e meus projetos.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <div>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TransitionProvider locale={locale}>{children}</TransitionProvider>
        </ThemeProvider>
      </NextIntlClientProvider>
    </div>
  );
}
