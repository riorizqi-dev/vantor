import type { Metadata } from "next";
import { Cinzel, Poppins } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/components/providers/ScrollProvider";
import MouseFollower from "@/components/ui/MouseFollower";
import Grain from "@/components/ui/Grain";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VANTOR — Simple · Bold · Timeless",
  description:
    "VANTOR. Premium men's jewelry crafted for the modern man. Stainless steel necklaces and leather bracelets, designed to be simple, bold and timeless.",
  keywords: [
    "VANTOR",
    "men's jewelry",
    "stainless steel necklace",
    "leather bracelet",
    "premium accessories",
    "Indonesia",
  ],
  openGraph: {
    title: "VANTOR — Simple · Bold · Timeless",
    description:
      "Premium accessories designed for modern men. Stainless steel necklaces and leather bracelets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cinzel.variable} ${poppins.variable} antialiased bg-black text-white`}
      >
        <ScrollProvider>
          <Grain />
          <MouseFollower />
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
