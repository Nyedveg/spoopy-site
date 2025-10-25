import React from 'react';

function SecondPage() {
  return (
    <div className="h-screen w-screen bg-altdark relative flex items-center justify-center overflow-hidden">
      {/* Background image with reduced opacity */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-30 grayscale"
      >
        <img 
          src="/background_2.jpg" 
          alt="" 
          className="max-w-[80%] max-h-[60%] md:max-w-[60%] md:max-h-[70%] object-contain"
        />
      </div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 px-6 flex flex-col items-center gap-6">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-pirata text-center leading-tight drop-shadow-lg">
          Seek what is missing
        </h1>
        <p className="text-red-500 text-lg sm:text-xl font-amarante text-center italic">
          Where do the lost go?
        </p>
      </div>
    </div>
  );
}

export default SecondPage;
