import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FourthPage() {
  const [selectedCells, setSelectedCells] = useState([]);
  const [inputWord, setInputWord] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  // 8x8 letter grid with "PAGARBA" hidden diagonally
  const grid = [
    ['P', 'A', 'M', 'K', 'T', 'R', 'V', 'D'],
    ['N', 'A', 'F', 'F', 'H', 'W', 'Q', 'X'],
    ['Y', 'B', 'G', 'R', 'U', 'Z', 'I', 'C'],
    ['E', 'O', 'K', 'A', 'A', 'M', 'L', 'N'],
    ['R', 'T', 'W', 'S', 'R', 'G', 'H', 'G'],
    ['V', 'D', 'Q', 'X', 'Y', 'B', 'A', 'U'],
    ['Z', 'I', 'C', 'E', 'O', 'K', 'A', 'D'],
    ['M', 'L', 'N', 'R', 'T', 'W', 'S', 'T']
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputWord.toLowerCase() === 'pagarba') {
      navigate('/pagarba');
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  const handleCellClick = (rowIndex, colIndex) => {
    const cellKey = `${rowIndex}-${colIndex}`;
    if (selectedCells.includes(cellKey)) {
      setSelectedCells(selectedCells.filter(cell => cell !== cellKey));
    } else {
      setSelectedCells([...selectedCells, cellKey]);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-black relative flex flex-col items-center justify-center overflow-auto py-8 px-4">
      {/* Red glow effect */}
      <div className="fixed inset-0 bg-gradient-radial from-red-900/30 via-black to-black pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-8">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-pirata text-center leading-tight">
          After all your seeking,<br />
          you found the <span className="text-red-600">Truth</span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl font-amarante text-center italic">
          Seek what is in front of you
        </p>

        {/* Letter Grid */}
        <div className="border-2 border-red-900/50 p-4 sm:p-6 bg-black/80 backdrop-blur-sm rounded-lg">
          <div className="grid grid-cols-8 gap-1 sm:gap-2">
            {grid.map((row, rowIndex) =>
              row.map((letter, colIndex) => {
                const cellKey = `${rowIndex}-${colIndex}`;
                const isSelected = selectedCells.includes(cellKey);
                // Check if this cell is part of the solution (diagonal PAGARBA)
                const isSolution = rowIndex === colIndex && rowIndex < 7;
                
                return (
                  <button
                    key={cellKey}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center font-pirata text-lg sm:text-xl md:text-2xl border transition-all duration-200 ${
                      isSelected
                        ? 'bg-red-600/50 border-red-500 text-white'
                        : 'bg-gray-900/50 border-gray-700 text-gray-400 hover:bg-gray-800 hover:border-gray-600'
                    }`}
                  >
                    {letter}
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Input Field */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-md">
          <input
            type="text"
            value={inputWord}
            onChange={(e) => setInputWord(e.target.value)}
            placeholder="What word do you see?"
            className={`w-full px-6 py-3 bg-black/50 backdrop-blur-sm border-2 ${
              showError ? 'border-red-500' : 'border-red-900/50'
            } text-white placeholder-gray-500 rounded-lg font-amarante text-center focus:outline-none focus:border-red-600 transition-colors`}
          />
          <button
            type="submit"
            className="px-8 py-3 bg-red-900/30 hover:bg-red-900/50 border-2 border-red-600 text-red-500 font-pirata text-xl rounded-lg transition-all duration-300 hover:scale-105"
          >
            Submit
          </button>
          {showError && (
            <p className="text-red-500 font-amarante text-sm animate-pulse">
              Look closer...
            </p>
          )}
        </form>

        <p className="text-gray-600 text-xs sm:text-sm font-amarante text-center italic">
          Click the letters to mark them
        </p>
      </div>
    </div>
  );
}

export default FourthPage;
