import React from 'react';

function FourthPage() {
  return (
    <div className="h-screen w-screen bg-black relative flex items-center justify-center overflow-hidden">
      {/* Red glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-red-900/30 via-black to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 px-6 flex flex-col items-center gap-8 max-w-3xl">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-pirata text-center leading-tight">
          After all your seeking,<br />
          you found the <span className="text-red-600">Truth</span>
        </h1>
      </div>
    </div>
  );
}

export default FourthPage;