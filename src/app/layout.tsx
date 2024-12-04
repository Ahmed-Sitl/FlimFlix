import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Varela_Round } from "next/font/google";

const inter = Varela_Round({ weight: "400", subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Flim Flix",
  description:
    "Explore the world of movies with Flim Flix. Discover trending films, top-rated classics, and new releases. Get detailed information, reviews, and personalized movie recommendations all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
