import type { Metadata } from "next";
import "./globals.css";

export const metadata : Metadata = {
  title: 'NextJs',
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
