import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Logout from "./logout";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coding Cowboys",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <nav>
          {!!session && <Logout />}
          {!session && <Link href="/login">Login</Link>}
          { <Link href="/dashboard">Dashboard</Link>}
        </nav>
        {children}
      </body>
    </html>
  )
}