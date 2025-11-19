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
    if (lowerText.includes("cost") || lowerText.includes("price")) return "A standard 1000 sq ft setup in Ghaziabad costs between ₹30,000 to ₹50,000.";
    if (lowerText.includes("subsidy") || lowerText.includes("govt")) return "Yes! UP Govt offers subsidies for plots > 300 sqm.";
    if (lowerText.includes("clean") || lowerText.includes("maintain")) return "Clean your roof before monsoon and wash filters monthly.";
    if (lowerText.includes("hello") || lowerText.includes("hi")) return "Hello! 👋 Ready to save water?";
    return "I'm still learning! Try asking about 'costs' or 'maintenance'.";
  };

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
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden mb-4">
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <h3 className="font-bold">HydroBot Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-blue-200">✕</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.sender === "user" ? "bg-blue-600 text-white" : "bg-white border"}`}>{msg.text}</div>
              </div>
            ))}
            {isTyping && <div className="text-xs text-gray-500 italic ml-2">HydroBot is typing...</div>}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 bg-white border-t flex gap-2">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask a question..." className="flex-1 border rounded-full px-4 py-2 text-sm outline-none" />
            <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded-full">➤</button>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition transform hover:scale-110 text-2xl">
        {isOpen ? "✕" : "🤖"}
      </button>
    </div>
  );
};

export default HydroBot;