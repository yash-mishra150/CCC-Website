import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Karantina } from "next/font/google";
import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


const katarina_init = Karantina({
  subsets:['latin'],
  weight: ['300','400','700'],
  variable: '--font-katarina',
})
const poppins_init = Poppins({
  subsets:['latin'],
  weight: ['300','400','700'],
  variable: '--font-poppins',
})
const roboto_init = Roboto({
  subsets:['latin'],
  weight: ['100','300','700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "Cloud Computing Cell",
  description: "Think, Develop, Deploy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${katarina_init.variable} ${poppins_init.variable} ${roboto_init.variable}`}>{children}</body>
    </html>
  );
}