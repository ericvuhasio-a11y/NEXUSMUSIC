'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CreatorDashboard() {
  const [royalties, setRoyalties] = useState(0);
  const [streams, setStreams] = useState(124567);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate on-chain royalty fetch
    setRoyalties(4938.27);
  }, []);

  const claimRoyalties = () => {
    setLoading(true);
    setTimeout(() => {
      alert('Royalties claimed! 4938.27 USDC sent to your wallet (Polygon zkEVM)');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-black/95 border border-purple-500/40 rounded-2xl p-8 backdrop-blur-xl shadow-2xl z-50 max-w-4xl w-full mx-4">
      <h3 className="text-3xl font-bold text-center text-white mb-6">
        Creator Dashboard
      </h3>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="text-center">
          <p className="text-sm text-gray-400">Total Streams</p>
          <p className="text-4xl font-bold text-purple-400">{streams.toLocaleString()}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">Royalties Earned (USDC)</p>
          <p className="text-4xl font-bold text-pink-400">${royalties.toFixed(2)}</p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={claimRoyalties}
        disabled={loading}
        className={`w-full py-5 text-xl font-bold rounded-xl transition-all ${
          loading
            ? 'bg-gray-700 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-purple-500/50'
        }`}
      >
        {loading ? 'Claiming...' : 'Claim Royalties Now'}
      </motion.button>

      <p className="text-center text-sm text-gray-500 mt-4">
        Paid instantly via Polygon zkEVM • Transparent on-chain
      </p>
    </div>
  );
} 
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function VRConcert() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    // Simple WebXR + spatial audio demo
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.fillStyle = 'rgba(147, 51, 234, 0.5)';
    ctx.fillRect(50, 50, 200, 200);
  }, []);

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-black/95 border border-cyan-500/40 rounded-2xl p-8 backdrop-blur-xl shadow-2xl z-50 max-w-4xl w-full mx-4">
      <h3 className="text-3xl font-bold text-center text-white mb-6">
        VR Concert Room
      </h3>

      <canvas ref={canvasRef} width="400" height="300" className="w-full rounded-xl mb-6" />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-5 text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all"
        onClick={() => alert('Entering VR Concert – Spatial Audio + WebXR (Meta Quest / Vision Pro ready)')}
      >
        Enter VR Concert Room
      </motion.button>
    </div>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function InfiniteDJ() {
  const [currentStyle, setCurrentStyle] = useState('synthwave');
  const [isDJing, setIsDJing] = useState(false);

  useEffect(() => {
    if (!isDJing) return;
    const interval = setInterval(() => {
      const styles = ['synthwave', 'cyberpunk', 'lofi', 'epic', 'dark techno'];
      const next = styles[Math.floor(Math.random() * styles.length)];
      setCurrentStyle(next);
    }, 15000);
    return () => clearInterval(interval);
  }, [isDJing]);

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-black/95 border border-pink-500/40 rounded-2xl p-8 backdrop-blur-xl shadow-2xl z-50 max-w-4xl w-full mx-4">
      <h3 className="text-3xl font-bold text-center text-white mb-6">
        Infinite Neural DJ
      </h3>

      <p className="text-center text-xl text-pink-400 mb-6">
        Currently playing: {currentStyle}
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsDJing(!isDJing)}
        className={`w-full py-5 text-xl font-bold rounded-xl transition-all ${
          isDJing
            ? 'bg-gradient-to-r from-pink-600 to-purple-600 hover:shadow-pink-500/50'
            : 'bg-gray-700 hover:bg-gray-600'
        }`}
      >
        {isDJing ? 'Stop DJ' : 'Start Infinite DJ'}
      </motion.button>
    </div>
  );
} 
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import MusicPlayer from './components/MusicPlayer';
import PromptRemix from './components/PromptRemix';
import CreatorDashboard from './components/CreatorDashboard';
import VRConcert from './components/VRConcert';
import InfiniteDJ from './components/InfiniteDJ';

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState('https://cdn.nexusmusic.ai/sample-track.mp3');

  const handleNewTrack = (url: string) => {
    setCurrentTrack(url);
  };

  return (
    <>
      {/* Reactive background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-purple-950 to-pink-950" />

      <main className="relative min-h-screen">
        {/* Your existing landing page content */}
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent mb-6"
          >
            NEXUSMUSIC
          </motion.h1>
          {/* ... rest of landing ... */}
        </div>
      </main>

      <MusicPlayer currentTrack={currentTrack} />
      <PromptRemix onNewTrack={handleNewTrack} />
      <CreatorDashboard />
      <VRConcert />
      <InfiniteDJ />
    </>
  );
} 
