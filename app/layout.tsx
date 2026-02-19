import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Exo } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const exo = Exo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-exo",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VieHub | Premium Airport Transfers",
  description:
    "Luxury private airport transfers across Europe. Book your ride with VieHub today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://cdn.builder.io/js/webcomponents"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${exo.variable} antialiased  text-white`}>

        {children}
      </body>
    </html>
  );
}
