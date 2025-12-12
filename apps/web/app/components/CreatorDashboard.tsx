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
