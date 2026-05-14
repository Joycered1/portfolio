import type { Metadata } from "next";
import { Alan_Sans, Inter } from "next/font/google";
import { ThemeProvider } from "@/shared/ThemeProvider";
import "./globals.scss";
import "@/styles/index.scss";

const alanSans = Alan_Sans({
  variable: "--font-alan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joyce Eboh — Senior Product Designer",
  description:
    "Senior product designer specialising in fintech, SaaS and edtech — crafting intuitive digital experiences through research-led design thinking.",
  openGraph: {
    title: "Joyce Eboh — Senior Product Designer",
    description:
      "Senior product designer specialising in fintech, SaaS and edtech.",
    type: "website",
  },
};

const themeScript = `
  (function () {
    var t = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', t);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alanSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
