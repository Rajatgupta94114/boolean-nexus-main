import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, X, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchSuggestions = [
    'AI processors',
    'IoT microcontrollers',
    'Manufacturing services',
    'Technical documentation',
    'Case studies',
    'Career opportunities'
  ];

  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-20 right-6 z-40"
    >
      <div className="glass-intense rounded-2xl border border-primary/20 p-4 w-80">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Smart Search</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground p-1"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products, services, docs..."
            className="pl-10 bg-background/50 border-primary/30 focus:border-primary"
          />
        </div>
        
        {searchQuery && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground mb-2">Suggestions:</p>
            {filteredSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setSearchQuery(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
        
        <Button 
          className="w-full mt-4 bg-primary hover:bg-primary-dark text-primary-foreground"
        >
          Search
        </Button>
      </div>
    </motion.div>
  );
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Boolean Microchips assistant. How can I help you today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQuestions = [
    "What AI processors do you offer?",
    "How can I request a quote?",
    "What's your manufacturing capacity?",
    "Do you have technical support?"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newMessage = { id: Date.now(), text: inputMessage, isBot: false };
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: "Thank you for your question! I'm connecting you with a technical specialist who will provide detailed information.", 
        isBot: true 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
    
    setInputMessage('');
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="fixed bottom-24 right-6 z-50 w-96 h-[500px] glass-intense rounded-3xl border border-primary/20 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-4 border-b border-primary/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Boolean Assistant</h3>
                <p className="text-xs text-green-400">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot 
                      ? 'bg-primary/20 text-foreground' 
                      : 'bg-primary text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Quick Questions */}
          <div className="p-4 border-t border-primary/20">
            <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
            <div className="grid grid-cols-1 gap-2 mb-4">
              {quickQuestions.slice(0, 2).map((question) => (
                <button
                  key={question}
                  onClick={() => setInputMessage(question)}
                  className="text-left text-xs p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
            
            {/* Input */}
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-background/50 border-primary/30 focus:border-primary text-sm"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-primary hover:bg-primary-dark text-white px-3"
              >
                Send
              </Button>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center glow-primary hover:glow-intense transition-all duration-300 shadow-lg"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>
    </>
  );
};

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-background/50">
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-accent"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
      />
    </div>
  );
};

const FloatingWidgets = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <ProgressBar />
      <ChatbotWidget />
      
      {/* Search Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowSearch(!showSearch)}
        className="fixed top-24 right-6 z-40 w-12 h-12 glass rounded-full flex items-center justify-center border border-primary/20 hover:border-primary/40 transition-all duration-300"
      >
        <Search className="w-5 h-5 text-primary" />
      </motion.button>
      
      {showSearch && <SearchWidget />}
      
      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 left-6 z-40 w-12 h-12 glass rounded-full flex items-center justify-center border border-primary/20 hover:border-primary/40 transition-all duration-300"
      >
        <ChevronDown className="w-5 h-5 text-primary rotate-180" />
      </motion.button>
    </>
  );
};

export default FloatingWidgets;