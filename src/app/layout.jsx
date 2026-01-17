import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    default: "ZOHAR. - Full Stack Developer Portfolio",
    template: "%s | ZOHAR."
  },
  description: "Full Stack / Front End / Salesforce Developer. Specializing in building interactive, high-performance applications with React, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "Front End Developer", "Salesforce Developer", "React Developer", "Node.js Developer", "Portfolio", "Web Developer"],
  authors: [{ name: "Zohar" }],
  creator: "Zohar",
  publisher: "Zohar",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "ZOHAR. - Full Stack Developer Portfolio",
    description: "Full Stack / Front End / Salesforce Developer. Specializing in building interactive, high-performance applications.",
    siteName: "ZOHAR. Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZOHAR. Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZOHAR. - Full Stack Developer Portfolio",
    description: "Full Stack / Front End / Salesforce Developer. Specializing in building interactive, high-performance applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Zohar Yevelkin",
    "jobTitle": "Full-Stack / Frontend Web Developer",
    "description": "Full-Stack Web Developer with hands-on experience in MERN and modern frontend frameworks. Currently developing Full-Stack and Salesforce solutions at Bank Leumi.",
    "email": "zoar2307@gmail.com",
    "telephone": "+972-53-339-3504",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "sameAs": [
      "https://github.com/zoar2307",
      "https://www.linkedin.com/in/zohar-yevelkin/",
    ],
    "knowsAbout": [
      "Full-Stack Development",
      "Frontend Development",
      "Salesforce Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "Apex",
      "Lightning Web Components",
      "WebSockets"
    ]
  };

  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${poppins.variable} ${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
