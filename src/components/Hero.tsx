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

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Enhanced Text Content */}
          <div className="space-y-8">
            {/* Animated greeting */}
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
                <span className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                  Hello, I'm
                </span>
              </div>
            </div>

            {/* Enhanced name with typewriter effect */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up delay-200">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {displayedText}
                  {(isTyping || showCursor) && <span className="animate-pulse">|</span>}
                </span>
              </h1>
              
              {/* Rotating designation with smooth transitions */}
              <div className="h-16 overflow-hidden animate-fade-in-up delay-400">
                <div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentWordIndex * 4}rem)` }}
                >
                  {rotatingWords.map((word) => (
                    <p key={word} className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium h-16 flex items-center">
                      {word}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Location with animated icon */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 animate-fade-in-up delay-600">
                <MapPin className="w-5 h-5 animate-bounce" />
                <span>Udaipur, India</span>
              </div>

              {/* Enhanced availability badge */}
              <div className="flex items-center gap-2 animate-fade-in-up delay-800">
                <div className="relative">
                  <CheckCircle className="w-5 h-5 text-green-500 animate-pulse" />
                  <div className="absolute inset-0 w-5 h-5 bg-green-500 rounded-full animate-ping opacity-20"></div>
                </div>
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-semibold animate-pulse">
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
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 transform relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 transform relative overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>

          {/* Right Side - Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up delay-300">
            <div className="relative group">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-spin-slow opacity-75"></div>
              
              {/* Middle ring with pulse */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-2 shadow-2xl animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center shadow-inner relative overflow-hidden">
                  {/* Profile image with hover effects */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <img
                      src="/assets/manish.jpg"
                      alt="Manish Sahu"
                      className="w-full h-full object-cover rounded-full group-hover:brightness-110 transition-all duration-500"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements around profile */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-bounce">
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-bounce delay-500">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute top-1/2 -right-8 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg animate-bounce delay-1000">
                <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }
      `}</style>
    </section>
  );
};

export default Hero;