import type { Metadata } from "next";
import { Space_Grotesk, Jost } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Endustry. - Industrial & Manufacturing Solutions",
  description: "Modern, dynamic and state-of-the-art platform for industry excellence, engineering, and manufacturing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jost.variable} font-sans antialiased bg-white text-[#474f72] selection:bg-[#e8174e] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
