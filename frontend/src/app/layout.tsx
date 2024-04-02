import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.scss";
import { Suspense } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const opensans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  icons: "/img/website-icon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${opensans.variable} ${montserrat.variable}`}>
      <body className={montserrat.className}>
        <Header />
          <Suspense fallback="loading">{children}</Suspense>
        <Footer/>
      </body>
    </html>
  );
}
