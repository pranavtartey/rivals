import type { Metadata } from "next";
import {
  Montserrat,
  Sacramento,
  Alice,
  Lustria,
  Playfair_Display,
} from "next/font/google";
import "@/app/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-sans",
  weight: "variable",
});
const sacramento = Sacramento({
  subsets: ["latin"],
  variable: "--font-sacramento",
  weight: "400",
});
const alice = Alice({
  subsets: ["latin"],
  variable: "--font-alice",
  weight: "400",
});
const lustria = Lustria({
  subsets: ["latin"],
  variable: "--font-lustria",
  weight: "400",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Rivals",
  description: "Rivals Gaming Launge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${alice.variable} ${sacramento.variable} ${lustria.variable} ${playfairDisplay.variable} font-montserrat antialiased selection:text-white selection:bg-neutral-300`}
      >
        {children}
      </body>
    </html>
  );
}
