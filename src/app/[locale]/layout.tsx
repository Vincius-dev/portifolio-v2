import { NextIntlClientProvider, useMessages } from "next-intl";
import TransitionProvider from "@/components/TransitionProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import FloatingButton from "@/components/FloatingButton";

export default function LocaleLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: string};
  }) {

    const messages = useMessages();

    return (
      <div>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <TransitionProvider locale={locale}>
              {children}
            </TransitionProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </div>
    );
  }