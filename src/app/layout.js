"use client";

import { FloatMenu } from "../../components/FloatMenu";
import { Header } from "../../components/Header";
import { Inter } from "next/font/google";

import "./globals.css";
import { GlobalContextProvider } from "../../helpers/context";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Vida +",
//   description: "Vida +",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <Header />
          {children}
          <FloatMenu />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
