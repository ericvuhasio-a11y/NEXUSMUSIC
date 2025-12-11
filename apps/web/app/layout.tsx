import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexusMusic — The Final Form of Music",
  description: "Infinite AI-generated music. Instant remixing. Real-time royalties.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
