import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

interface InternalizationProviderProps {
  children: React.ReactNode;
  locale: string;
}

export async function InternalizationProvider({
  children,
  locale,
}: InternalizationProviderProps) {
  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone="America/Sao_Paulo"
    >
      {children}
    </NextIntlClientProvider>
  );
}
