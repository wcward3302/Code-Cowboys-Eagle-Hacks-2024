import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Logout from "./logout";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coding Cowboys",
  description: "Coding Cowboys Team Project for Eagle Hacks 2024",
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
        <nav className="navbar">
          {!!session && <Logout />}
          {!session && <Link href="/login-register">Login</Link>}
          { <Link href="/dashboard">Dashboard</Link>}
        </nav>
        {children}
      </body>
    </html>
  )
}