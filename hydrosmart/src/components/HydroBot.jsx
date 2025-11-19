const getBotResponse = (text) => {
    const lowerText = text.toLowerCase();

    // 1. UPDATED COST LOGIC (Smart Answer)
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