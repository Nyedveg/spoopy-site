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
          {error ? "You won't find this here." : "It's over"}
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
