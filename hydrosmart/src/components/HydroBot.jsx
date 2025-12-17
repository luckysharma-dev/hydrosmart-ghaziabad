import React, { useState, useRef, useEffect } from 'react';

const HydroBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm HydroBot 🤖. Ask me about costs, maintenance, or subsidies in Ghaziabad!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  
  const getBotResponse = (text) => {
    const lowerText = text.toLowerCase();

    if (lowerText.includes("cost") || lowerText.includes("price") || lowerText.includes("rate"))
      return "The cost depends on your roof area! Roughly, it is a ₹10,000 base fee + ₹0.50 per liter of potential savings. Use the Calculator on the home page for an exact quote!";
    
    if (lowerText.includes("subsidy") || lowerText.includes("govt")) 
      return "Yes! UP Govt offers subsidies for plots > 300 sqm. You need to apply via the Nagar Nigam portal.";
    
    if (lowerText.includes("clean") || lowerText.includes("maintain") || lowerText.includes("dirty")) 
      return "Maintenance is simple: 1. Clean roof before monsoon. 2. Wash the filter monthly. 3. Disinfect the tank once a year.";
    
    if (lowerText.includes("hello") || lowerText.includes("hi") || lowerText.includes("hey")) 
      return "Hello! 👋 I am HydroBot. Ask me about costs, maintenance, or subsidies!";

    if (lowerText.includes("thank")) 
      return "You're welcome! Every drop counts. 💧";

    return "I'm still learning! Try asking about 'costs', 'subsidy', or 'maintenance'.";
  };
  // ----------------------------------

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    
    setTimeout(() => {
      const botReply = { text: getBotResponse(input), sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden mb-4 animate-fade-in-up">
          {/* Header */}
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="font-bold">HydroBot Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-blue-200 hover:text-white">✕</button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  msg.sender === "user" 
                    ? "bg-blue-600 text-white rounded-br-none" 
                    : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-3">
                <div className="bg-gray-200 p-3 rounded-xl rounded-bl-none text-xs text-gray-500 italic">
                  HydroBot is typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about cost, cleaning..." 
              className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button 
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition transform hover:scale-110 flex items-center justify-center"
      >
        {isOpen ? "✕" : "🤖"}
      </button>
    </div>
  );
};

export default HydroBot;