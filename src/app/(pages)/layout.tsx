import "@/app/globals.css";
import GeneralNavbar from "@/app/Components/GeneralNavbar";

// import { SessionProvider } from "next-auth/react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <SessionProvider session={session}> */}
      <GeneralNavbar></GeneralNavbar>
      {children}
      {/* </SessionProvider> */}
    </div>
  );
}
