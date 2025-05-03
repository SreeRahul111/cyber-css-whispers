
import React, { useState, useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import { Message, generateId, getRandomSecurityResponse } from '../utils/chatUtils';
import { ShieldCheck, Shield } from 'lucide-react';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateId(),
      content: "Welcome to Closed AI. All communications are end-to-end encrypted.",
      sender: 'system',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: generateId(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    
    // Simulate system response
    setIsTyping(true);
    
    setTimeout(() => {
      const systemMessage: Message = {
        id: generateId(),
        content: getRandomSecurityResponse(),
        sender: 'system',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, systemMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="chat-container">
      <header className="bg-cyber-bg border-b border-cyber-accent/20 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck size={24} className="text-cyber-accent" />
            <h1 className="text-xl font-semibold">Closed AI</h1>
          </div>
          <div className="text-cyber-muted text-sm flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyber-glow"></span>
            Secure
          </div>
        </div>
      </header>
      
      <div className="flex-grow p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        
        {isTyping && (
          <div className="message-wrapper justify-start">
            <div className="message-bubble message-system">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-cyber-accent" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-cyber-accent/70 animate-bounce" style={{animationDelay: '0ms'}}></div>
                  <div className="w-2 h-2 rounded-full bg-cyber-accent/70 animate-bounce" style={{animationDelay: '150ms'}}></div>
                  <div className="w-2 h-2 rounded-full bg-cyber-accent/70 animate-bounce" style={{animationDelay: '300ms'}}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef}></div>
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatInterface;
