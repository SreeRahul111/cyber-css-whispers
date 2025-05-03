
export interface Message {
  id: string;
  content: string;
  sender: 'system' | 'user';
  timestamp: Date;
}

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

export const formatTimestamp = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const securityResponses = [
  "Initiating secure connection...",
  "Encryption protocols activated.",
  "Your message has been secured with end-to-end encryption.",
  "Security scan complete. No threats detected.",
  "Warning: Potential security breach detected. Implementing countermeasures.",
  "Connection secured with AES-256 encryption.",
  "Cybersecurity shield active and monitoring.",
  "Your data is being transmitted through a secure tunnel.",
  "Firewall enabled. Unauthorized access prevented.",
  "Security update: New encryption keys generated.",
  "Scanning network for vulnerabilities...",
];

export const getRandomSecurityResponse = (): string => {
  const randomIndex = Math.floor(Math.random() * securityResponses.length);
  return securityResponses[randomIndex];
};
