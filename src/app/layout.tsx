import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Academy",
  description: `Academy is a powerful book generation app that brings creativity and convenience to the world of literature. Whether you're an aspiring writer, a content creator, or someone looking for unique reading experiences, our app has you covered. With Academy, you can effortlessly create engaging and personalized books tailored to your preferences.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
