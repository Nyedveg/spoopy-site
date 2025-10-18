function App() {
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
      <div className="relative z-10 px-6">
        <h1 className="text-cream text-3xl sm:text-4xl md:text-5xl font-pirata text-center leading-tight">
          So what are you here for?
        </h1>
      </div>
    </div>
  );
}

export default App;