const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Animated gradient orbs - more colorful */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-saffron/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[hsl(142_76%_36%_/_0.08)] rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '2s', animationDuration: '10s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] bg-[hsl(271_81%_56%_/_0.06)] rounded-full blur-3xl animate-float-slow" 
           style={{ animationDelay: '3s', animationDuration: '12s' }} />
      <div className="absolute top-2/3 right-1/3 w-[350px] h-[350px] bg-[hsl(45_93%_58%_/_0.07)] rounded-full blur-3xl animate-pulse-glow" 
           style={{ animationDelay: '1s', animationDuration: '9s' }} />
      
      {/* Floating shapes - more variety */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-float" 
           style={{ animationDelay: '1s', animationDuration: '5s' }} />
      <div className="absolute top-3/4 left-1/4 w-6 h-6 bg-saffron/20 rounded-full animate-float-slow" 
           style={{ animationDelay: '2s', animationDuration: '7s' }} />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-accent/20 rounded-full animate-float" 
           style={{ animationDelay: '0.5s', animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 right-1/2 w-5 h-5 bg-primary/15 rounded-full animate-float-slow" 
           style={{ animationDelay: '1.5s', animationDuration: '8s' }} />
      <div className="absolute top-1/5 left-1/3 w-4 h-4 bg-[hsl(142_76%_36%_/_0.2)] rounded-full animate-float" 
           style={{ animationDelay: '0.8s', animationDuration: '6.5s' }} />
      <div className="absolute bottom-1/5 right-1/5 w-5 h-5 bg-[hsl(271_81%_56%_/_0.2)] rounded-full animate-float-slow" 
           style={{ animationDelay: '1.2s', animationDuration: '7.5s' }} />
      <div className="absolute top-2/5 left-1/5 w-3 h-3 bg-[hsl(351_83%_69%_/_0.2)] rounded-full animate-float" 
           style={{ animationDelay: '2.5s', animationDuration: '5.5s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,_118,_206,_0.02)_1px,_transparent_1px),linear-gradient(90deg,_rgba(15,_118,_206,_0.02)_1px,_transparent_1px)] bg-[size:50px_50px]" />
    </div>
  );
};

export default InteractiveBackground;