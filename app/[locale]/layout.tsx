import "./globals.css";
import { Roboto } from "next/font/google";
import { Locale } from "@/i18n-config";
import { Providers as ThemeProviders } from "../theme-provider";
import { SWRProvider } from "../swr-provider";
import React from "react";
import type { Metadata } from "next";
import NavBar from "@/components/navbar/NavBar";

const roboto = Roboto({
  subsets: ["vietnamese"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "14",
  description: "Hallo new world with Next.js 14",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  params: { locale },
}) => {
  return (
    <html lang={locale}>
      <SWRProvider>
        <body className={roboto.className}>
          <ThemeProviders>
            <NavBar />
            <main>{children}</main>
          </ThemeProviders>
        </body>
      </SWRProvider>
    </html>
  );
};

export default RootLayout;
