import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ThirdPage() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  // The tarot cards available
  const tarotCards = [
    'The-Fool',
    'The-Magician',
    'The-High-Priestess',
    'The-Moon',
    'The-Sun',
    'The-Tower',
    'Death',
    'Temperance',
    'The-World',
    'Judgement'
  ];

  // The correct sequence
  const correctSequence = ['The-Fool', 'The-Tower', 'Death', 'Judgement'];

  const handleCardClick = (cardName) => {
    // Don't allow more than 4 cards to be selected
    if (selectedCards.length >= 4) return;
    
    const newSelected = [...selectedCards, cardName];
    setSelectedCards(newSelected);

    // Only check sequence after all 4 cards are selected
    if (newSelected.length === 4) {
      // Check if the sequence is correct
      const isCorrect = correctSequence.every((card, index) => card === newSelected[index]);
      
      if (isCorrect) {
        // Correct sequence - navigate to fourth page
        setTimeout(() => {
          navigate('/revelation');
        }, 800);
      } else {
        // Wrong sequence - show error and reset
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
          setSelectedCards([]);
        }, 2000);
      }
    }
  };

  return (
    <div className="min-h-screen w-screen bg-black relative flex flex-col items-center justify-start overflow-auto py-8 px-4">
      {/* Red glow effect */}
      <div className="fixed inset-0 bg-gradient-radial from-red-900/20 via-black to-black pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-8 mb-8">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-pirata text-center leading-tight transition-colors duration-300 ${
          showError ? 'text-red-600' : 'text-red-500'
        }`}>
          Mirtis
        </h1>
        
        {/* Poem */}
        <div className="border-2 border-red-900/50 p-6 sm:p-8 bg-black/70 backdrop-blur-sm rounded-lg max-w-3xl">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg font-amarante text-center leading-relaxed italic">
            The Fool stepped off the edge, pockets full of sunrise and song.<br />
            Then Babel cracked — tongues turned to thunder, love to ash.<br />
            A scythe kissed the clock, and the world stopped remembering itself.<br />
            From the dust, a trumpet — graves yawning to the light of judgement.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex gap-2">
          {correctSequence.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index < selectedCards.length
                  ? 'bg-red-600'
                  : 'bg-gray-700'
              }`}
            />
          ))}
        </div>

        {showError && (
          <p className="text-red-500 font-amarante text-lg animate-pulse">
            The order is not right...
          </p>
        )}

        {/* Tarot Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full mt-4">
          {tarotCards.map((card) => (
            <button
              key={card}
              onClick={() => handleCardClick(card)}
              disabled={selectedCards.includes(card)}
              className={`relative aspect-[2/3] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/50 ${
                selectedCards.includes(card)
                  ? 'opacity-30 cursor-not-allowed'
                  : 'opacity-100 cursor-pointer'
              }`}
            >
              <img
                src={`/tarot/${card}-tarot-card.jpg`}
                alt={card}
                className="w-full h-full object-contain bg-black"
              />
              {selectedCards.includes(card) && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-red-500 text-4xl font-pirata">
                    {selectedCards.indexOf(card) + 1}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;