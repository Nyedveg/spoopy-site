import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === 'nuotykiai') {
      navigate('/nuotykiai');
    } else if (password.toLowerCase() === 'mirtis') {
      navigate('/mirtis');
    } else if (password.toLowerCase() === 'pagarba') {
      navigate('/pagarba');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="h-screen w-screen bg-dark relative flex items-center justify-center overflow-hidden">
      {/* Background image with 50% opacity - smaller and centered */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-50"
      >
        <img 
          src="/background.jpg" 
          alt="" 
          className="max-w-[80%] max-h-[60%] md:max-w-[60%] md:max-h-[70%] object-contain"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-6 flex flex-col items-center gap-8">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-pirata text-center leading-tight transition-all duration-300 ${
          error ? 'text-red-500' : 'text-cream'
        }`}>
          {error ? "You won't find this here." : "What do you seek?"}
        </h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-md">
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your answer... (LT)"
            className={`w-full px-6 py-3 bg-cream/10 backdrop-blur-sm border-2 ${
              error ? 'border-red-500' : 'border-cream/30'
            } text-cream placeholder-cream/50 rounded-lg font-amarante text-center focus:outline-none focus:border-cream transition-colors`}
          />
          <button
            type="submit"
            className="px-8 py-3 bg-cream/20 hover:bg-cream/30 border-2 border-cream text-cream font-pirata text-xl rounded-lg transition-all duration-300 hover:scale-105"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;