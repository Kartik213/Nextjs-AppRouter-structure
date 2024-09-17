import type { Metadata } from "next";
import "./globals.css";

import './globals.css'; // Make sure this points to your global styles

export const metadata : Metadata = {
  title: 'TelosX',
  description: 'Empowering the Future of Blockchain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex h-screen items-center justify-center bg-black">
          <div className="text-center">
            {children} {/* This is where page-specific content will be rendered */}
          </div>
        </main>
      </body>
    </html>
  );
}
