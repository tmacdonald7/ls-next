import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lochside Studio",
  description:
    "Lochside Studio builds internal tools first, then refines them into software others can use.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
