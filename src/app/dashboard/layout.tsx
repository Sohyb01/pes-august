import DashboardNavbar from "@/app/Components/DashboardNavbar";
import "@/app/globals.css";

// import { SessionProvider } from "next-auth/react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardNavbar></DashboardNavbar>
      {/* <SessionProvider session={session}> */}
      {children}

      {/* </SessionProvider> */}
    </>
  );
}
