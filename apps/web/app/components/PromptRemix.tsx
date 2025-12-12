'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PromptRemix({ onNewTrack }: { onNewTrack: (url: string) => void }) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/remix`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ track_id: 'neon-dreams-v2', style: prompt }),
      });
      const data = await response.json();
      onNewTrack(data.new_track_url);
      alert(`Generated: ${data.message}\nNew track: ${data.new_track_url}`);
    } catch (err) {
      alert('Generation failed – backend is warming up!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-black/90 border border-purple-500/40 rounded-2xl p-8 backdrop-blur-xl shadow-2xl z-40 max-w-4xl w-full mx-4">
      <h3 className="text-3xl font-bold text-center text-white mb-6">
        Custom Remix Prompt
      </h3>

      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g. 'dark techno with heavy bass and rain sounds'"
        className="w-full px-6 py-4 bg-gray-900/80 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 mb-6"
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleGenerate}
        disabled={loading || !prompt.trim()}
        className={`w-full py-5 text-xl font-bold rounded-xl transition-all ${
          loading || !prompt.trim()
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
            Generating...
          </span>
        ) : (
          'Generate Custom Track'
        )}
      </motion.button>
    </div>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MusicPlayer from './components/MusicPlayer';
import PromptRemix from './components/PromptRemix';

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState('https://cdn.nexusmusic.ai/sample-track.mp3');
  const [beatIntensity, setBeatIntensity] = useState(0);

  const handleNewTrack = (url: string) => {
    setCurrentTrack(url);
  };

  // Simulate beat-reactive background
  useEffect(() => {
    const interval = setInterval(() => {
      setBeatIntensity(Math.random() * 100);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Reactive 4K background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-pink-950"
          style={{
            opacity: 0.8 + beatIntensity / 300,
            filter: `blur(${20 - beatIntensity / 10}px)`,
            transform: `scale(${1 + beatIntensity / 1000})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/30 to-transparent animate-pulse" />
      </div>

      <main className="relative min-h-screen">
        {/* Your existing landing page content here */}
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent mb-6"
          >
            NEXUSMUSIC
          </motion.h1>
          {/* ... rest of your landing content ... */}
        </div>
      </main>

      <MusicPlayer currentTrack={currentTrack} />
      <PromptRemix onNewTrack={handleNewTrack} />
    </>
  );
} 
