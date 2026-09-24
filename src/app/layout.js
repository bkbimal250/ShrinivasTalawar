import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { DEFAULT_DESCRIPTION, SITE_NAME, TITLE_TEMPLATE } from "@/lib/constants";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: SITE_NAME,
    template: TITLE_TEMPLATE,
  },
  description: DEFAULT_DESCRIPTION,
  verification: {
    google: "0jpEFOOBafR03XOnUBuHenAEf3YZf1Y1drSslnnmi0U",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/favico.ico",
        type: "image/x-icon",
      },
    ],
    shortcut: "/favico.ico",
    apple: "/favico.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <LocalBusinessSchema />
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
