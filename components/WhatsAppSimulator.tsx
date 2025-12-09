
import React, { useState, useEffect, useRef } from 'react';
import { Send, Paperclip, MoreVertical, Phone, Video, Check, CheckCheck } from 'lucide-react';

type Message = {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: string;
  type?: 'text' | 'image' | 'options';
  options?: string[];
  image?: string;
};

type FlowType = 'CUSTOMER_APPLY' | 'ID_VERIFICATION' | 'SHOP_OWNER';

const WhatsAppSimulator: React.FC = () => {
  const [flow, setFlow] = useState<FlowType>('CUSTOMER_APPLY');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Reset flow when flow type changes
  useEffect(() => {
    setMessages([]);
    startFlow(flow);
  }, [flow]);

  const addMessage = (text: string, sender: 'bot' | 'user', options?: string[], image?: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: image ? 'image' : options ? 'options' : 'text',
      options,
      image
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = (callback: () => void) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, 1500);
  };

  const startFlow = (currentFlow: FlowType) => {
    simulateTyping(() => {
      if (currentFlow === 'CUSTOMER_APPLY') {
        addMessage("Welcome to Mobanja! 📱 Uganda's #1 iPhone Instalment Service.", 'bot');
        setTimeout(() => {
          addMessage("How can we help you today?", 'bot', ["Buy iPhone", "Check Status", "Support"]);
        }, 800);
      } else if (currentFlow === 'ID_VERIFICATION') {
        addMessage("To complete your application for iPhone 15 Pro, we need to verify your identity.", 'bot');
        setTimeout(() => {
           addMessage("Please upload a clear photo of your National ID (Front).", 'bot', ["📷 Upload ID"]);
        }, 1000);
      } else if (currentFlow === 'SHOP_OWNER') {
        addMessage("👋 Welcome Partner! You are logged into the Shop Owner Portal.", 'bot');
        setTimeout(() => {
           addMessage("What would you like to do?", 'bot', ["Register Sale", "Check Commission", "My Stock"]);
        }, 800);
      }
    });
  };

  const handleOptionClick = (option: string) => {
    addMessage(option, 'user');
    
    // Logic for responses based on flow and user input
    setTimeout(() => {
        simulateTyping(() => {
            handleBotResponse(option);
        });
    }, 500);
  };

  const handleBotResponse = (userInput: string) => {
    // Customer Flow
    if (userInput === "Buy iPhone") {
        addMessage("Great choice! Here are our trending models:", 'bot');
        addMessage("iPhone 15 Pro Max\nUGX 520,000 / month", 'bot', ["Select iPhone 15 Pro Max", "View More"], "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=600");
    } else if (userInput === "Select iPhone 15 Pro Max") {
        addMessage("Excellent. Choose your payment plan:", 'bot', ["6 Months", "12 Months", "18 Months"]);
    } else if (userInput.includes("Months")) {
        addMessage(`Perfect. We have selected the ${userInput} plan. To proceed, we need to verify your ID.`, 'bot', ["Start Verification"]);
    } else if (userInput === "Start Verification") {
        setFlow('ID_VERIFICATION');
    }
    
    // ID Verification Flow
    else if (userInput === "📷 Upload ID") {
        addMessage("Uploading ID...", 'user', undefined, "https://images.unsplash.com/photo-1633265486064-084b219563de?auto=format&fit=crop&q=80&w=600"); // Fake ID placeholder
        setTimeout(() => {
            addMessage("✅ National ID Received. Now, please take a selfie.", 'bot', ["🤳 Take Selfie"]);
        }, 1500);
    } else if (userInput === "🤳 Take Selfie") {
        addMessage("Uploading Selfie...", 'user', undefined, "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200");
        setTimeout(() => {
            addMessage("🔄 Verifying biometric data...", 'bot');
            setTimeout(() => {
                addMessage("✅ Identity Verified! Limit Approved: UGX 6,000,000.", 'bot');
                addMessage("Please pay your down payment of UGX 1,740,000 to finalize.", 'bot', ["Pay with MTN MoMo", "Pay with Airtel"]);
            }, 2000);
        }, 1000);
    }

    // Shop Owner Flow
    else if (userInput === "Register Sale") {
        addMessage("Please enter the customer's Phone Number to check eligibility.", 'bot');
        setTimeout(() => {
             addMessage("Customer: 0771234567", 'user'); // Simulate text input
             setTimeout(() => {
                addMessage("🔍 Checking Eligibility...", 'bot');
                setTimeout(() => {
                   addMessage("✅ Customer Approved! Max Credit: UGX 4M.", 'bot');
                   addMessage("Select the device they are buying:", 'bot', ["iPhone 14", "iPhone 13", "Other"]);
                }, 1500);
             }, 1000);
        }, 1000);
    } else if (userInput === "iPhone 14") {
         addMessage("Sale Value: UGX 2,500,000\nYour Payout: UGX 2,500,000\n\nAsk customer to pay down payment: UGX 1,000,000", 'bot', ["Confirm Payment Received"]);
    } else if (userInput === "Confirm Payment Received") {
         addMessage("💰 UGX 1,500,000 has been sent to your Merchant Wallet. Transaction Complete.", 'bot');
    }

    // Generic fallback
    else {
        addMessage("I didn't quite catch that. Please select an option from the menu.", 'bot', ["Menu", "Support"]);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
      {/* Controls */}
      <div className="w-full lg:w-64 flex flex-col gap-2">
        <p className="text-sm font-bold text-text-medium uppercase mb-2">Select Demo Flow</p>
        <button onClick={() => setFlow('CUSTOMER_APPLY')} className={`p-3 text-left rounded-xl transition-all ${flow === 'CUSTOMER_APPLY' ? 'bg-accent text-white shadow-md' : 'bg-surface text-text-dark border border-border'}`}>Customer Purchase</button>
        <button onClick={() => setFlow('ID_VERIFICATION')} className={`p-3 text-left rounded-xl transition-all ${flow === 'ID_VERIFICATION' ? 'bg-accent text-white shadow-md' : 'bg-surface text-text-dark border border-border'}`}>ID Verification</button>
        <button onClick={() => setFlow('SHOP_OWNER')} className={`p-3 text-left rounded-xl transition-all ${flow === 'SHOP_OWNER' ? 'bg-accent text-white shadow-md' : 'bg-surface text-text-dark border border-border'}`}>Shop Owner Portal</button>
      </div>

      {/* Phone Mockup */}
      <div className="relative w-[320px] h-[650px] bg-black rounded-[3rem] border-[8px] border-black shadow-2xl overflow-hidden flex flex-col">
        
        {/* Status Bar */}
        <div className="h-7 bg-[#075E54] w-full flex justify-between items-center px-4 text-[10px] text-white font-medium z-10">
           <span>9:41</span>
           <div className="flex gap-1">
             <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
             <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
           </div>
        </div>

        {/* WhatsApp Header */}
        <div className="bg-[#075E54] p-3 flex items-center justify-between text-white z-10 shadow-md">
           <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                 <img src="https://placehold.co/100x100/00AEEF/ffffff?text=M" alt="Mobanja" className="w-full h-full object-cover" />
              </div>
              <div>
                 <p className="font-bold text-sm">Mobanja Official</p>
                 <p className="text-[10px] opacity-80">Business Account</p>
              </div>
           </div>
           <div className="flex gap-3">
              <Video size={18} />
              <Phone size={18} />
              <MoreVertical size={18} />
           </div>
        </div>

        {/* Chat Area */}
        <div className="flex-grow bg-[#ECE5DD] relative overflow-y-auto p-4 custom-scrollbar">
           <div className="absolute inset-0 opacity-10 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none"></div>
           
           <div className="flex flex-col gap-3 relative z-10">
             <div className="bg-[#DCF8C6] p-2 text-xs text-center rounded-lg shadow-sm self-center text-gray-600 mb-2">
                Messages are end-to-end encrypted.
             </div>

             {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col max-w-[80%] ${msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'}`}>
                   <div className={`p-2 rounded-lg shadow-sm text-sm relative ${msg.sender === 'user' ? 'bg-[#E7FFDB] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                      
                      {msg.image && (
                         <div className="mb-2 rounded-lg overflow-hidden">
                            <img src={msg.image} alt="Attached" className="w-full h-32 object-cover" />
                         </div>
                      )}
                      
                      <p className="text-gray-800 whitespace-pre-wrap">{msg.text}</p>
                      <p className="text-[9px] text-gray-400 text-right mt-1 flex items-center justify-end gap-1">
                        {msg.timestamp}
                        {msg.sender === 'user' && <CheckCheck size={12} className="text-blue-500" />}
                      </p>
                   </div>
                   
                   {/* Interactive Options */}
                   {msg.sender === 'bot' && msg.options && (
                      <div className="flex flex-wrap gap-2 mt-2">
                         {msg.options.map((opt, i) => (
                            <button 
                              key={i}
                              onClick={() => handleOptionClick(opt)}
                              className="bg-white text-accent text-xs font-bold py-2 px-4 rounded-full shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                               {opt}
                            </button>
                         ))}
                      </div>
                   )}
                </div>
             ))}
             
             {isTyping && (
                <div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm flex gap-1 items-center">
                   <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                   <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
             )}
             <div ref={chatEndRef} />
           </div>
        </div>

        {/* Input Area */}
        <div className="bg-[#F0F0F0] p-2 flex items-center gap-2 z-10">
           <div className="p-2 text-gray-500"><MoreVertical size={20} /></div>
           <div className="flex-grow bg-white rounded-full px-4 py-2 text-sm text-gray-400 flex justify-between items-center shadow-sm">
              <span>Message...</span>
              <Paperclip size={16} />
           </div>
           <div className="w-10 h-10 bg-[#075E54] rounded-full flex items-center justify-center text-white shadow-md">
              <Send size={18} />
           </div>
        </div>

        {/* Home Indicator */}
        <div className="h-1 w-1/3 bg-white/20 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2 z-20"></div>
      </div>
    </div>
  );
};

export default WhatsAppSimulator;
