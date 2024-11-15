import NavBar from "@/components/nav-bar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <NavBar />
      {children}
    </SessionProvider>
  );
}
