import type { Metadata } from "next";
import { Montserrat, Sacramento, Alice } from "next/font/google";
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
        className={`${montserrat.variable} ${alice.variable} ${sacramento.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
