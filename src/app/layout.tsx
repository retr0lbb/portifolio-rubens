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
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notable = Notable({
  variable: "--font-notable",
  subsets: ["latin"],
  weight: ["400"],
});

const zalando = Zalando_Sans_Expanded({
  variable: "--font-zalando",
  preload: true,
  style: "normal",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${gothic.variable} ${montserrat.variable} antialiased w-full h-full`}
      >
        <div id="root" className="h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
