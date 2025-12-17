import React, { useState } from 'react';
import Confetti from 'react-confetti';

const PledgeCard = () => {
  const [pledged, setPledged] = useState(false);
  const [count, setCount] = useState(1245);

  const handlePledge = () => {
    if (!pledged) {
      setPledged(true);
      setCount(count + 1);
      setTimeout(() => setPledged(false), 5000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 rounded-2xl shadow-2xl text-center relative overflow-hidden mb-12 max-w-2xl mx-auto transform hover:scale-105 transition duration-300">
      {pledged && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={200} />}
      <h3 className="text-3xl font-bold mb-2">💧 Be a Water Hero!</h3>
      <p className="text-indigo-100 mb-6">Join {count.toLocaleString()} Ghaziabad residents who have pledged to save water.</p>
      <button onClick={handlePledge} disabled={pledged} className={`px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all ${pledged ? "bg-green-500 text-white scale-110 cursor-default" : "bg-white text-indigo-600 hover:bg-gray-100"}`}>
        {pledged ? "🎉 Thank You! Pledged!" : "✋ I Pledge to Save Water"}
      </button>
    </div>
  );
};

export default PledgeCard;