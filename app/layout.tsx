import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KICKS - Маркетплейс кроссовок",
  description:
    "Лучшие кроссовки от ведущих мировых брендов. Nike, Adidas, New Balance, Jordan, Puma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='font-sans antialiased'>{children}</body>
    </html>
  );
}
