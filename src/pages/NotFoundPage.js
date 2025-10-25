import React from 'react';

function NotFoundPage() {
  return (
    <div className="h-screen w-screen bg-black relative flex items-center justify-center overflow-hidden">
      {/* Static noise effect overlay */}
      <div className="absolute inset-0 opacity-5 bg-noise"></div>
      
      {/* Red glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 px-6 flex flex-col items-center gap-8 max-w-2xl">
        <h1 className="text-red-600 text-7xl sm:text-8xl md:text-9xl font-pirata text-center leading-tight animate-pulse">
          404
        </h1>
        
        <div className="border-2 border-white/20 p-8 bg-white/5 backdrop-blur-sm rounded-lg">
          <p className="text-white text-2xl sm:text-3xl font-pirata text-center mb-4">
            You found the place to seek
          </p>
          <p className="text-gray-400 text-lg font-amarante text-center mb-6">
            But not the word itself...
          </p>
          <p className="text-gray-300 text-base sm:text-lg font-amarante text-center leading-relaxed">
            The scribes wrote of life's final page,<br />
            yet this one was torn away.<br />
            Seek what every tale ends with—<br />
            what the <span className="text-red-600 tracking-wide">REAPER</span> sows.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
