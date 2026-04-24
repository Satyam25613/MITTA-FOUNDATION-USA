import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mitta Foundation | Infrastructure for Learning",
  description: "Mitta Foundation builds learning, skills, and community infrastructure in Hyderabad, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&family=Sora:wght@400..700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
