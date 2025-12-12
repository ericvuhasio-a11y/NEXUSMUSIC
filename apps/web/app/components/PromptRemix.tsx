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
        body: JSON.stringify({
          track_id: 'neon-dreams-v2',
          style: prompt,
        }),
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
