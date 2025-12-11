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
'use client';

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent mb-6">
            NEXUSMUSIC
          </h1>
          <p className="text-2xl md:text-4xl text-gray-300 mb-12">
            The world’s first AI-native music platform
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-2xl font-bold shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            Start Remixing
          </motion.button>

          <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
            <div className="p-6 bg-black/40 rounded-xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Instant Remix</h3>
              <p>Make any track more aggressive, dreamy, or cyberpunk in seconds</p>
            </div>
            <div className="p-6 bg-black/40 rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Real-Time Royalties</h3>
              <p>Polygon zkEVM – payouts every hour, transparent on-chain</p>
            </div>
            <div className="p-6 bg-black/40 rounded-xl border border-pink-500/30">
              <h3 className="text-2xl font-bold text-pink-400 mb-2">4K Reactive Visuals</h3>
              <p>AI-generated videos that dance to the beat</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  ); 
  @tailwind base;
@tailwind components;
@tailwind utilities;
}
