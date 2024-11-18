"use client";
// import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import "./globals.css";
import { store } from "../store/index";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header>
            <Header />
          </header>
          <main>{children}</main>
        </body>
      </html>
    </Provider>
  );
}
