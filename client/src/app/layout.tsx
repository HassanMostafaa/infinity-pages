import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LayoutComponent } from "@/base-components/layout-component/LayoutComponent";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-zen-kaku-gothic-new",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}
