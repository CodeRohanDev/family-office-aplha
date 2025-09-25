import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { generateMetadata as generateSEOMetadata, organizationStructuredData, websiteStructuredData } from "@/lib/seo";

// Temporarily using system fonts for static export
const inter = {
  variable: "--font-inter",
  className: "",
};

const playfair = {
  variable: "--font-playfair", 
  className: "",
};

export const metadata: Metadata = generateSEOMetadata({
  canonical: '/',
  keywords: [
    'family office services',
    'wealth management advisory',
    'cybersecurity consulting',
    'private wealth management',
    'financial security',
    'investment advisory',
    'risk assessment',
    'portfolio management'
  ]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body className="font-inter antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
