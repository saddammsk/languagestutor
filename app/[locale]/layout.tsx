import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import {routing} from '@/i18n/routing';
import { ReactNode } from 'react';
import type { Metadata } from "next";
import { Geist, Noto_Sans_Arabic  } from "next/font/google";
import "../globals.css";
import Navbar from "../components/common/Navbar";
import { Toaster } from 'react-hot-toast'
import { GlobalProvider } from "../context/GlobalContext";
import Footer from '../components/common/Footer';
import DemoFormPopup from '../components/DemoFormPopup';
import NotFound from './not-found';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const noto_sans_arabic = Noto_Sans_Arabic({
  variable: "--font-noto_sans_arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
});


export const metadata: Metadata = {
    title: "LanguagesTutor",
    description: "Languages Tutor.",
    icons: {
      icon: '/favicon.png',
    },
  };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    NotFound();
  }

  const messages = await getMessages();


  return (
    <html suppressHydrationWarning lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${geistSans.variable} ${noto_sans_arabic.variable} ${(locale==="ar") ? 'noto_sans_arabic': 'font-geist'} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <GlobalProvider>
              <Navbar/>
              {children} 
              <Footer/>
              {/* <DemoFormPopup/> */}
              <Toaster
                position="top-right" 
                toastOptions={{
                  style: {
                    background: '#333',
                    color: '#fff',
                  },
                }}
              />
            </GlobalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
