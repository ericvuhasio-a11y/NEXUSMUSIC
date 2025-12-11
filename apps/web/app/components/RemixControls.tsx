'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RemixControls() {
  const [style, setStyle] = useState('aggressive');
  const [loading, setLoading] = useState(false);

  const styles = [
    { id: 'aggressive', label: 'More Aggressive' },
    { id: 'dreamy', label: 'Dreamy / Lofi' },
    { id: 'cyberpunk', label: 'Cyberpunk Neon' },
    { id: 'chill', label: 'Chill Vibes' },
    { id: 'epic', label: 'Epic Cinematic' },
  ];

  const handleRemix = () => {
    setLoading(true);
    // This will call our Rust backend later – for now it shows the animation
    setTimeout(() => {
      setLoading(false);
      alert('Remix complete! (Backend coming soon – we are unstoppable)');
    }, 2000);
  };

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-black/80 border border-purple-500/40 rounded-2xl p-6 backdrop-blur-xl shadow-2xl z-40 max-w-4xl w-full mx-4">
      <h3 className="text-2xl font-bold text-center text-white mb-6">
        Remix This Track
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {styles.map((s) => (
          <motion.button
            key={s.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStyle(s.id)}
            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              style === s.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {s.label}
          </motion.button>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleRemix}
        disabled={loading}
        className={`w-full py-5 text-xl font-bold rounded-xl transition-all ${
          loading
            ? 'bg-gray-700 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-purple-500/50'
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Remixing...
          </span>
        ) : (
          'Remix Now'
        )}
      </motion.button>
    </div>
  );
} 
'use client';

import { motion } from "framer-motion";
import MusicPlayer from "./components/MusicPlayer";
import RemixControls from "./components/RemixControls";

export default function Home() {
  return (
    <>
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

      {/* Fixed player and remix controls */}
      <MusicPlayer />
      <RemixControls />
    </>
  );
} 
