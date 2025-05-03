
import React from 'react';
import { Message, formatTimestamp } from '../utils/chatUtils';
import { Shield, ShieldCheck } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isSystem = message.sender === 'system';
  
  return (
    <div className={`message-wrapper ${isSystem ? 'justify-start' : 'justify-end'}`}>
      <div className={`message-bubble ${isSystem ? 'message-system gradient-border' : 'message-user'}`}>
        {isSystem && (
          <div className="flex items-center gap-2 mb-1 text-cyber-accent">
            <Shield size={16} />
            <span className="text-xs font-semibold">SYSTEM</span>
            <ShieldCheck size={16} className="ml-auto" />
          </div>
        )}
        <p className="text-sm md:text-base">{message.content}</p>
        <div className={`text-xs mt-1 ${isSystem ? 'text-cyber-muted' : 'text-white/70'} text-right`}>
          {formatTimestamp(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
