import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./Components/Footer";
import { getServerSession } from "next-auth";
import { ToastContainer } from "react-toastify";

// import { SessionProvider } from "next-auth/react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Programmer's Elite School",
  description: "Invest in the Future",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <SessionProvider session={session}> */}
        {children}
        <ToastContainer />
        <Footer></Footer>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
