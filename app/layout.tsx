import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glide Guide | Youth Figure Skating Guide",
  description:
    "A warm, browsable figure skating resource for youth, parents, and clubs, built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
