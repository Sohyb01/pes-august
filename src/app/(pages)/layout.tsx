import "@/app/globals.css";

// import { SessionProvider } from "next-auth/react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <SessionProvider session={session}> */}
      {children}
      {/* </SessionProvider> */}
    </div>
  );
}
