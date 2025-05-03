
import React from 'react';
import ChatInterface from '../components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-bg bg-opacity-90 flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(155,135,245,0.1)_0%,rgba(26,31,44,0)_70%)] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-accent via-cyber-glow to-cyber-accent"></div>
      
      <div className="mx-auto w-full max-w-3xl flex-grow flex flex-col">
        <ChatInterface />
      </div>
      
      <footer className="text-center py-4 text-cyber-muted text-xs">
        <p>Closed AI © 2025 | Protected with advanced encryption</p>
      </footer>
    </div>
  );
};

export default Index;
