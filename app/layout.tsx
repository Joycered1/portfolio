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
    "Senior Product Designer specialized in Fintech, Design System, Building with AI and Working with teams",
  
	openGraph: {
		type: "website",
		locale: "en_US",
		url: 'https://joycered.com',
		siteName: "Joycered",
		title: "Joyce Eboh — Senior Product Designer",
		description:
			"Senior Product Designer specialized in Fintech, Design System, Building with AI and Working with teams",
		images: [
			{
				url: "https://joycered.com/images/share-card.png",
				width: 1200,
				height: 630,
				alt: "Joyce Eboh — Senior Product Designer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Joyce Eboh — Senior Product Designer",
		description:
			"Senior Product Designer specialized in Fintech, Design System, Building with AI and Working with teams",
		images: ["https://joycered.com/images/share-card.png"],
		creator: "@joycered",
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
