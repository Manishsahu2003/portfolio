import React, { useState, useEffect } from 'react';
import { MapPin, CheckCircle, Sparkles, Code, Cloud, Database } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [floatingElements, setFloatingElements] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  
  const fullText = 'Manish Sahu';
  const rotatingWords = ['DevOps Engineer', 'Cloud Computing', 'AI/ML Enthusiast', 'Automation'];

  // Initialize floating elements
  useEffect(() => {
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2000,
    }));
    setFloatingElements(elements);
  }, []);

  // Typewriter effect for name
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  // Rotating words effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const techIcons = [
    { Icon: Code, color: 'text-blue-500', delay: '0s' },
    { Icon: Cloud, color: 'text-orange-500', delay: '0.5s' },
    { Icon: Database, color: 'text-purple-500', delay: '1s' },
  ];

  // AI Assistant logic
  const aiResponses: { [key: string]: string } = {
    'who are you': "I'm Manish Sahu, a B.Tech Computer Science student from Udaipur, passionate about DevOps, Cloud Computing, and AI/ML. I specialize in AWS, automation, and scalable deployments. I have 5+ projects, 4+ certifications, and work with 10+ technologies.",
    'what skills do you have': "My technical skills include: Languages (Python, SQL, C++, C, HTML, CSS), Tools (Docker, GitHub, pandas, Jenkins, Streamlit, NumPy, boto3, Prometheus), and Platforms & DevOps (Linux, AWS, CI/CD, IoT, Kubernetes, Ansible). I'm also experienced with computer vision, gesture recognition, and automation.",
    'what work do you do': "I work on cloud automation, DevOps pipelines, AI/ML projects, and scalable application deployments. My projects include hand gesture-controlled AWS instance management, Flask CI/CD with Docker & Kubernetes, IoT milk adulteration detection, GenAI bug fixing tools, and multicontainer microservices. I build solutions using AWS, Docker, Jenkins, and Python.",
    'what are your achievements': "I've won multiple hackathons including NutriScan (Hackathon Winner), am an AWS Cloud Practitioner, and have certifications in SQL and GenAI. I've also led cloud and social media initiatives. I have 3+ awards and specialize in innovative automation solutions.",
    'how to contact you': "You can contact me at manishsahu81128@gmail.com or via LinkedIn: https://www.linkedin.com/in/manish-sahu99/. I'm currently open to work and available for new opportunities.",
    'projects': "My featured projects include: 1) Hand Gesture-Controlled AWS Instance Management (OpenCV + Boto3), 2) AWS EC2 Automation via API Gateway & Lambda, 3) Flask App CI/CD with Docker, Jenkins & Kubernetes, 4) GenAI Bug Fixing Tool, 5) GenAI AWS Expert Advisor, 6) NutriScan (Hackathon Winner), 7) Milk Adulteration Detection IoT, 8) Multicontainer Microservices, and 9) Event-Driven Architecture on AWS. I also have minor projects in Docker and Python automation.",
    'education': "I'm currently pursuing B.Tech in Computer Science. I'm based in Udaipur, India and passionate about bridging the gap between development and operations by delivering reliable, production-ready solutions.",
    'specializations': "I specialize in DevOps Engineering, AWS Cloud Computing, AI/ML development, and automation. My mission is to bridge the gap between development and operations by delivering reliable, production-ready solutions with speed and precision.",
    'technologies': "I work with Python, Docker, Jenkins, AWS (EC2, Lambda, S3, SNS), Linux, CI/CD, SQL, C++, HTML, CSS, pandas, Streamlit, NumPy, boto3, OpenCV, Kubernetes, Ansible, and various automation tools. I'm experienced in computer vision, gesture recognition, and IoT applications."
  };

  function getAIResponse(input: string): string {
    const normalized = input.toLowerCase();
    if (normalized.includes('who')) return aiResponses['who are you'];
    if (normalized.includes('skill')) return aiResponses['what skills do you have'];
    if (normalized.includes('work')) return aiResponses['what work do you do'];
    if (normalized.includes('achieve') || normalized.includes('award')) return aiResponses['what are your achievements'];
    if (normalized.includes('contact') || normalized.includes('email')) return aiResponses['how to contact you'];
    if (normalized.includes('project')) return aiResponses['projects'];
    if (normalized.includes('education') || normalized.includes('study')) return aiResponses['education'];
    if (normalized.includes('specializ') || normalized.includes('focus')) return aiResponses['specializations'];
    if (normalized.includes('technolog') || normalized.includes('tech') || normalized.includes('tools')) return aiResponses['technologies'];
    return "I'm your AI assistant! Ask me about my skills, work, achievements, projects, education, specializations, technologies, or how to contact me.";
  }

  const [showChat, setShowChat] = useState(false);
  const [chatHistory, setChatHistory] = useState<Array<{from: 'user'|'ai', text: string}>>([]);
  const [chatInput, setChatInput] = useState('');

  const handleSend = () => {
    if (!chatInput.trim()) return;
    const userMsg: { from: 'user' | 'ai'; text: string } = { from: 'user', text: chatInput };
    const aiMsg: { from: 'user' | 'ai'; text: string } = { from: 'ai', text: getAIResponse(chatInput) };
    setChatHistory(prev => [...prev, userMsg, aiMsg]);
    setChatInput('');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Enhanced background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
      </div>
      
      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animation: `float 6s ease-in-out infinite`,
              animationDelay: `${element.delay}ms`,
            }}
          />
        ))}
        
        {/* Large animated background elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-blue-300/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border-2 border-purple-300/30 rotate-12 animate-bounce"></div>
      </div>


      {/* Center Animated SVG Blob */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none">
        <svg width="480" height="480" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[340px] md:w-[480px] h-[340px] md:h-[480px] opacity-60 blur-2xl animate-blob-morph">
          <defs>
            <linearGradient id="hero-blob-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#A21CAF" />
            </linearGradient>
          </defs>
          <path>
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="M370,320Q320,390,240,400Q160,410,110,340Q60,270,110,200Q160,130,240,120Q320,110,370,180Q420,250,370,320Z;
                      M370,320Q320,390,240,400Q160,410,110,340Q60,270,120,220Q180,170,240,120Q300,70,370,140Q440,210,370,320Z;
                      M370,320Q320,390,240,400Q160,410,110,340Q60,270,110,200Q160,130,240,120Q320,110,370,180Q420,250,370,320Z" />
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Enhanced Text Content */}
          <div className="space-y-8">
            {/* Animated greeting */}
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
                <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                  Hello, I'm
                </span>
              </div>
            </div>

            {/* Static name display */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold animate-fade-in-up delay-200">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {fullText}
                </span>
              </h1>
              
              {/* Rotating designation with smooth transitions */}
              <div className="h-20 overflow-hidden animate-fade-in-up delay-400">
                <div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentWordIndex * 5}rem)` }}
                >
                  {rotatingWords.map((word) => (
                    <p key={word} className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 font-medium h-20 flex items-center">
                      {word}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Location with animated icon */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 animate-fade-in-up delay-600">
                <MapPin className="w-6 h-6 animate-bounce" />
                <span className="text-lg md:text-xl">Udaipur, India</span>
              </div>

              {/* Enhanced availability badge */}
              <div className="flex items-center gap-2 animate-fade-in-up delay-800">
                <div className="relative">
                  <CheckCircle className="w-6 h-6 text-green-500 animate-pulse" />
                  <div className="absolute inset-0 w-6 h-6 bg-green-500 rounded-full animate-ping opacity-20"></div>
                </div>
                <span className="text-lg md:text-xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-semibold animate-pulse">
                  ✅ Open to Work
                </span>
              </div>
            </div>

            {/* Tech stack icons with staggered animation */}
            <div className="flex gap-4 animate-fade-in-up delay-1000">
              {techIcons.map(({ Icon, color, delay }, index) => (
                <div
                  key={index}
                  className={`p-3 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg backdrop-blur-sm hover:scale-110 transition-all duration-300 ${color}`}
                  style={{ animationDelay: delay }}
                >
                  <Icon className="w-6 h-6 animate-bounce" style={{ animationDelay: delay }} />
                </div>
              ))}
            </div>

            {/* Enhanced action buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-1200">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 transform relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 transform relative overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>

          {/* Right Side - Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up delay-300">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center shadow-inner relative overflow-hidden">
                  <img
                    src="/assets/manish.jpg"
                    alt="Manish Sahu"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Floating Button & Chat Modal */}
      <div>
        {/* Floating Button */}
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          title="Ask AI Assistant"
          style={{ boxShadow: '0 4px 24px rgba(80, 80, 200, 0.2)' }}
        >
          <span role="img" aria-label="AI">🤖</span>
        </button>

        {/* Chat Modal */}
        {showChat && (
          <div className="fixed bottom-24 right-8 z-50 w-80 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col" style={{ maxHeight: '60vh' }}>
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-xl">
              <span className="font-bold">AI Assistant</span>
              <button onClick={() => setShowChat(false)} className="text-white hover:text-gray-200">✖</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2" style={{ minHeight: '180px' }}>
              {chatHistory.length === 0 && (
                <div className="text-gray-500 dark:text-gray-400 text-sm">Ask me about my skills, work, achievements, or how to contact me!</div>
              )}
              {chatHistory.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-3 py-2 rounded-lg max-w-xs text-sm ${msg.from === 'user' ? 'bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-gray-100 dark:border-gray-800 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your question..."
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-200"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 sm:h-20 md:h-24 lg:h-32"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white dark:fill-gray-900"
          ></path>
        </svg>
      </div>

      {/* Custom CSS for additional animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-wave {
          animation: wave 6s ease-in-out infinite;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }
        /* Blob morph animation */
        .animate-blob-morph {
          animation: blob-morph 12s ease-in-out infinite alternate;
        }
        @keyframes blob-morph {
          0% {
            filter: blur(32px);
            transform: scale(1) rotate(0deg);
          }
          50% {
            filter: blur(40px);
            transform: scale(1.08) rotate(10deg);
          }
          100% {
            filter: blur(32px);
            transform: scale(1) rotate(-5deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;