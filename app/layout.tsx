import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProviders";

const inter = Rubik({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Groop",
  description: "Guest website management",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main className="h-screen ">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
