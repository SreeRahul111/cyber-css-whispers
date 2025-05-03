
import React, { useState } from 'react';
import { generateId } from '../utils/chatUtils';
import { Send, Lock } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="border-t border-cyber-accent/20 bg-cyber-bg/80 p-4 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 relative">
        <div className="absolute left-3 text-cyber-accent">
          <Lock size={18} />
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a secure message..."
          className="cyber-input pl-10 w-full"
          autoComplete="off"
        />
        <button 
          type="submit" 
          className="cyber-button flex items-center gap-2"
          disabled={!message.trim()}
        >
          <span className="hidden sm:inline">Send</span>
          <Send size={18} />
        </button>
      </div>
      <div className="mt-2 flex justify-center">
        <div className="text-xs text-cyber-muted flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-cyber-accent animate-pulse"></span>
          Secure connection active
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
