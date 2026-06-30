import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alief.dev"),
  title: {
    default: "Muhammad Alief Albayu | Fullstack Developer",
    template: "%s | Muhammad Alief Albayu",
  },
  description:
    "Fullstack developer specializing in building scalable web applications, designing efficient APIs, and crafting intuitive, responsive user experiences.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Alief Albayu | Fullstack Developer",
    description:
      "Fullstack developer specializing in building scalable web applications, designing efficient APIs, and crafting intuitive, responsive user experiences.",
    url: "/",
    siteName: "Muhammad Alief Albayu Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/profile/profil.jpg",
        width: 600,
        height: 600,
        alt: "Muhammad Alief Albayu - Fullstack Developer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Alief Albayu | Fullstack Developer",
    description:
      "Fullstack developer specializing in building scalable web applications, designing efficient APIs, and crafting intuitive, responsive user experiences.",
    images: ["/images/profile/profil.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body
        className={`${satoshi.variable} ${syne.variable} ${spaceMono.variable} font-sans antialiased bg-brand-lightBg text-black dark:bg-brand-darkBg dark:text-white transition-colors duration-300 min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
