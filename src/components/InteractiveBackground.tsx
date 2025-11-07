const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-saffron/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-float" 
           style={{ animationDelay: '1s', animationDuration: '5s' }} />
      <div className="absolute top-3/4 left-1/4 w-6 h-6 bg-saffron/20 rounded-full animate-float-slow" 
           style={{ animationDelay: '2s', animationDuration: '7s' }} />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-accent/20 rounded-full animate-float" 
           style={{ animationDelay: '0.5s', animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 right-1/2 w-5 h-5 bg-primary/15 rounded-full animate-float-slow" 
           style={{ animationDelay: '1.5s', animationDuration: '8s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,_118,_206,_0.03)_1px,_transparent_1px),linear-gradient(90deg,_rgba(15,_118,_206,_0.03)_1px,_transparent_1px)] bg-[size:50px_50px]" />
    </div>
  );
};

export default InteractiveBackground;