import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vinicius-dev.com"),
  title: "Vinícius Gabriel | Java & Spring Boot",
  description:
    "Desenvolvedor back-end Java com experiência em sistemas financeiros, APIs REST e integrações. Conheça minha trajetória e meus projetos.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={await getLocale()} suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
