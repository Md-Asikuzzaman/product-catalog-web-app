import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Providers from "@/components/Providers";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Product Catalog Web App",
  description: "Product Catalog Web App | Build with Next.js & React.js",
  keywords: "product, catalog, app, next.js, react.js",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    locale: "en_US",
    siteName: "Shop",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Shop",
      },
    ],
  },
  // Open-Graph for twitter
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
