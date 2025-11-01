import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Caveat,
  Notable,
  Zalando_Sans_Expanded,
  Montserrat,
  Special_Gothic_Expanded_One,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  style: "normal",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const gothic = Special_Gothic_Expanded_One({
  variable: "--font-gothic",
  style: "normal",
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["Arial", "sans-serif"],
});

const Rokiest = localFont({
  variable: "--font-rokiest",
  src: [
    { weight: "400", path: "../assets/fonts/Rokiest-Regular.otf" },
    { weight: "500", path: "../assets/fonts/Rokiest-Medium.otf" },
    { weight: "600", path: "../assets/fonts/Rokiest-SemiBold.otf" },
    { weight: "700", path: "../assets/fonts/Rokiest-Bold.otf" },
    { weight: "900", path: "../assets/fonts/Rokiest-ExtraBlack.otf" },
  ],
});

export const metadata: Metadata = {
  title: "Rubens Araújo",
  description: "created by retr0lbb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gothic.variable} ${montserrat.variable} ${Rokiest.variable} antialiased w-full h-full`}
      >
        <div id="root" className="h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
