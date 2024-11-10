import React, { useState, useRef, useEffect } from 'react';

const TelemedChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Dr. AI, your virtual medical assistant. I can help you with both personal health and environmental health concerns. How can I assist you today?",
      sender: 'bot'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Templates for dynamic response generation
  const responseTemplates = {
    greetings: [
      "Hi there! I'm here to help you with your medical and environmental health concerns.",
      "Hello! I'd be happy to assist you with your healthcare needs and environmental queries.",
      "Welcome! How can I support your health journey today?"
    ],
    
    symptoms: {
      headache: [
        "I understand you're experiencing headache symptoms. Can you tell me:",
        "• How long have you had this headache?",
        "• Is it constant or does it come and go?",
        "• Have you taken any medication?",
      ],
      fever: [
        "I see you're concerned about a fever. Important questions to consider:",
        "• What's your current temperature?",
        "• Are you experiencing any other symptoms?",
        "• When did the fever start?",
      ],
      cough: [
        "Regarding your cough, please let me know:",
        "• Is it a dry cough or productive?",
        "• How long have you been coughing?",
        "• Any chest pain or difficulty breathing?",
      ]
    },
    
    environmental: {
      pollution: [
        "For air pollution levels in your area, I'll need:",
        "• Your city or neighborhood",
        "• Any specific concerns (e.g., respiratory issues)",
        "• Time period you're interested in",
        "\nThis will help me provide relevant air quality data and health recommendations."
      ],
      population: [
        "To provide population density information, please specify:",
        "• Your city/district",
        "• The specific area you're interested in",
        "• Whether you need historical trends",
        "\nThis will help me give you accurate demographic data and related health implications."
      ],
      diseases: [
        "To provide information about common diseases in your area, I'll need:",
        "• Your location",
        "• Season/time of year",
        "• Any specific health concerns",
        "\nThis will help me identify prevalent health issues and preventive measures."
      ],
      factories: [
        "For information about industrial impact, please specify:",
        "• Your neighborhood/district",
        "• Radius of interest",
        "• Any specific industry concerns",
        "\nThis will help me assess potential environmental health risks."
      ]
    },
    
    followUp: [
      "Based on what you've described, I have some follow-up questions.",
      "To better understand your situation, I need some additional information.",
      "Let me ask you a few more questions to provide better guidance."
    ],
    
    recommendations: [
      "Given your concerns, here are my recommendations:",
      "Based on what you've shared, I suggest the following:",
      "Here's what I would recommend in your situation:"
    ]
  };

  const medicalPatterns = {
    headache: ['headache', 'migraine', 'head pain', 'head ache'],
    fever: ['fever', 'temperature', 'hot', 'chills'],
    cough: ['cough', 'coughing', 'chest', 'bronchitis'],
    general: ['feeling', 'pain', 'hurt', 'ache'],
    environmental: ['pollution', 'air quality', 'population', 'factories', 'diseases']
  };

  const commonQuestions = [
    // Environmental Health Questions - Aligned with environmental templates
    "What are the current air pollution levels in my city?",
    "How does population density affect health in my district?",
    "What are the common seasonal diseases in my area?",
    "Are there industrial health risks in my neighborhood?",
    
    // Medical Questions - Aligned with symptoms templates
    "I have a severe headache that won't go away",
    "I've been having a fever since yesterday",
    "I've developed a persistent dry cough",
    
    // General Health Questions
    "What's my risk for seasonal allergies?",
    "How can I check air quality impact on my breathing?",
    "What preventive health measures should I take?",
    
    // Specific Environmental Concerns
    "Check factory emissions in my area",
    "What's the pollution forecast for this week?",
    "Are there any disease outbreaks nearby?",
    
    // Symptom-Specific Questions
    "My headache gets worse at night",
    "I have a fever with chills",
    "My cough produces mucus",
    
    // Health & Environment Combined
    "How does air quality affect my allergies?",
    "What health risks come from nearby factories?",
    "Is the current weather affecting my symptoms?"
  ];

  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase();
    let response = [];

    if (input.includes('hello') || input.includes('hi')) {
      response.push(responseTemplates.greetings[Math.floor(Math.random() * responseTemplates.greetings.length)]);
      return response.join('\n');
    }

    // Check for environmental queries
    if (input.includes('pollution') || input.includes('air quality')) {
      return responseTemplates.environmental.pollution.join('\n');
    }
    if (input.includes('population')) {
      return responseTemplates.environmental.population.join('\n');
    }
    if (input.includes('diseases')) {
      return responseTemplates.environmental.diseases.join('\n');
    }
    if (input.includes('factories')) {
      return responseTemplates.environmental.factories.join('\n');
    }

    // Check for medical symptoms
    for (const [condition, patterns] of Object.entries(medicalPatterns)) {
      if (patterns.some(pattern => input.includes(pattern))) {
        if (responseTemplates.symptoms[condition]) {
          return responseTemplates.symptoms[condition].join('\n');
        }
      }
    }

    response.push(responseTemplates.followUp[Math.floor(Math.random() * responseTemplates.followUp.length)]);
    response.push("\nPlease provide more details about your concerns:");
    response.push("• What specific information are you looking for?");
    response.push("• Are you experiencing any health issues?");
    response.push("• Which geographical area are you interested in?");
    
    return response.join('\n');
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    setIsLoading(true);

    const userMessage = {
      id: Date.now(),
      text: text,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: generateResponse(text),
        sender: 'bot'
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full max-w-md mx-auto h-[700px] flex flex-col bg-white rounded-3xl shadow-xl">
      <div className="bg-blue-600 text-white p-4 rounded-t-3xl">
        <h2 className="text-2xl font-semibold">Dr. AI - Health & Environment Assistant</h2>
        <p className="text-sm opacity-90">Personal & Environmental Health Support 24/7</p>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-[500px]">
        {messages.map((message) => (
         <div
         key={message.id}
         className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
       >
       
            <div
              className={`max-w-[85%] p-3 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              <pre className="whitespace-pre-wrap font-sans text-sm">{message.text}</pre>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-bl-none">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t">
        <p className="text-sm text-gray-600 mb-2">Quick Questions:</p>
        <div className="max-h-[100px] overflow-y-auto pr-2 space-y-1 scrollbar-thin scrollbar-thumb-gray-300">
          {commonQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(question)}
              disabled={isLoading}
              className={`w-full p-2 text-left rounded-lg transition-colors text-sm ${
                isLoading
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TelemedChatbot;