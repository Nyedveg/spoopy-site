import React from 'react';

function FifthPage() {
  return (
    <div className="h-screen w-screen bg-black relative flex items-center justify-center overflow-hidden">
      {/* Intense red glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-red-900/40 via-red-950/20 to-black animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 px-6 flex flex-col items-center gap-8 max-w-3xl">
        <h1 className="text-red-600 text-4xl sm:text-5xl md:text-6xl font-pirata text-center leading-tight mb-4">
          You have reached the end
        </h1>
        
        <div className="border-2 border-red-600/70 p-6 sm:p-8 bg-black/80 backdrop-blur-sm rounded-lg">
          <p className="text-white text-lg sm:text-xl md:text-2xl font-amarante text-center leading-relaxed mb-6">
            The host must be notified about your journey.
          </p>
          
          <p className="text-gray-300 text-base sm:text-lg font-amarante text-center leading-relaxed mb-6">
            Tell them that your skies were blessed with <span className="text-red-500 font-bold">blood</span>.
          </p>
          
          <div className="border-t-2 border-red-900/50 pt-6 mt-6">
            <p className="text-red-400 text-sm sm:text-base font-amarante text-center leading-relaxed italic">
              Time is running out.<br />
              Only the first to speak these words shall claim the prize.<br />
              <span className="text-red-600 font-bold not-italic">Act quickly, or lose everything.</span>
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm font-amarante text-center italic mt-4">
          This window may close at any moment...
        </p>
      </div>
    </div>
  );
}

export default FifthPage;