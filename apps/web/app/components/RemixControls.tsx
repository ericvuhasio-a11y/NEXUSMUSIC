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

  const handleRemix = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/remix`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          track_id: 'neon-dreams-v2',
          style: style,
        }),
      });

      const data = await response.json();
      alert(`${data.message}\nNew track: ${data.new_track_url}`);
    } catch (err) {
      alert('Remix failed – backend is waking up!');
    } finally {
      setLoading(false);
    }
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
