import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Programmer's Elite School",
  description: "Invest in the Future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar></Navbar>
        {children}
        <Toaster position="bottom-right"></Toaster>
        <Footer></Footer>
      </body>
    </html>
  );
}
